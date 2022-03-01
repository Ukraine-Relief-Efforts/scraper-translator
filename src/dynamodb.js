import AWS from "aws-sdk";

AWS.config.update({
  region: "us-east-1",
});

const docClient = new AWS.DynamoDB.DocumentClient();

export function getFromDynamo(country) {
    let params = {
        TableName: "TechForUkraine-CIG",
        Key: {"country": country}
    };
    return docClient.get(params).promise();
}

export function putToDynamo(data) {
    var params = {
        TableName: "TechForUkraine-CIG",
        Item: data
    };
    docClient.put(params, callback).promise();
}

async function test() {
    await putToDynamo({"country": "ree", "asdf": "foo"});
    const data = await getFromDynamo("ree");
    console.log(data);
}

test();
