const { connect } = require("../config/database");

async function addSurvay(survayData) {
  try {
    const db = await connect();
    const collection = db.collection("survays");
    const idExist = await collection.findOne({ id: survayData.id });
    if (idExist) {
      throw new Error(
        "Impossible d'avoir deux IDs identiques dans la collection 'survays'."
      );
    }
    const result = await collection.insertOne(survayData);
    console.log("Fichier ajouté avec l'ID :", survayData.id);
    return result.insertedId; // Retourne l'ID inséré
  } catch (error) {
    console.error("Erreur lors de l'ajout du fichier :", error.message);
  }
}

async function updateSurvay(id, updatedSurvay) {
  try {
    const db = await connect();
    const collection = db.collection("survays");
    const result = await collection.updateOne(
      { id: id },
      { $set: updatedSurvay }
    );
    if (result.modifiedCount === 0) {
      throw new Error(`Aucun fichier trouvé avec l'ID ${id}`);
    }
    console.log("Fichier mis à jour avec succès.", updatedSurvay);
    return result;
  } catch (error) {
    console.error("Erreur lors de la mise à jour du fichier :", error.message);
  }
}

async function deleteSurvay(id) {
  try {
    const db = await connect();
    const collection = db.collection("survays");
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

async function findSurvay() {
  try {
    const db = await connect();
    const collection = db.collection("survays");
    const survays = await collection.find({}).toArray();
    if (survays.length === 0) {
      throw new Error("Aucun fichier trouvé.");
    }
    console.log(survays);
    return survays;
  } catch (error) {
    console.error("Erreur lors de la recherche de fichiers :", error.message);
  }
}

module.exports = { addSurvay, updateSurvay, deleteSurvay, findSurvay };
