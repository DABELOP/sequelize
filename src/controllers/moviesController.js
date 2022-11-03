const db = require('../database/models');
const sequelize = db.sequelize; 

module.exports ={

list: (req,res)=> {
    db.movies.findAll()
        .then(movies=> {
            res.render('moviesList.ejs',{movies})
        })
},

detail:(req,res)=> {
    db.movies.findByPk(req.params.id)
       .then(movie => {
            res.render('moviesDetail.ejs',{movie})
       })
},

new: (req,res)=> {
    db.movies.findAll(
        {
        order: [['release_date','DESC']],
        limit:5
        }
    )
        .then(movies=> {
            res.render('newestMovies.ejs',{movies})
        })
},

recommended: (req,res)=>{
     db.movies.findAll(
        {
            where:{
                rating: {[db.Sequelize.Op.gte]:8}
            },
            order:[['rating','DESC']]
        }
     )

     .then(movies => {
        res.render('recommendedMovies.ejs',{movies})
     })


}

}

