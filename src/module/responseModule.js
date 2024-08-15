// src/config/responseModule
const { connect } = require('../config/database');

// Ajouter une réponse
async function addResponse(response) {
    try {
      const db = await connect();
      const collection = db.collection('responses');
      const result = await collection.insertOne(response);
  
      const insertedId = result.insertedId;
      console.log('Réponse ajoutée avec ID:', insertedId);
      return insertedId;
    } catch (error) {
      if (error.code === 11000) {
        throw new Error(`Une question avec l'ID ${response._id} existe déjà.`);
      } else {
        console.error("Erreur lors de l'ajout de la réponse:", error);
        throw error;
      }
    }
  }
// Modifier une réponse
async function updateResponse(id, updateFields) {
    try {
      const db = await connect();
      const collection = db.collection('responses');
      const result = await collection.updateOne({ _id: id }, { $set: updateFields });
  
      if (result.modifiedCount === 0) {
        throw new Error(`Aucune réponse trouvée pour l'ID ${id}`);
      }
    } catch (error) {
      console.error('Erreur lors de la mise à jour de la réponse:', error);
    }
  }

// Supprimer une réponse
async function deleteResponse(id) {
    try {
      const db = await connect();
      const collection = db.collection('responses');
      const result = await collection.deleteOne({ _id: id });
  
      if (result.deletedCount === 0) {
        throw new Error(`Aucune réponse trouvée pour l'ID ${id}`);
      } else {
        console.log(`Réponse avec l'ID ${id} supprimée avec succès.`);
      }
    } catch (error) {
      console.error('Erreur lors de la suppression de la réponse:', error);
    
    }
  }

// Trouver une réponse
async function findResponse(id) {
    try {
      const db = await connect();
      const collection = db.collection('responses');
      const response = await collection.findOne({ _id: id });
  
      if (!response) {
        throw new Error(`Aucune réponse trouvée pour l'ID ${id}`);
      }
  
      return response;
    } catch (error) {
      console.error('Erreur lors de la recherche de la réponse:', error);
    }
  }

module.exports = { addResponse, updateResponse, deleteResponse, findResponse };
