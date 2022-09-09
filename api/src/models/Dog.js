const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('dog', {
    id:{
      type:DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull:false,
      primaryKey:true
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    altura_min:{
      type: DataTypes.INTEGER,
      allowNull:false
    },
    altura_max:{
      type:DataTypes.INTEGER,
      allowNull:false
    },
    peso_min:{
      type:DataTypes.INTEGER,
      allowNull:false
    },
    peso_max:{
      type:DataTypes.INTEGER,
      allowNull:false
    },
    AñosDeVida_max:{
      type:DataTypes.INTEGER
    },
    AñosDeVida_min:{
      type:DataTypes.INTEGER
    },
    criado_para:{
      type:DataTypes.STRING
    },
    createID:{
      type:DataTypes.BOOLEAN,
      defaultValue:true
    }
  });
};
