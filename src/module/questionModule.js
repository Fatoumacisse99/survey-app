const { connect } = require("../config/database");

async function addQuestion(questionData) {
  try {
    const db = await connect();
    const surveysCollection = db.collection("surveys");
    const surveyExist = await surveysCollection.findOne({ id: questionData.idSurvey });
    if (!surveyExist) {
      throw new Error("L'idSurvey spécifié n'existe pas.");
    }
    const questionsCollection = db.collection("questions");
    const idExist = await questionsCollection.findOne({ id: questionData.id });
    if (idExist) {
      throw new Error(
        "Impossible d'avoir deux IDs identiques dans la collection 'questions'."
      );
    }
    const result = await questionsCollection.insertOne(questionData);
    console.log("Question ajoutée avec l'ID :", questionData.id);
  } catch (error) {
    console.error("Erreur lors de l'ajout de la question :", error.message);
  }
}


async function updateQuestion(id, updatedQuestion) {
  try {
    const db = await connect();
    const surveysCollection = db.collection("surveys");
    const surveyExist = await surveysCollection.findOne({ id: updatedQuestion.idSurvey });

    if (!surveyExist) {
      throw new Error("L'idSurvey spécifié n'existe pas.");
    }

    const questionsCollection = db.collection("questions");
    const result = await questionsCollection.updateOne(
      { id: id },
      { $set: updatedQuestion }
    );

    if (result.modifiedCount === 0) {
      throw new Error(`Aucune question trouvée avec l'ID ${id}`);
    }

    console.log("Question mise à jour avec succès.", updatedQuestion);
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
    const questions = await collection.find({}).toArray();
    if (questions.length === 0) {
      throw new Error("Aucune question trouvée.");
    }
    console.log(questions);
  } catch (error) {
    console.error(
      "Erreur lors de la recherche d'une question :",
      error.message
    );
  }
}

module.exports = { addQuestion, updateQuestion, deleteQuestion, findQuestion };
