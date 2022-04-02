module.exports = (sequelize, Datatypes) => {
    const QcmQuestion = sequelize.define('QcmQuestion', {
        id: {
            type: Datatypes.INTEGER,
            primaryKey: true,
            unique: true,
            allowNull: false,
            autoIncrement: true
        },
        question: {
            type: Datatypes.STRING,
            allowNull: false
        },
        theme:{
            type: Datatypes.STRING,
            allowNull: false
        },
        reponses:{
            type: Datatypes.STRING,
            allowNull: false
        },
        bonneReponse:{
            type: Datatypes.STRING,
            allowNull: false
        }
    });
    // User.associate = (models) => {

    // };
    return QcmQuestion;
}