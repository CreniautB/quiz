module.exports = (sequelize, Datatypes) => {
    const Result = sequelize.define('Result', {
        id: {
            type: Datatypes.INTEGER,
            primaryKey: true,
            unique: true,
            allowNull: false,
            autoIncrement: true
        },
        title:{
            type : Datatypes.STRING,
            allowNull : false
        },
        bonneReponses: {
            type: Datatypes.INTEGER,
            allowNull: false
        },      
        totalReponses:{
            type : Datatypes.INTEGER,
            allowNull : false
        },
        theme:{
            type : Datatypes.STRING,
            allowNull : true
        }

    }
    );
    
    // User.associate = (models) => {

    // };
    return Result;
}