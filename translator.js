const projectId = 'yt-research-283517';
const location = 'global';

const {TranslationServiceClient} = require('@google-cloud/translate');

const translationClient = new TranslationServiceClient();

async function translate(texts, source, dest) {
    const request = {
        parent: `projects/${projectId}/locations/${location}`,
        contents: texts,
        mimeType: 'text/plain',
        sourceLanguageCode: source,
        targetLanguageCode: dest,
    };

    const [response] = await translationClient.translateText(request);

    return response.translations;
}

translate(["test text version 1", "this is a test 2"], 'en', 'fr').then(function(responses) {
    for (const response of responses) {
        console.log(response);
    }
});
