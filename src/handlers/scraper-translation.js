import {translate_object} from "../dynamodb.js";
import { polandEn_v1 } from "../mocks/poland-en.js";

import { fileURLToPath } from "url";
import { dirname } from "path";
import { createRequire } from "module";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const require = createRequire(import.meta.url);

export const handler = async(event, context) => {

    console.log('Starting translator handler');
    console.log(event);

    // Do translation work here
    // translate_object();

}