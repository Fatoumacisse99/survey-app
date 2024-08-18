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

   - Assurez-vous que MongoDB est en cours d'exécution sur votre machine locale

## Utilisation

Pour démarrer l'application et tester les opérations CRUD, exécutez la commande suivante :

```bash
npm start
```

## Structure du Projet

Le projet est organisé de la manière suivante :

- **src/config/database.js :** Contient la configuration de la connexion à MongoDB.
- **src/module/SurveyModule.js :** Module pour gérer les opérations liées aux documents de la collection **surveys**.
- **src/module/questionModule.js :** Module pour gérer les opérations liées aux au documents de la collection **questions**.
- **src/module/responseModule.js :** Module pour gérer les opérations liées aux documents de la collection **responses**.
- **src/main.js :** Point d'entrée du programme, qui teste les différentes fonctions des modules.

## Modules et Fonctions

### 1. **database.js**

- **connect() :**  
  Fonction asynchrone pour se connecter à la base de données MongoDB. Elle renvoie une instance de la base de données.

### 2. **surveyModule.js**

- **addSurvey({ id: int, name: string, description: string, createdAt:Date, createdBy { employeeName:string, employeeRole:string} }) :**  
  Ajoute un document à la collection `surveys`.

- **updateSurvey( id: int, { name: string, description: string, createdAt: Date, createdBy { employeeName: string, employeeRole: string} }) :**  
  Met à jour un document existant dans la collection `surveys` en utilisant l'ID fourni et les nouveau données.

- **deleteSurvey(id: int) :**  
  Supprime un document de la collection `surveys` en utilisant l'ID fourni.

- **findSurvey() :**  
  Affiches tous les documents des la collection `surveys`, cette fonction ne prend pas de parametre.

### 3. **questionModule.js**

- **addQuestion( { id: int, idSurvey:int, title: string, type: string, options: {minValue: (1) int, maxValue: (5) int, step: (1) int} }) :**  
  Ajoute une question à la collection `questions`.

- **updateQuestion(id: int, { idSurvey:int, title: string, type: string, options: {minValue: (1) int, maxValue: (5) int, step: (1) int} }) :**  
  Met à jour une question existante dans la collection `questions` en utilisant l'ID fourni et les nouveau données.

- **deleteQuestion(id: int) :**  
  Supprime une question de la collection `questions` en utilisant l'ID fourni.

- **findQuestion() :**  
   Affiches tous les documents de la collection `questions`.

### 4. **responseModule.js**

- **addResponse({ id: int, idQuestion: int, title: string, type:string}) :**  
  Ajoute une réponse à la collection `responses`.

- **updateResponse( id: int, { idQuestion: int, title: string, type:string }) :**  
  Met à jour une réponse existante dans la collection `responses` en utilisant l'ID fourni et les nouveau données.

- **deleteResponse(id: int) :**  
  Supprime une réponse de la collection `responses` en utilisant l'ID fourni.

- **findResponse() :**  
  Affiches tous les documents de la collection `responses`.

## Auteur

- [Fatouma Abdallahi Cissé](https://github.com/Fatoumacisse99/)
