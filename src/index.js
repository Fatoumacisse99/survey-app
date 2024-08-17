const fileModule = require("./module/fileModule");
const questionModule = require("./module/questionModule");
const responseModule = require("./module/responseModule");

const newFile = {
  id: 102,
  name: "Document 101",
  description: "Ceci est un document101 important",
  createdAt: new Date(),
  createdBy: {
    employeeName: "Fatima Cisse",
    employeeRole: "Developpeuse web",
  },
};
const updateFile = {
  name: "Document 101- Mise à jour",
  description: "Ceci est un document101 important mis à jour",
  createdAt: new Date(),
  createdBy: {
    employeeName: "Ahmed Mouhamed",
    employeeRole: "Developpeur",
  },
};
const newQuestion = {
  id: 45,
  idFile: 101,
  title: "Quel est le titre du document2 ?",
  type: "texte",
  options: 2,
};
const updateQuestion = {
  id: 44,
  idFile: 4000,
  title: "Quel est le titre mis à jour du document2 ?",
  type: "texte",
  options: 5,
};

const newResponse = {
  id: 11,
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
    await fileModule.addFile(newFile);
    await fileModule.updateFile(102, updateFile);
    await fileModule.findFile();
    await fileModule.deleteFile(101);

    await questionModule.addQuestion(newQuestion);
    await questionModule.updateQuestion(45, updateQuestion);
    await questionModule.findQuestion();
    await questionModule.deleteQuestion(44);

    await responseModule.addResponse(newResponse);
    await responseModule.updateResponse(10, updateResponse);
    await responseModule.findResponse();
    await responseModule.deleteResponse(100);
  } catch (error) {
    console.error("Erreur lors de l'exécution:", error.message);
  }
}

main();
