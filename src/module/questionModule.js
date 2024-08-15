const { connect } = require('../config/database');

// Ajouter une question
async function addQuestion(question) {
    try {
        const db = await connect();
        const collection = db.collection('questions');
        const result = await collection.insertOne(question);

        const insertedId = result.insertedId;
        console.log('Question ajoutée avec ID:', insertedId);
        return insertedId;
    } catch (error) {
        if (error.code === 11000) {
            throw new Error(`Une question avec l'ID ${question._id} existe déjà.`);
        } else {
            console.error("Erreur lors de l'ajout de la question:", error);
            throw error;
        }
    }
}

// Modifier une question
async function updateQuestion(id, updateFields) {
    try {
        const db = await connect();
        const collection = db.collection('questions');
        const result = await collection.updateOne({ _id: id }, { $set: updateFields });

        if (result.modifiedCount === 0) {
            throw new Error(`Aucune question trouvée pour l'ID ${id}`);
        }
    } catch (error) {
        console.error('Erreur lors de la mise à jour de la question:', error);
        throw error;
    }
}

// Supprimer une question
async function deleteQuestion(id) {
    try {
        const db = await connect();
        const collection = db.collection('questions');
        const result = await collection.deleteOne({ _id: id });

        if (result.deletedCount === 0) {
            throw new Error(`Aucune question trouvée pour l'ID ${id}`);
        } else {
            console.log(`Question avec l'ID ${id} supprimée avec succès.`);
        }
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
        const question = await collection.findOne({ _id: id });

        if (!question) {
            throw new Error(`Aucune question trouvée pour l'ID ${id}`);
        }

        return question;
    } catch (error) {
        console.error('Erreur lors de la recherche de la question:', error);
        throw error;
    }
}

module.exports = { addQuestion, updateQuestion, deleteQuestion, findQuestion };
