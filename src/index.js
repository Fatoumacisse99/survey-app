const filesController = require('./module/fileModule');
const questionsController = require('./module/questionModule');
const responsesController = require('./module/responseModule');

async function main() {
    try {
       // Ajouter un fichier
    
        const fileId = await filesController.addFile({
            _id: 3,
            filename: 'test_survey_2024.pdf',
            fileType: 'pdf',
            uploadedAt: '2024-07-25T08:10:00Z',
            uploadedBy: 'John Doe',
            description: 'Document de test pour l\'enquête 2024.'
        });
        console.log('Fichier ajouté avec ID:', fileId);

        // Ajouter une question
        console.log('Ajout d\'une question...');
        const questionId = await questionsController.addQuestion({
            _id: 2,
            title: 'Quel est votre produit préféré ?',
            type: 'multiple_choice',
            options: ['Produit A', 'Produit B', 'Produit C'],
            answers: []
        });
        console.log('Question ajoutée avec ID:', questionId);

        // Ajouter une réponse
        console.log('Ajout d\'une réponse...');
        const responseId = await responsesController.addResponse({
            _id: 2,
            surveyId: 1,
            respondentId: 'user67890',
            responseDate: '2024-08-01T10:00:00Z',
            answers: [
                { questionId: 2, answer: 'Produit B' }
            ]
        });
        console.log('Réponse ajoutée avec ID:', responseId);

        // Trouver un fichier
        console.log('Recherche d\'un fichier...');
        const file = await filesController.findFile(2);
        console.log('Fichier trouvé:', file);

        // Trouver une question
        console.log('Recherche d\'une question...');
        const question = await questionsController.findQuestion(2);
        console.log('Question trouvée:', question);

        // Trouver une réponse
        console.log('Recherche d\'une réponse...');
        const response = await responsesController.findResponse(2);
        console.log('Réponse trouvée:', response);

        // Mettre à jour un fichier
        console.log('Mise à jour d\'un fichier...');
        await filesController.updateFile(2, { filename: 'updated_survey_2024.pdf' });
        console.log('Fichier mis à jour.');

        // Mettre à jour une question
        console.log('Mise à jour d\'une question...');
        await questionsController.updateQuestion(2, { title: 'Quel est votre produit préféré aujourd\'hui ?' });
        console.log('Question mise à jour.');

        // Mettre à jour une réponse
        console.log('Mise à jour d\'une réponse...');
        await responsesController.updateResponse(2, { answers: [{ questionId: 2, answer: 'Produit A' }] });
        console.log('Réponse mise à jour.');

        // Supprimer un fichier
    
        await filesController.deleteFile(2);
        console.log('Fichier supprimé.');

        // Supprimer une question
        await questionsController.deleteQuestion(2);
        console.log('Question supprimée.');

        // Supprimer une réponse
        await responsesController.deleteResponse(2);
        console.log('Réponse supprimée.');

    } catch (err) {
        console.error('Erreur:', err);
    }
}

main();
