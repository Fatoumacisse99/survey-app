const { connect } = require("../config/database");

async function addFile(fileData) {
  try {
    const db = await connect();
    const collection = db.collection("files");
    const idExist = await collection.findOne({ id: fileData.id });
    if (idExist) {
      throw new Error(
        "Impossible d'avoir deux identifiants identiques dans une base de donée."
      );
    }
    const result = await collection.insertOne(fileData);
    console.log("Fichier ajouté avec l'ID :", fileData.id);
    return result.insertedId;
  } catch (error) {
    console.error("Erreur lors de l'ajout du fichier :", error.message);
  }
}

async function updateFile(id, updatedFile) {
  try {
    const db = await connect();
    const collection = db.collection("files");
    const result = await collection.updateOne(
      { id: id },
      { $set: updatedFile }
    );
    if (result.modifiedCount === 0) {
      throw new Error(`Aucun fichier trouvé avec l'ID ${id}`);
    }
    console.log(`Fichier avec ${id} est  mis à jour avec succès.`, updatedFile);
    return result;
  } catch (error) {
    console.error("Erreur lors de la mise à jour du fichier :", error.message);
  }
}

async function deleteFile(id) {
  try {
    const db = await connect();
    const collection = db.collection("files");
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

async function findFile() {
  try {
    const db = await connect();
    const collection = db.collection("files");
    const files = await collection.find({}).toArray();
    if (files.length === 0) {
      throw new Error("Aucun fichier trouvé.");
    }
    console.log(files);
    return files;
  } catch (error) {
    console.error("Erreur lors de la recherche de fichiers :", error.message);
  }
}

module.exports = { addFile, updateFile, deleteFile, findFile };
