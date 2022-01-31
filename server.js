const express = require('express');
const sequelize = require('./config/connection');
const mysql = require('mysql2');

const app = express();
const PORT = process.env.PORT || 3001;

//!!TODO: MARY, READ ME FIRST HONEY! you need to make your mysql queries log in the console silly; then they can work with inquirer. you don't need anything to go to localhost?!?

var commerce_db = mysql.createConnection({
  host: "localhost",
  user: process.env.DB_MARY,
  password: process.env.DB_PW,
  database: process.env.DB_SRC,
});

commerce_db.connect((err) => {
  if (err){
    throw err;
  }
  console.log('mysql is connected!')
})


//username/passwords hidden via sequelize using .env 
sequelize.sync({force:false}).then(()=> {
  app.listen(PORT, ()=> {
    console.log(`helloooo!!! it's workin ${PORT}`);
  });
});


