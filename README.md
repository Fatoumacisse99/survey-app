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
   git clone https://github.com/Fatoumacisse99/survey-app.git
   ```

2. **Accédez au dossier du projet :**

   ```bash
   cd survey-app
   ```

3. **Installez les dépendances :**

   ```bash
   npm install
   ```

4. **Configurez la base de données :**

   - Assurez-vous que MongoDB est en cours d'exécution sur votre machine locale.
   - Mettez à jour les paramètres de connexion dans `src/config/database.js` si nécessaire.
   - Avant de lancer l'application, créez la base de données et les collections.

   **Création de la base de données :**

   ```javascript
   use abc_survey_app
   ```

   **Création des collections files, responses et questions :**

   ```javascript
   db.createCollection("files");
   db.createCollection("responses");
   db.createCollection("questions");
   ```

## Utilisation

Pour démarrer l'application et tester les opérations CRUD, exécutez la commande suivante :

```bash
npm start
```

## Structure du Projet

Le projet est organisé de la manière suivante :

- **src/config/database.js :** Contient la configuration de la connexion à MongoDB.
- **src/module/fileModule.js :** Module pour gérer les opérations liées aux fichiers.
- **src/module/questionModule.js :** Module pour gérer les opérations liées aux questions.
- **src/module/responseModule.js :** Module pour gérer les opérations liées aux réponses.
- **src/main.js :** Point d'entrée du programme, qui teste les différentes fonctions des modules.

## Modules et Fonctions

### 1. **database.js**

- **connect() :**  
  Fonction asynchrone pour se connecter à la base de données MongoDB. Elle renvoie une instance de la base de données.

### 2. **fileModule.js**

- **addFile({ id: int, filename: string, fileType: string, uploadedAt: Date, uploadedBy: string, description: string }) :**  
  Ajoute un fichier à la collection `files`.

- **updateFile(id: int, { filename: string, fileType: string, uploadedAt: Date, uploadedBy: string, description: string }) :**  
  Met à jour un fichier existant dans la collection `files` en utilisant l'ID fourni et les champs à mettre à jour.

- **deleteFile(id: int) :**  
  Supprime un fichier de la collection `files` en utilisant l'ID fourni.

- **findFile(id: int) :**  
  Recherche un fichier dans la collection `files` en utilisant l'ID fourni et renvoie l'objet du fichier trouvé.

### 3. **questionModule.js**

- **addQuestion({ id: int, title: string, type: string, options: Array, answers: Array }) :**  
  Ajoute une question à la collection `questions`.

- **updateQuestion(id: int, { title: string, type: string, options: Array, answers: Array }) :**  
  Met à jour une question existante dans la collection `questions` en utilisant l'ID fourni et les champs à mettre à jour.

- **deleteQuestion(id: int) :**  
  Supprime une question de la collection `questions` en utilisant l'ID fourni.

- **findQuestion(id: int) :**  
  Recherche une question dans la collection `questions` en utilisant l'ID fourni et renvoie l'objet de la question trouvée.

### 4. **responseModule.js**

- **addResponse({ id: int, surveyId: int, respondentId: int, responseDate: Date, answers: Array }) :**  
  Ajoute une réponse à la collection `responses`.

- **updateResponse(id: int, { surveyId: int, respondentId: int, responseDate: Date, answers: Array }) :**  
  Met à jour une réponse existante dans la collection `responses` en utilisant l'ID fourni et les champs à mettre à jour.

- **deleteResponse(id: int) :**  
  Supprime une réponse de la collection `responses` en utilisant l'ID fourni.

- **findResponse(id: int) :**  
  Recherche une réponse dans la collection `responses` en utilisant l'ID fourni et renvoie l'objet de la réponse trouvée.

## Auteur

- [Fatouma Abdallahi Cisse](https://github.com/Fatoumacisse99/survey-app.git)
