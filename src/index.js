const surveyModule = require("./module/surveyModule");
const questionModule = require("./module/questionModule");
const responseModule = require("./module/responseModule");

const newSurvey = {
  id: 1,
  name: "Document 2",
  description: "Ceci est un document101 important",
  createdAt: new Date(),
  createdBy: {
    employeeName: "Fatima Cisse",
    employeeRole: "Developpeuse web",
  },
};
const updateSurvey = {
  name: "Document 2- Mise à jour",
  description: "Ceci est un document101 important mis à jour",
  createdAt: new Date(),
  createdBy: {
    employeeName: "Mariame",
    employeeRole: "Developpeuse",
  },
};
const newQuestion = {
  id: 4,
  idSurvey: 2,
  title: "Quel est le titre du document2 ?",
  type: "texte",
  options: {
    minValue : 1,
    maxValue : 4,
    step : 1,}}

const updateQuestion = {
  id: 2,
  idSurvey: 1,
  title: "Quel est le titre mis à jour du document2 ?",
  type: "texte",
  options: {
    minValue : 1,
    maxValue : 4,
    step : 1,}
};

const newResponse = {
  id: 1,
  idQuestion: 1,
  title: "Réponse à la question2",
  type: "texte",
  
};
const updateResponse = {
  idQuestion: 1,
  title: "Réponse mise à jour à la question2",
  type: "texte",
};
async function main() {
  try {
    await surveyModule.addSurvey(newSurvey);
    await surveyModule.updateSurvey(2, updateSurvey);
    await surveyModule.findSurvey();
    await surveyModule.deleteSurvey(1);

    await questionModule.addQuestion(newQuestion);
    await questionModule.updateQuestion(3, updateQuestion);
    await questionModule.findQuestion();
    await questionModule.deleteQuestion(1);

    await responseModule.addResponse(newResponse);
    await responseModule.updateResponse(1, updateResponse);
    await responseModule.findResponse();
    await responseModule.deleteResponse(1);
  } catch (error) {
    console.error("Erreur lors de l'exécution:", error.message);
  }
}

main();
