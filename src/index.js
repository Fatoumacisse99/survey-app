const surveyModule = require("./module/surveyModule");
const questionModule = require("./module/questionModule");
const responseModule = require("./module/responseModule");

const newSurvey = {
  id: 1,
  name: "Document 101",
  description: "Ceci est un document101 important",
  createdAt: new Date(),
  createdBy: {
    employeeName: "Fatima Cisse",
    employeeRole: "Developpeuse web",
  },
};
const updateSurvey = {
  name: "Document 101- Mise à jour",
  description: "Ceci est un document101 important mis à jour",
  createdAt: new Date(),
  createdBy: {
    employeeName: "Ahmed Mouhamed",
    employeeRole: "Developpeur",
  },
};
const newQuestion = {
  id: 2,
  idSurvey: 101,
  title: "Quel est le titre du document2 ?",
  type: "texte",
  options: 2,
};
const updateQuestion = {
  id: 2,
  idSurvey: 4000,
  title: "Quel est le titre mis à jour du document2 ?",
  type: "texte",
  options: 5,
};

const newResponse = {
  id: 2,
  idQuestion: 6,
  title: "Réponse à la question2",
  type: "texte",
  
};
const updateResponse = {
  idQuestion: 10,
  title: "Réponse mise à jour à la question2",
  type: "texte",
};
async function main() {
  try {
    await surveyModule.addSurvey(newSurvey);
    await surveyModule.updateSurvey(1, updateSurvey);
    await surveyModule.findSurvey();
    await surveyModule.deleteSurvey(100);

    await questionModule.addQuestion(newQuestion);
    await questionModule.updateQuestion(45, updateQuestion);
    await questionModule.findQuestion();
    await questionModule.deleteQuestion(100);

    await responseModule.addResponse(newResponse);
    await responseModule.updateResponse(10, updateResponse);
    await responseModule.findResponse();
    await responseModule.deleteResponse(11);
  } catch (error) {
    console.error("Erreur lors de l'exécution:", error.message);
  }
}

main();
