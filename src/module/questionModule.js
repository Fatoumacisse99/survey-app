const { connect } = require("../config/database");

async function addQuestion(questionData) {
  try {
    const db = await connect();
    const collection = db.collection("questions");
    const idExist = await collection.findOne({ id: questionData.id });
    if (idExist) {
      throw new Error(
        "Impossible d'avoir deux ids identiques dans la collection questions"
      );
    }
    const result = await collection.insertOne(questionData);
    console.log("Question ajoutée avec l'ID :", questionData);
  } catch (error) {
    console.error("Erreur lors de l'ajout de la question :", error.message);
  }
}
async function updateQuestion(id, updateQuestion) {
  try {
    const db = await connect();
    const collection = db.collection("questions");
    const result = await collection.updateOne({ id: id }, { $set: updateQuestion });
    if (result.modifiedCount === 0) {
      throw new Error(`Aucun question trouvé avec l'ID ${id}`);
    }
    console.log("question mis à jour avec succès.", updateQuestion);
  } catch (error) {
    console.error("Erreur lors de la mise à jour d'une question :", error.message);
  }
}
async function deleteQuestion(id) {
  try {
    const db = await connect();
    const collection = db.collection("questions");
    const result = await collection.deleteOne({ id: id });
    if (result.deletedCount === 0) {
      throw new Error(`Aucune question trouvée avec l'ID ${id}`);
    }
    console.log("Question supprimée avec succès.");
  } catch (error) {
    console.error(
      "Erreur lors de la suppression de la question :",
      error.message
    );
  }
}
async function findQuestion() {
  try {
    const db = await connect();
    const collection = db.collection("questions");
    const question = await collection.find({}).toArray();
    console.log(question);
    if (question.length === 0) {
      throw new Error("Aucune question trouvée");
    }
    // return question;
  } catch (error) {
    console.error(
      "Erreur lors de la recherche d'une question :",
      error.message
    );
  }
}

module.exports = { addQuestion, updateQuestion, deleteQuestion, findQuestion };
