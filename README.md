# An e-commerce application for purchasing plants

## This was my first full-fledged group project in my coding bootcamp. I'm quite proud of the functionality we were able to incorporate into the application, including:
+ Adding items to a persistent User Cart for logged in users.
+ Adding items to a persistent Visitor Cart through local storage.
+ Ability to push Visitor Cart data to User Cart database when the visitor signs up for an account.

### Other technologies utilized:
+ React.js
+ Redux Toolkit for state storage
+ Node for server runtime environment
+ Express for backend architecture
+ RESTful API principles
+ PostgreSQL for User, Product and Cart data table storage
+ Sequelize for the Object Relational Mapper to database
+ Axios for backend data retrieval to frontend

# Application Start-Up

## Creating a new repository
1. Create a new, empty directory in the terminal of your local machine.
2. Initialize empty repository with ```git init``` command.
3. Add this repo to your machine with one of the following methods (REMEMBER to put in your ACTUAL NAME for this repo):
+ HTTPS method: ```git remote add "YOUR_REPO_NAME_HERE" https://github.com/jholder090/PlantsUnlimited.git```
+ SSH method: ```git remote add "YOUR_REPO_NAME_HERE" git@github.com:jholder090/PlantsUnlimited.git```
4. ```git fetch "YOUR_REPO_NAME_HERE"```
5. ```git merge "YOUR_REPO_NAME_HERE"/main```
6. ```git branch -m master main```

## Starting up and customizing the application
1. Update the project name and description in `package.json`.
2. Command `npm install` to install all project dependencies.
3. Create two postgres databases ("YOUR_REPO_NAME_HERE" should match the `name`
  parameter in `package.json`):
* These commands will create both your **development** and **test** databases

```
createdb "YOUR_REPO_NAME_HERE"
createdb "YOUR_REPO_NAME_HERE"-test
```
4. Command ```npm run seed``` to seed starter data to your database.
5. Type ```npm run start:dev``` to start the server and get the application up and running.
6. ```npm run start:dev:seed``` will start the server and seed the database at the same time.
