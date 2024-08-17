const survayModule = require("./module/survayModule");
const questionModule = require("./module/questionModule");
const responseModule = require("./module/responseModule");

const newSurvay = {
  id: 1,
  name: "Document 101",
  description: "Ceci est un document101 important",
  createdAt: new Date(),
  createdBy: {
    employeeName: "Fatima Cisse",
    employeeRole: "Developpeuse web",
  },
};
const updateSurvay = {
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
  idSurvay: 101,
  title: "Quel est le titre du document2 ?",
  type: "texte",
  options: 2,
};
const updateQuestion = {
  id: 2,
  idSurvay: 4000,
  title: "Quel est le titre mis à jour du document2 ?",
  type: "texte",
  options: 5,
};

const newResponse = {
  id: 2,
  idQuestion: 6,
  title: "Réponse à la question2",
  type: "texte",
  answers: 'Le titre du document est "Document 2 - Mise à jour".',
};
const updateResponse = {
  idQuestion: 10,
  title: "Réponse mise à jour à la question2",
  type: "texte",
  answers: 'Le titre du document est "Document 2".',
};
async function main() {
  try {
    await survayModule.addSurvay(newSurvay);
    await survayModule.updateSurvay(1, updateSurvay);
    await survayModule.findSurvay();
    await survayModule.deleteSurvay(100);

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
