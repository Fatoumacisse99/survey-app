const { connect } = require("../config/database");

async function addSurvey(surveyData) {
  try {
    const db = await connect();
    const collection = db.collection("surveys");
    const idExist = await collection.findOne({ id: surveyData.id });
    if (idExist) {
      throw new Error(
        "Impossible d'avoir deux IDs identiques dans la collection 'surveys'."
      );
    }
    const result = await collection.insertOne(surveyData);
    console.log("Fichier ajouté avec l'ID :", surveyData.id);
    return result.insertedId;
  } catch (error) {
    console.error("Erreur lors de l'ajout du fichier :", error.message);
  }
}

async function updateSurvey(id, updatedSurvey) {
  try {
    const db = await connect();
    const collection = db.collection("surveys");
    const result = await collection.updateOne(
      { id: id },
      { $set: updatedSurvey }
    );
    if (result.modifiedCount === 0) {
      throw new Error(`Aucun fichier trouvé avec l'ID ${id}`);
    }
    console.log("Fichier mis à jour avec succès.", updatedSurvey);
    return result;
  } catch (error) {
    console.error("Erreur lors de la mise à jour du fichier :", error.message);
  }
}

async function deleteSurvey(id) {
  try {
    const db = await connect();
    const collection = db.collection("surveys");
    const result = await collection.deleteOne({ id: id });
    if (result.deletedCount === 0) {
      throw new Error(`Aucun fichier trouvé avec l'ID ${id}`);
    }
    console.log(`Fichier avec l'ID ${id} supprimé avec succès.`);
    return result;
  } catch (error) {
    console.error("Erreur lors de la suppression du fichier :", error.message);
  }
}

async function findSurvey() {
  try {
    const db = await connect();
    const collection = db.collection("surveys");
    const survey = await collection.find({}).toArray();
    if (survey.length === 0) {
      throw new Error("Aucun fichier trouvé.");
    }
    console.log(survey);
    return survey;
  } catch (error) {
    console.error("Erreur lors de la recherche de fichiers :", error.message);
  }
}

module.exports = { addSurvey, updateSurvey, deleteSurvey, findSurvey };
