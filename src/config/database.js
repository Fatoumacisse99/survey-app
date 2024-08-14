// src/config/database.js

const { MongoClient } = require('mongodb');


const uri = 'mongodb://localhost:27017/abc_survey_db'; 

let db = null;

// Fonction pour se connecter à MongoDB
async function connect() {
    if (db) return db; 
    const client = new MongoClient(uri);
    await client.connect();
    db = client.db();
    return db;
}

module.exports = { connect };
