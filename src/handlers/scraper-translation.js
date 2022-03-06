import {translate_object, translate_object_from_scratch} from "../util.js";
import { polandEn_v1 } from "../mocks/poland-en.js";
import {getFromDynamo, putToDynamo} from "../dynamodb.js";

import { fileURLToPath } from "url";
import { dirname } from "path";
import { createRequire } from "module";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const require = createRequire(import.meta.url);

export const handler = async(event, context) => {

    console.log('Starting translator handler');
    //NOTE: order matters, high value languages first (in case something goes terribly wrong)
    const target_locales = ["ua", "ru", "en", "pl", "rs", "ro", "hu", "de", "es", "it", "kr"];
    const source_locales = ["hu",      "ro",      "pl",     "ro"];
    const source_entries = ["hungary", "moldova", "poland", "romania"]; //TODO get this list automatically?
    for (let i = 0; i < source_entries.length; i++) {
        const source_entry = source_entries[i];
        const source_locale = source_locales[i];
        for (const target_locale of target_locales) {
            //don't translate if it's already in that language
            if (source_locale == target_locale) {
                continue;
            }
            console.log("Translating " + source_entry + "-" + source_locale + " to " + target_locale);
            const new_val = await getFromDynamo(source_entry + "-" + source_locale);
            try {
                const old_val            = await getFromDynamo(source_entry + "-" + source_locale + "-old");
                const old_val_translated = await getFromDynamo(source_entry + "-" + target_locale);
                //TODO this check doesn't work!
                if (Object.keys(old_val).length === 0 || Object.keys(old_val_translated).length === 0 || 
                    Object.keys(old_val).length === 0 || Object.keys(old_val_translated).length === 0 || 
                    Object.keys(old_val_translated.reception).length === 0) {
                    null.toString(); //hack fix: somehow just cause it to to to the `catch` blocks
                }
                const new_val_translated = await translate_object(old_val, new_val, old_val_translated, source_locale, target_locale, source_entry);
                await putToDynamo(new_val_translated);
            } catch (e) {
                //translate object from scratch if it doesn't exist
                console.log("Translated object doesn't exist, here's the error just in case anything else went wrong: ", e);
                const new_val_translated = await translate_object_from_scratch(new_val, source_locale, target_locale, source_entry);
                await putToDynamo(new_val_translated);
            }
        }
    }

    //rename items with a -old suffix
    for (let i = 0; i < source_entries.length; i++) {
        const source_entry = source_entries[i];
        const source_locale = source_locales[i];
        let val = await getFromDynamo(source_entry + "-" + source_locale);
        val["country"] = source_entry + "-" + source_locale + "-old";
        await putToDynamo(val);
    }
}
