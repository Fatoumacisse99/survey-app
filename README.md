

# Survey App

## Description

Survey App est une application JavaScript simple permettant de gérer les fiches d'enquête de satisfaction des clients. L'application utilise une base de données MongoDB pour stocker les données et permet d'effectuer des opérations CRUD (Create, Read, Update, Delete) sur ces fiches.

## Prérequis

Avant de commencer, assurez-vous d'avoir installé les éléments suivants :

- [Node.js](https://nodejs.org/) (version 12 ou supérieure)
- [MongoDB](https://www.mongodb.com/try/download/community) (version 4.0 ou supérieure)

## Installation

Suivez ces étapes pour configurer le projet sur votre machine locale :

1. **Clonez le repository :**

    ```bash
    git clone <URL_DU_REPOSITORY>
    ```

2. **Accédez au dossier du projet :**

    ```bash
    cd abc-servey-app
    ```

3. **Installez les dépendances :**

    ```bash
    npm install
    ```

4. **Configurez la base de données :**

    - Assurez-vous que MongoDB est en cours d'exécution sur votre machine locale.
    - Mettez à jour les paramètres de connexion dans `src/config/database.js` si nécessaire.

    - Fichier de configuration: config/database.js contient les informations essentielles pour se connecter
       à la base de données.
    - Avant de lancer l'application, il faut créer la base de données et les collections.    

**Création de la base de données :**
    
    use abc_survey_app
    


**Création des collections files, responses et questions :**
    db.createCollection("files")
    db.createCollection("responses")
    db.createCollection("questions")    

## Utilisation

Pour démarrer l'application et tester les opérations CRUD, exécutez la commande suivante :

```bash
npm start


## Structure du Projet

Le projet est organisé de la manière suivante :

- `src/config/database.js`** : Contient la configuration de la connexion à MongoDB.
- `src/module/fileModule.js`** : Module pour gérer les opérations liées aux fichiers.
- `src/module/questionModule.js`** : Module pour gérer les opérations liées aux questions.
- `src/module/responseModule.js`** : Module pour gérer les opérations liées aux réponses.
- `src/main.js`** : Point d'entrée du programme, qui teste les différentes fonctions des modules.

  ## Modules et Fonctions

 `database.js`



- `connect()` : Fonction asynchrone pour se connecter à la base de données MongoDB. 
  Elle renvoie une instance de la base de données.

 `fileModule.js`

- `addFile(file)` : Ajoute un fichier à la collection `files`. Le paramètre `file` doit être un objet avec les propriétés suivantes :
  - `_id`: ID du fichier
  - `filename`: Nom du fichier
  - `fileType`: Type de fichier (ex. : pdf, docx)
  - `uploadedAt`: Date de téléversement
  - `uploadedBy`: Nom de l'utilisateur qui a téléversé le fichier
  - `description`: Description du fichier

- `updateFile(id, updateFields)` : Met à jour un fichier existant dans la collection `files` en utilisant l'ID fourni et les champs à mettre à jour.

- `deleteFile(id)`: Supprime un fichier de la collection `files` en utilisant l'ID fourni.

- `findFile(id)` : Recherche un fichier dans la collection `files` en utilisant l'ID fourni. Renvoie l'objet du fichier trouvé.

## `questionModule.js`
- `addQuestion(question)` : Ajoute une question à la collection `questions`. Le paramètre `question` doit être un objet avec les propriétés suivantes :
  - `_id`: ID unique de la question
  - `title`: Titre de la question
  - `type`: Type de question (ex. : multiple_choice, text)
  - `options`: Liste des options (si applicable)
  - `answers`: Liste des réponses (si applicable)

- `updateQuestion(id, updateFields)` : Met à jour une question existante dans la collection `questions` en utilisant l'ID fourni et les champs à mettre à jour.

- **`deleteQuestion(id)`** : Supprime une question de la collection `questions` en utilisant l'ID fourni.

- **`findQuestion(id)`** : Recherche une question dans la collection `questions` en utilisant l'ID fourni. Renvoie l'objet de la question trouvée.

##`responseModule.js`
- `addResponse(response)` : Ajoute une réponse à la collection `responses`. Le paramètre `response` doit être un objet avec les propriétés suivantes :
  - `_id`: ID de la réponse
  - `surveyId`: ID de l'enquête
  - `respondentId`: ID du répondant
  - `responseDate`: Date de la réponse
  - `answers`: Liste des réponses aux questions

- **`updateResponse(id, updateFields)`** : Met à jour une réponse existante dans la collection `responses` en utilisant l'ID fourni et les champs à mettre à jour.

- `deleteResponse(id)` : Supprime une réponse de la collection `responses` en utilisant l'ID fourni.

- `findResponse(id)` : Recherche une réponse dans la collection `responses` en utilisant l'ID fourni. Renvoie l'objet de la réponse trouvée.


