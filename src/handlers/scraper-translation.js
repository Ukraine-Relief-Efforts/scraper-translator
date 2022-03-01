import {translate_object} from "../util.js";
import { polandEn_v1 } from "../mocks/poland-en.js";
import {getFromDynamo, putToDynamo} from "./dynamodb.js";

import { fileURLToPath } from "url";
import { dirname } from "path";
import { createRequire } from "module";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const require = createRequire(import.meta.url);

export const handler = async(event, context) => {

    console.log('Starting translator handler');
    console.log(event);

    const locale_to_gtrans = {
        "de": "de",
        "en": "en",
        "es": "es",
        "it": "it",
        "kr": "ko",
        "pl": "pl",
        "rs": "sr",
        "ua": "uk",
    };

    const target_locales = ["de", "en", "es", "it", "kr", "pl", "rs", "ru", "ua"];
    const source_locales = ["hu", "ro", "pl", "ro"];
    const source_entries = ["hungary", "moldova", "poland", "romania"];
    for (let i = 0; i < source_entries.length; i++) {
        const source_entry = source_entries[i];
        const source_locale = source_locales[i];
        for (const target_locale of target_locales) {
            //don't translate if it's already in that language
            if (target_locale === source_locale) continue;

            let old_val = getFromDynamo
        }
    }

    // Do translation work here
    // translate_object();

}
