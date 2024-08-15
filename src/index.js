const filesController = require('./module/fileModule');
const questionsController = require('./module/questionModule');
const responsesController = require('./module/responseModule');

async function main() {
    try {
       // Ajouter un fichier
    
        // const fileId = await filesController.addFile({
        //     _id: 30,
        //     fileName: 'test_survey_2024.pdf',
        //     fileType: 'pdf',
        //     uploadedAt: '2024-07-25T08:10:00Z',
        //     uploadedBy: 'John Doe',
        //     description: 'Document de test pour l\'enquête 2024.'
        // });
        

        // Ajouter une question
       
        // const questionId = await questionsController.addQuestion({
        //     _id: 30,
        //     title: 'Quel est votre produit préféré ?',
        //     type: 'multiple_choice',
        //     options: ['Produit A', 'Produit B', 'Produit C'],
        //     answers: []
        // });
        
        // Ajouter une réponse
        // const responseId = await responsesController.addResponse({
        //     _id: 15,
        //     surveyId: 1,
        //     respondentId: 'user67890',
        //     responseDate: '2024-08-01T10:00:00Z',
        //     answers: [
        //         { questionId: 2, answer: 'Produit B' }
        //     ]
        // });
        

        // // Trouver un fichier
        
        // const file = await filesController.findFile(2);
        

        // // Trouver une question
        
        // const question = await questionsController.findQuestion(2);
        

        // // Trouver une réponse
        // const response = await responsesController.findResponse(100);
      

        // // Mettre à jour un fichier
        // await filesController.updateFile(2, { filename: 'updated_survey_2024.pdf' });
        

        // // Mettre à jour une question
        // await questionsController.updateQuestion(2, { title: 'Quel est votre produit préféré aujourd\'hui ?' });
       

        // // Mettre à jour une réponse
        // await responsesController.updateResponse(2, { answers: [{ questionId: 2, answer: 'Produit A' }] });
        

        // // Supprimer un fichier
        await filesController.deleteFile(30);
       

        // // Supprimer une question
        // await questionsController.deleteQuestion(2);
        

        // Supprimer une réponse
        // await responsesController.deleteResponse(1);
       

    } catch (err) {
        console.error('Erreur:', err);
    }
}

main();
