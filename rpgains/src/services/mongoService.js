/*const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

const url = 'mongodb://207.229.181.23';

const dbName = 'rpgains';

MongoClient.connect(url, function (err, client) {
  assert.equal(null, err);
  console.log("Connected successfully to server");

  const db = client.db(dbName);

  client.close();
});

const insertDocuments = function (db, callback) {
  const collection = db.collection('users')
}*/

function testConnection(){
  const MongoClient = require('mongodb').MongoClient;
  const assert = require('assert');

  const url = 'mongodb://207.229.181.23';

  const dbName = 'rpgains';

  MongoClient.connect(url, function (err, client) {
    assert.equal(null, err);
    console.log("Connected successfully to server");

    const db = client.db(dbName);

    client.close();
  });
}

function login(){
  const MongoClient = require('mongodb').MongoClient;
  const assert = require('assert');

  const url = 'mongodb://207.229.181.23';

  const dbName = 'rpgains';

  MongoClient.connect(url, function (err, client) {
    assert.equal(null, err);
    console.log("Connected successfully to server");

    const db = client.db(dbName);

    client.close();
  });
}
