import {  sequelize , Sequelize } from '../routes/dbcon';

  const Tas_marks = sequelize.define('tas_marks', {
    ID: {
      type: Sequelize.INTEGER(6),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    NAME: {
      type: Sequelize.STRING,
      allowNull: false
    },
    TESTNUM: {
      type: Sequelize.INTEGER(11),
      allowNull: true
    },
    
    MARK: {
      type: Sequelize.INTEGER(11),
      allowNull: true
    },

   }, {
    tableName: 'tas_marks',
     timestamps: false
  });


export {Tas_marks};
