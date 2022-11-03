const db = require('../database/models');
const sequelize = db.sequelize; 

module.exports = {

    list: (req,res)=> {
        db.genres.findAll()
            .then(genres=> {
                res.render('genresList.ejs',{genres})
            })
    },

    detail:(req,res)=> {
        db.genres.findByPk(req.params.id)
           .then(genre => {
                res.render('genresDetail.ejs',{genre})
           })
    }

}
