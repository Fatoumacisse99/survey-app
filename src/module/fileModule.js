const { connect } = require('../config/database');

// Ajouter un fichier
async function addFile(file) {
    try {
        const db = await connect();
        const collection = db.collection('files');
        const result = await collection.insertOne(file);

        const insertedId = result.insertedId;
        console.log('Fichier ajouté avec ID:', insertedId);
        return insertedId;
    } catch (error) {
        if (error.code === 11000) {
            throw new Error(`Un fichier avec l'ID ${file._id} existe déjà.`);
        } else {
            console.error("Erreur lors de l'ajout du fichier:", error);
            throw error;
        }
    }
}

// Modifier un fichier
async function updateFile(id, updateFields) {
    try {
        const db = await connect();
        const collection = db.collection('files');
        const result = await collection.updateOne({ _id: id }, { $set: updateFields });

        if (result.modifiedCount === 0) {
            throw new Error(`Aucun fichier trouvé pour l'ID ${id}`);
        }
    } catch (error) {
        console.error('Erreur lors de la mise à jour du fichier:', error);
        throw error;
    }
}

// Supprimer un fichier
async function deleteFile(id) {
    try {
        const db = await connect();
        const collection = db.collection('files');
        const result = await collection.deleteOne({ _id: id });

        if (result.deletedCount === 0) {
            throw new Error(`Aucun fichier trouvé pour l'ID ${id}`);
        } else {
            console.log(`Fichier avec l'ID ${id} supprimé avec succès.`);
        }
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
        const file = await collection.findOne({ _id: id });

        if (!file) {
            throw new Error(`Aucun fichier trouvé pour l'ID ${id}`);
        }

        return file;
    } catch (error) {
        console.error('Erreur lors de la recherche du fichier:', error);
        throw error;
    }
}

module.exports = { addFile, updateFile, deleteFile, findFile };
