import { TranslationServiceClient } from "@google-cloud/translate";

const projectId = 'yt-research-283517';
const location = 'global';

const translationClient = new TranslationServiceClient({"keyFilename": "google_cloud_secret.json"});

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


export async function translate(texts, source, dest) {
    if (texts.length === 0) return [];

    const request = {
        parent: `projects/${projectId}/locations/${location}`,
        contents: texts,
        mimeType: 'text/plain',
        sourceLanguageCode: locale_to_gtrans[source],
        targetLanguageCode: locale_to_gtrans[dest],
    };

    const [response] = await translationClient.translateText(request);

    let res_arr = [];

    for (const res of response.translations) {
        res_arr.push(res.translatedText);
    }

    return res_arr;
}

export async function translate_receptions(receptions, source, dest) {

    let text_arr = [];

    for (const val of receptions) {
        text_arr.push(val.name);
        text_arr.push(val.address);
    }

    const trans_text_arr = await translate(text_arr, source, dest);

    for (let val of receptions) {
        val.name = trans_text_arr.shift();
        val.address = trans_text_arr.shift();
    }

    return receptions;
}
/*
translate(["test text version 1", "this is a test 2"], 'en', 'fr').then(function(responses) {
    for (const response of responses) {
        console.log(response);
    }
});
*/
