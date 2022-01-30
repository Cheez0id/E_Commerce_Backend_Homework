# E_Commerce_Backend_Homework

Build the back end for an e-commerce site by modifying starter codd; configure a working Express.js API to use Sequelize to interact with a MySQL database.

````````````````````````
##Pseudocode from Jung
<!-- ALWAYS START WITH YOUR SERVER & YOUR DATABASE -->

0) Make sure you make a git repo, .gitignore, add .env to the .gitignore file, npm i, hide your personal information except give me your credit card info :^) 

1) Make our MODELS in the models folder that follow the architecture 
provided in the instructions

1a) Let's make sure my associations/relationships/one-to-one/one-to-many are set up properly. 
1b) index.js in the models folder!
1c) Within the models, let's make sure that the references are also set up correctly. Does your column refer to the correct table's ID? (foreign key)

2) Make sure that you check that the tables were created properly. (One way to check this is, when you run node seeds/index.js, do you get any errors?)
2a) If you want to drop your tables easily, in the server.js file, look for (force: false), change that to true IF YOU ARE LOOKING TO DROP THE TABLES. 
change it back to (force: false) IF YOU ARE KEEP THE TABLES. 

3) I would always check to make sure that the tables (model files) are being imported into the api routes files.
3a) I would use sequelize documentation to determine which METHODS I need to use for each route.
3b) If I were to do a get request of ALL the data, findAll(), findbyPK()
3c) If I need to return multiple datas from different tables, includes([]), you must make sure the relationships are set up first. 
```````````````````````````````````

## Acceptance Criteria

```md
GIVEN a functional Express.js API
WHEN I add my database name, MySQL username, and MySQL password to an environment variable file
THEN I am able to connect to a database using Sequelize
WHEN I enter schema and seed commands
THEN a development database is created and is seeded with test data
WHEN I enter the command to invoke the application
THEN my server is started and the Sequelize models are synced to the MySQL database
WHEN I open API GET routes in Insomnia for categories, products, or tags
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia
THEN I am able to successfully create, update, and delete data in my database
```
