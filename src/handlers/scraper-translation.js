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

    const locale_to_gtrans = {
        "de": "de",
        "en": "en",
        "es": "es",
        "it": "it",
        "kr": "ko",
        "pl": "pl",
        "rs": "sr",
        "ua": "uk",
        "hu": "hu",
        "ro": "ro",
        "ru": "ru",
    };

    //NOTE: order matters, high value languages first (in case something goes terribly wrong)
    
    const target_locales = ["ua", "ru", "en", "pl", "rs", "ro", "hu", "de", "es", "it", "kr"];
    const source_locales = ["hu",      "ro",      "pl",     "ro"];
    const source_entries = ["hungary", "moldova", "poland", "romania"]; //TODO get this list automatically?
    for (let i = 0; i < source_entries.length; i++) {
        const source_entry = source_entries[i];
        const source_locale = source_locales[i];
        for (const target_locale of target_locales) {
            //don't translate if it's already in that language
            if (target_locale === source_locale) continue;
            console.log("Translating " + source_entry + "-" + source_locale + " to " + target_locale);
            const new_val = await getFromDynamo(source_entry + "-" + source_locale);
            try {
                const old_val            = await getFromDynamo(source_entry + "-" + source_locale + "-old");
                const old_val_translated = await getFromDynamo(source_entry + "-" + target_locale);
                console.log(old_val_translated);
                if (old_val === undefined || old_val_translated === undefined) {
                    null.toString(); //hack fix: somehow just cause it to to to the `catch` blocks
                }
                const new_val_translated = translate_object(old_val, new_val, old_val_translated, source_locale, target_locale);
                await putToDynamo(new_val_translated);
            } catch (e) {
                //translate object from scratch if it doesn't exist
                console.log("Translated object doesn't exist, here's the error just in case anything else went wrong: ", e);
                const new_val_translated = translate_object_from_scratch(new_val, source_locale, target_locale);
                await putToDynamo(new_val_translated);
            }
        }
    }
}
