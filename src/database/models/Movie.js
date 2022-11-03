module.exports = (sequelize, dataTypes) => {

    let alias = 'movies'; 
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },

        title: {
            type: dataTypes.STRING 
        },

        rating: {
            type: dataTypes.DECIMAL
        },

        length: {
            type: dataTypes.INTEGER
        },

        awards: {
            type: dataTypes.INTEGER
        },

        release_date: {
            type: dataTypes.DATE
        }

    }

    let config = {
        tableName: 'movies',
        timestamps: false
    }

    const movie = sequelize.define(alias,cols,config);
    return movie;
}