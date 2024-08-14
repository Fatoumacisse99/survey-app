// src/config/fileModule

const { connect } = require('../config/database');

// Ajouter un fichier
async function addFile(file) {
    try {
        const db = await connect();
        const collection = db.collection('files');
        const result = await collection.insertOne(file);
        return result.insertedId;
    } catch (error) {
        if (error.code === 11000) {  
            throw new Error(`Une question avec l'ID ${file._id} existe déjà.`);
        }
        throw error;  
    }
}

// Modifier un fichier
async function updateFile(id, updateFields) {
    try {
        const db = await connect();
        const collection = db.collection('files');
        await collection.updateOne({ _id: id }, { $set: updateFields });
    } catch (error) {
        console.error('Erreur lors de la modification du fichier:', error);
        throw error;
    }
}

// Supprimer un fichier
async function deleteFile(id) {
    try {
        const db = await connect();
        const collection = db.collection('files');
        await collection.deleteOne({ _id: id });
    } catch (error) {
        console.error('Erreur lors de la suppression du fichier:', error);
        throw error;
    }
}

// Trouver un fichier
async function findFile(id) {
    try {
        const db = await connect();
        const collection = db.collection('files');
        return await collection.findOne({ _id: id });
    } catch (error) {
        console.error('Erreur lors de la recherche du fichier:', error);
        throw error;
    }
}

module.exports = { addFile, updateFile, deleteFile, findFile };
