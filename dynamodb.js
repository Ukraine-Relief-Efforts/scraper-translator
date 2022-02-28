var AWS = require("aws-sdk");

let poland_en_v1 = {"isoFormat":"2022-02-28T09:46:06.251173","reception":[{"name":"Pałac Suchodolskich Gminny Ośrodek Kultury i Turystyki, ul. Parkowa 5, 22-175 Dorohusk – osiedle ​","qr":"https://www.qr-online.pl/bin/qr/8caf19812112ea544f35e994cd58573c.png","lon":"23.8048281","address":"Pałac Suchodolskich Gminny Ośrodek Kultury i Turystyki, ul. Parkowa 5, 22-175 Dorohusk – osiedle ​","lat":"51.1653213"},{"name":"Przygraniczne Centrum Kultury i Rekreacji, ul. Spółdzielcza 8, 22 - 540 Dołhobyczów","qr":"https://www.qr-online.pl/bin/qr/7608a0a9319f79f95fb5346d5f6e3466.png","lon":"24.0305098","address":"Przygraniczne Centrum Kultury i Rekreacji, ul. Spółdzielcza 8, 22 - 540 Dołhobyczów","lat":"50.5879273"},{"name":"Zespół Szkół w Horodle, ul. Piłsudskiego 58, 22 - 523 Horodło","qr":"https://www.qr-online.pl/bin/qr/9d035f7027b5c8c684eff29622bc601e.png","lon":"24.0390569","address":"Zespół Szkół w Horodle, ul. Piłsudskiego 58, 22 - 523 Horodło","lat":"50.8926594"},{"name":"Szkoła Podstawowa w Lubyczy Królewskiej (zaplecze hali sportowej), ul. Jana III Sobieskiego 5, 22 - 680 Lubycza Królewska","qr":"https://www.qr-online.pl/bin/qr/bbb0f954ba7693f0991917268240e46c.png","lon":"23.521044","address":"Szkoła Podstawowa w Lubyczy Królewskiej (zaplecze hali sportowej), ul. Jana III Sobieskiego 5, 22 - 680 Lubycza Królewska","lat":"50.339419"},{"name":"Świetlica, Korczowa 155 37-552 Korczowa","qr":"https://www.qr-online.pl/bin/qr/fa07e43f69c7eb5decd63e9c31642bb1.png","lon":"23.0793939","address":"Świetlica, Korczowa 155 37-552 Korczowa","lat":"49.956138"},{"name":"Hala sportowa - Medyka 285, 37-732 Medyka","qr":"https://www.qr-online.pl/bin/qr/b4eceef3a198b79c3e852cccc4d95bae.png","lon":"22.9314517","address":"Hala sportowa - Medyka 285, 37-732 Medyka","lat":"49.8051889"},{"name":"Szkoła Podstawowa w m. Krowica Sama 183, 37-625 Krowica Sama","qr":"https://www.qr-online.pl/bin/qr/467cce629c37f57188d61421d15416c0.png","lon":"23.232664","address":"Szkoła Podstawowa w m. Krowica Sama 183, 37-625 Krowica Sama","lat":"50.101031"},{"name":"Była Szkoła Podstawowa w Łodynie,  Łodyna 41, 38-700 Ustrzyki Dolne","qr":"https://www.qr-online.pl/bin/qr/5f19607be1b4e14192612cca34ea6ac5.png","lon":"22.59487","address":"Była Szkoła Podstawowa w Łodynie,  Łodyna 41, 38-700 Ustrzyki Dolne","lat":"49.460152"}],"dateTime":"2022-02-28  09:46:06  ","source":"https://www.gov.pl/web/udsc/ukraina2","country":"poland-en","general":["Border crossing","If you are fleeing the Russian military aggression against Ukraine, you will be admitted to Poland.","If you do not have a place of stay in Poland, go to the nearest reception point.","At the reception point: you will receive more detailed information about your stay in Poland, we will provide you with temporary accommodation in Poland, you will receive a hot meal, drink, basic medical assistance and a place to rest.","If you are escaping from an armed conflict in Ukraine, do not worry that you do not have documents allowing you to enter Poland. You will be admitted to Poland. Take the most important documents with you - internal passport, foreign passport (if you have one), birth certificates of children traveling with you, medical documentation.","Border crossings can also be crossed on foot.","If you travel with animals - dogs, cats, ferrets must have a microchip and vaccination, the rest (rodents, rabbits, amphibians, reptiles, ornamental aquatic animals, invertebrates) without restrictions, but the decision will be made when crossing the border by the National Revenue Administration.","Decisions related to the transported movable property (e.g. a car) are taken by the National Revenue Administration when crossing the border.","Poland has no influence on the border procedures applicable when crossing the Ukrainian border.","Stay in Poland","If you do not have accommodation in Poland, you will get the necessary information at the reception points near the border.","You have access to the Polish health care.","If you are already in Poland, don't worry about ending your legal stay. We will make sure that your legal stay is extended.","Note: registration at the reception point is not obligatory.","Information","If you have not found the information you need, call the hotline: +48 47 721 75 75.","If you need information on the detailed rules of crossing the border, please contact the Border Guard : +48 82 568 51 19.","There are information points and helplines in the largest Polish cities."]};
let poland_en_v2 = {"isoFormat":"2022-03-28T09:46:06.251173","reception":[{"name":"Pałac Suchodolskich THIS NAME CHANGEDGminny Ośrodek Kultury i Turystyki, ul. Parkowa 5, 22-175 Dorohusk – osiedle ​","qr":"https://www.qr-online.pl/bin/qr/thisurlchanged.png","lon":"23.8048281","address":"Pałac Suchodolskich Gminny Ośrodek Kultury i Turystyki, ul. Parkowa 5, 22-175 Dorohusk – osiedle ​","lat":"51.1653213"},{"name": "this is a new entry", "lat": "69", "lon": "420", "address": "idk what to put here", "qr": "https://this.doesn't/exist.lol"},{"name":"Przygraniczne Centrum Kultury i Rekreacji, ul. Spółdzielcza 8, 22 - 540 Dołhobyczów","qr":"https://www.qr-online.pl/bin/qr/7608a0a9319f79f95fb5346d5f6e3466.png","lon":"24.0305098","address":"Przygraniczne Centrum Kultury i Rekreacji, ul. Spółdzielcza 8, 22 - 540 Dołhobyczów","lat":"50.5879273"},{"name":"Szkoła Podstawowa w Lubyczy Królewskiej (zaplecze hali sportowej), ul. Jana III Sobieskiego 5, 22 - 680 Lubycza Królewska","qr":"https://www.qr-online.pl/bin/qr/bbb0f954ba7693f0991917268240e46c.png","lon":"23.521044","address":"Szkoła Podstawowa w Lubyczy Królewskiej (zaplecze hali sportowej), ul. Jana III Sobieskiego 5, 22 - 680 Lubycza Królewska","lat":"50.339419"},{"name": "yet another one to throw it off","address":"none","lat":"420","lon":"69","qr":"none"},{"name":"Świetlica, Korczowa 155 37-552 Korczowa","qr":"https://www.qr-online.pl/bin/qr/fa07e43f69c7eb5decd63e9c31642bb1.png","lon":"23.0793939","address":"Świetlica, Korczowa 155 37-552 Korczowa","lat":"49.956138"},{"name":"Hala sportowa - Medyka 285, 37-732 Medyka","qr":"https://www.qr-online.pl/bin/qr/b4eceef3a198b79c3e852cccc4d95bae.png","lon":"22.9314517","address":"Hala sportowa - Medyka 285, 37-732 Medyka","lat":"49.8051889"},{"name":"Szkoła Podstawowa w m. Krowica Sama 183, 37-625 Krowica Sama","qr":"https://www.qr-online.pl/bin/qr/467cce629c37f57188d61421d15416c0.png","lon":"23.232664","address":"Szkoła Podstawowa w m. Krowica Sama 183, 37-625 Krowica Sama","lat":"50.101031"},{"name":"Była Szkoła Podstawowa w Łodynie,  Łodyna 41, 38-700 Ustrzyki Dolne","qr":"https://www.qr-online.pl/bin/qr/5f19607be1b4e14192612cca34ea6ac5.png","lon":"22.59487","address":"Była Szkoła Podstawowa w Łodynie,  Łodyna 41, 38-700 Ustrzyki Dolne","lat":"49.460152"}],"dateTime":"2022-02-28  09:46:06  ","source":"https://www.gov.pl/web/udsc/ukraina2","country":"poland-en","general":["Border crossing","If you are fleeing the Russian military aggression against Ukraine, you will be admitted to Poland.","If you do not have a place of stay in Poland, go to the nearest reception point.","At the reception point: you will receive more detailed information about your stay in Poland, we will provide you with temporary accommodation in Poland, you will receive a hot meal, drink, basic medical assistance and a place to rest.","If you are escaping from an armed conflict in Ukraine, do not worry that you do not have documents allowing you to enter Poland. You will be admitted to Poland. Take the most important documents with you - internal passport, foreign passport (if you have one), birth certificates of children traveling with you, medical documentation.","If you travel with animals - dogs, cats, ferrets must have a microchip and vaccination, the rest (rodents, rabbits, amphibians, reptiles, ornamental aquatic animals, invertebrates) without restrictions, but the decision will be made when crossing the border by the National Revenue Administration.","New line here", "Decisions related to the transported movable property (e.g. a car) are taken by the National Revenue Administration when crossing the border.","Poland has no influence on the border procedures applicable when crossing the Ukrainian border.","Stay in Poland","If you do not have accommodation in Poland, you will get the necessary information at the reception points near the border.","You have access to the Polish health care.","If you are already in Poland, don't worry about ending your legal stay. We will make sure that your legal stay is extended.","Note: registration at the reception point is not obligatory.","Information","If you have not found the information you need, call THIS CHANGED THIS CHANGED THIS CHANGED the hotline: +48 47 721 75 75.","If you need information on the detailed rules of crossing the border, please contact the Border Guard : +48 82 568 51 19.","There are information points and helplines in the largest Polish cities."]};

AWS.config.update({
  region: "us-east-1",
});

var docClient = new AWS.DynamoDB.DocumentClient();

async function getFromDynamo(country, callback) {

    let params = {
        TableName: "country",
        Key: {"country": country}
    };

    return  docClient.get(params, callback);

    //absolutely troll the program by giving it fake data
    //(cos I can't access the real data)
/*    if (country == "poland-en") {
        callback(null, poland_en_v1);
    } else if (country == "poland-en-old") {
        callback(null, poland_en_v2);
    } else {
        callback({"error": "lol that country doesnæ exist m8"});
    }*/
}

function reception_equals(r1, r2) {
    return (
        r1.name == r2.name &&
        r1.address == r2.address &&
        r1.lat == r2.lat &&
        r1.lon == r2.lon &&
        r1.qr == r2.qr);
}

function reception_includes(arr, val) {
    for (const v of arr) {
        if (reception_equals(val, v)) return true;
    }

    return false;
}

async function main() {
    //let p  = await getFromDynamo("poland-en").promise();
    //let p2 = await getFromDynamo("poland-en-old").promise();
    //console.log(p);

    const new_val = poland_en_v2;
    const old_val = poland_en_v1;
    const old_val_translated = poland_en_v1; //for test
    //actually all of this is for test

    let new_val_translated = {
        
    };

    for (const val of new_val["reception"]) {
        //order doesn't matter so just see if it is in the other array
        if (reception_includes(old_val["reception"], val)) {
            console.log("Same: ", val);
        } else {
            console.log("Not same: ", val);
        }
    }

    for (const line of new_val["general"]) {
        //this one is more complex as order does matter
    }
}

var __name__ = "__main__";

//python moment
if (__name__ == "__main__") {
    main();
}
