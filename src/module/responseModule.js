// src/config/responseModule
const { connect } = require('../config/database');

// Ajouter une réponse
async function addResponse(response) {
    try {
        const db = await connect();
        const collection = db.collection('responses');
        const result = await collection.insertOne(response);
        return result.insertedId;
    } catch (error) {
        if (error.code === 11000) {  
            throw new Error(`Une question avec l'ID ${response._id} existe déjà.`);
        }
        throw error;  
    }
}
// Modifier une réponse
async function updateResponse(id, updateFields) {
    try {
        const db = await connect();
        const collection = db.collection('responses');
        await collection.updateOne({ _id: id }, { $set: updateFields });
    } catch (error) {
        console.error('Erreur lors de la modification de la réponse:', error);
        throw error;
    }
}

// Supprimer une réponse
async function deleteResponse(id) {
    try {
        const db = await connect();
        const collection = db.collection('responses');
        await collection.deleteOne({ _id: id });
    } catch (error) {
        console.error('Erreur lors de la suppression de la réponse:', error);
        throw error;
    }
}

// Trouver une réponse
async function findResponse(id) {
    try {
        const db = await connect();
        const collection = db.collection('responses');
        return await collection.findOne({ _id: id });
    } catch (error) {
        console.error('Erreur lors de la recherche de la réponse:', error);
        throw error;
    }
}

module.exports = { addResponse, updateResponse, deleteResponse, findResponse };
