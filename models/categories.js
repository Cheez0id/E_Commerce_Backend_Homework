const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Categories extends Model {}

Categories.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
        },
  });  

app.get('/api/categories', (req, res) => {
  const sql = `SELECT * from categories`;
  con_db.query(sql, (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
       return;
    }  
    res.json({
      message: 'success',
      data: rows
    });
     console.log(res);
  });
});

con_db.query('SELECT * FROM categories', function (err, results) {
  console.table(results);
});

module.exports = Categories;