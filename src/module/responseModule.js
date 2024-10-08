const { connect } = require("../config/database");

async function addResponse(responseData) {
  try {
    const db = await connect();
    const questionsCollection = db.collection("questions");
    const questionExist = await questionsCollection.findOne({ id: responseData.idQuestion });
    if (!questionExist) {
      throw new Error("L'idQuestion spécifié n'existe pas.");
    }
    const responsesCollection = db.collection("responses");
    const idExist = await responsesCollection.findOne({ id: responseData.id });
    if (idExist) {
      throw new Error(
        "Impossible d'avoir deux IDs identiques dans la collection 'responses'."
      );
    }
    const result = await responsesCollection.insertOne(responseData);
    console.log("Réponse ajoutée avec l'ID :", responseData.id);
    return result.insertedId; 
  } catch (error) {
    console.error("Erreur lors de l'ajout de la réponse :", error.message);
  }
}

async function updateResponse(id, idQuestion, updatedResponse) {
  try {
    const db = await connect();
    const collection = db.collection("responses");
    const questionExists = await collection.findOne({ idQuestion: idQuestion });
    if (!questionExists) {
      throw new Error(`Aucune question trouvée avec l'ID ${idQuestion}`);
    }
    const result = await collection.updateOne(
      { id: id },
      { $set: updatedResponse }
    );

    if (result.modifiedCount === 0) {
      throw new Error(`Aucune réponse trouvée avec l'ID ${id}`);
    }

    console.log("Réponse mise à jour avec succès.");
    return result;
  } catch (error) {
    console.error(
      "Erreur lors de la mise à jour de la réponse :",
      error.message
    );
  }
}


async function deleteResponse(id) {
  try {
    const db = await connect();
    const collection = db.collection("responses");
    const result = await collection.deleteOne({ id: id });
    if (result.deletedCount === 0) {
      throw new Error(`Aucune réponse trouvée avec l'ID ${id}`);
    }
    console.log("Réponse supprimée avec succès.");
  } catch (error) {
    console.error(
      "Erreur lors de la suppression de la réponse :",
      error.message
    );
  }
}

async function findResponse() {
  try {
    const db = await connect();
    const collection = db.collection("responses");
    const responses = await collection.find({}).toArray();
    if (responses.length === 0) {
      throw new Error("Aucune réponse trouvée.");
    }
    console.log(responses);
    return responses;
  } catch (error) {
    console.error("Erreur lors de la recherche de réponses :", error.message);
  }
}

module.exports = { addResponse, updateResponse, deleteResponse, findResponse };
