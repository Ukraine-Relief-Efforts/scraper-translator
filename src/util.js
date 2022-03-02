import { translate, translate_receptions } from "./translator.js";

function reception_equals(r1, r2) {
    return (
        r1.name    === r2.name &&
        r1.address === r2.address &&
        r1.lat     === r2.lat &&
        r1.lon     === r2.lon &&
        r1.qr      === r2.qr);
}

function reception_includes(arr, val) {
    console.log("In includes thingie:", arr);
    for (const v of arr) {
        if (reception_equals(val, v)) return true;
    }

    return false;
}

function find_idx_in_reception(arr, val) {
    //get the index in the translated array, assuming coords are unique
    let idx = 0;
    console.log("In idx thingie:", arr);
    for (const translated of arr) {
        if (translated.lat === val.lat &&
            translated.lon === val.lon) {
            return idx;
        }

        idx += 1;
    }
    return -1;
}

export async function translate_object(old_val, new_val, old_val_translated, source, dest) {
    let new_val_translated = {
        isoFormat: new_val.isoFormat,
        country:   new_val.country,
        dateTime:  new_val.dateTime,
        source:    new_val.source,
        general:   [],
        reception: [],
    };

    let receptions_to_be_translated = [];

    for (const val of new_val["reception"]) {
        //order doesn't matter so just see if it is in the other array
        if (reception_includes(old_val["reception"], val)) {

            //black magic to get the old translated version
            const idx = find_idx_in_reception(old_val_translated.reception, val);
            if (idx === -1) {
                console.log("Reception doesn't have a translation when it really should - something has gone wrong (not fatal)");
                //doesn't exist in translation, translate it again I guess
                receptions_to_be_translated.push(val);
            }
            new_val_translated.reception.push(old_val_translated.reception[idx])
        } else {
            receptions_to_be_translated.push(val);
        }
    }

    //TODO wtf is that name
    let receptions_that_have_just_right_now_been_translated = await translate_receptions(receptions_to_be_translated, source, dest);
    for (const val of receptions_that_have_just_right_now_been_translated) {
        new_val_translated.reception.push(val);
    }

    //build a key/value object of all the currently known translations
    //use it to translate as much as possible, and anything we don't already know
    //is sent off to google translate
    let general_translations = {};

    //get translations we already know
    for (let i = 0; i < old_val.general.length; i++) {
        general_translations[old_val.general[i]] = old_val_translated.general[i];
    }

    let texts_to_translate = [];
    //get translations that we don't already know
    for (const line of new_val["general"]) {
        if (!(line in general_translations)) {
            texts_to_translate.push(line);
        }
    }

    let translated_texts = await translate(texts_to_translate, source, dest);
    if (translated_texts.length !== texts_to_translate.length) {
        console.log("Terrible error has occured: wrong length translated text");
        return;
    }
    for (let i = 0; i < texts_to_translate.length; i++) {
        general_translations[texts_to_translate[i]] = translated_texts[i];
    }

    //use the generated dictionary to translate the actual text
    for (const line of new_val["general"]) {
        new_val_translated["general"].push(general_translations[line]);
    }
    return new_val_translated;
}

export async function translate_object_from_scratch(new_val, source, dest) {
    let new_val_translated = {
        isoFormat: new_val.isoFormat,
        country:   new_val.country,
        dateTime:  new_val.dateTime,
        source:    new_val.source,
        general:   await translate(new_val.general, source, dest),
        reception: await translate_receptions(new_val.reception, source, dest),
    };
    return new_val_translated;
}

//DEBUG DEBUG DEBUG
//translate_object(poland_en_v1, poland_en_v2, poland_en_v1, 'en', 'pl').then(function(data){console.log(data);});
