import { translate_object } from "../dynamodb";
import { polandEn_v1 } from "../mocks/poland-en";

exports.scraperTranslatorHandler = async function (event, context) {

    console.log('Starting translator handler');
    console.log(event);

    // Do translation work here
    // translate_object();

}