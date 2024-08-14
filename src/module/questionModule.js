
// src/config/questionModule

const { connect } = require('../config/database');

// Ajouter une question
async function addQuestion(question) {
    try {
        const db = await connect();
        const collection = db.collection('questions');
        const result = await collection.insertOne(question);
        return result.insertedId;
    } catch (error) {
        if (error.code === 11000) {  
            throw new Error(`Une question avec l'ID ${question._id} existe déjà.`);
        }
        throw error;  
    }
}


// Modifier une question
async function updateQuestion(id, updateFields) {
    try {
        const db = await connect();
        const collection = db.collection('questions');
        await collection.updateOne({ _id: id }, { $set: updateFields });
    } catch (error) {
        console.error('Erreur lors de la modification de la question:', error);
        throw error;
    }
}

// Supprimer une question
async function deleteQuestion(id) {
    try {
        const db = await connect();
        const collection = db.collection('questions');
        await collection.deleteOne({ _id: id });
    } catch (error) {
        console.error('Erreur lors de la suppression de la question:', error);
        throw error;
    }
}

// Trouver une question
async function findQuestion(id) {
    try {
        const db = await connect();
        const collection = db.collection('questions');
        return await collection.findOne({ _id: id });
    } catch (error) {
        console.error('Erreur lors de la recherche de la question:', error);
        throw error;
    }
}

module.exports = { addQuestion, updateQuestion, deleteQuestion, findQuestion };
