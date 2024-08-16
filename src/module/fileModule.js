const { connect } = require("../config/database");

async function addFile(fileData) {
  try {
    const db = await connect();
    const collection = db.collection("files");
    const idExist = await collection.findOne({ id: fileData.id });
    if (idExist) {
      throw new Error(
        "Impossible d'avoir deux ids identiques dans la collection files"
      );
    }
    const result = await collection.insertOne(fileData);
    console.log("Fichier ajouté avec l'ID :", fileData.id);
    return result.id;
  } catch (error) {
    console.error("Erreur lors de l'ajout du fichier :", error.message);
  }
}

async function updateFile(id, updateFile) {
  try {
    const db = await connect();
    const collection = db.collection("files");
    const result = await collection.updateOne({ id: id }, { $set: updateFile });
    if (result.modifiedCount === 0) {
      throw new Error(`Aucun fichier trouvé avec l'ID ${id}`);
    }
    console.log("Fichier mis à jour avec succès.", updateFile);
  } catch (error) {
    console.error("Erreur lors de la mise à jour du fichier :", error.message);
  }
}

// Supprimer un fichier
async function deleteFile(id) {
  try {
    const db = await connect();
    const collection = db.collection("files");
    const result = await collection.deleteOne({ id: id });
    if (result.deletedCount === 0) {
      throw new Error(`Aucun fichier trouvé avec l'ID ${id}`);
    }
    console.log(`Fichier avec ${id} est supprimé avec succès.`);
  } catch (error) {
    console.error("Erreur lors de la suppression du fichier :", error.message);
  }
}

async function findFile() {
  try {
    const db = await connect();
    const collection = db.collection("files");
    const file = await collection.find({}).toArray();
    console.log(file);
    if (file.length === 0) {
      throw new Error("Aucune fichier trouvée");
    }
    return file;
  } catch (error) {
    console.error("Erreur lors de la recherche d'un fichier :", error.message);
  }
}

module.exports = { addFile, updateFile, deleteFile, findFile };
