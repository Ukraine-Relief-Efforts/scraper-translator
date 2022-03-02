let AWS = require('aws-sdk');
let dynamodb = new AWS.DynamoDB();

AWS.config.update({
  region: "us-east-1",
});

export function getFromDynamo(country) {
    let params = {
        TableName: "TechForUkraine-CIG",
        Key: { 
            "country": {
                S: country 
            }
        }
    };

    return new Promise((resolve, reject) => {
        dynamodb.getItem(params, function(err, data) {
            if (err) {
                console.log("An error occurred GETting country from dynamo");
                console.log(err, err.stack);
                reject(err);
            } else {
                console.log("Successfully got", country, "from dynamo");
                console.log(JSON.stringify(data));
                resolve(data["Item"]);
            }
        });
    });
}

export function putToDynamo(item) {
    var params = {
        TableName: "TechForUkraine-CIG",
        Item: item
    };
    
    return new Promise((resolve, reject) => {
        dynamodb.putItem(params, function(err, data) {
            if (err) {
                console.log("An error occurred PUTting country to dynamo");
                console.log(err, err.stack);
                reject(err);
            } else {
                console.log("Successfully put", item["country"]["S"], "to dynamo");
                console.log(JSON.stringify(data));
                resolve(data);
            }
        });
    });
}


/*

    The 'payload' variable (line 61) is the "ThisIsMyTestPayload.json" file in /resources.

*/
// var testPayloadName = "THIS IS MY TEST PAYLOAD";
// async function test() {
//     await putToDynamo(payload);
//     let data = await getFromDynamo(testPayloadName);
//     data["country"]["S"] = testPayloadName + "UPDATED";
//     await putToDynamo(data);
//     console.log(data);
// }

// test();
