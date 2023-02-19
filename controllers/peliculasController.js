let db = require("../database/models");
let Op = db.Sequelize.Op;

let peliculasController = {
    list: (req, res) => {
        db.Pelicula
        .findAll()
        .then(peliculas => {
            return res.status(200).json({
                total: peliculas.length,
                data: peliculas,
                status: 200
            });
        })
    },

    show: (req, res) => {
        db.Pelicula
        .findByPk(req.params.id)
        .then(pelicula => {
            return res.status(200).json({
                data: pelicula,
                status: 200
            });
        })
    },

    store: (req, res) => {
        db.Pelicula
        .create(req.body)
        .then(pelicula => {
            return res.status(200).json({
                data: pelicula,
                status: 200,
                created: "ok"
            });
        })
    },

    delete: (req, res) => {
        db.Pelicula
        .destroy({
            where: {
                id: req.params.id
            }
        })
        .then((response) => {
            return res.json(response);
        })
    },

    search: (req, res) => {
        db.Pelicula
        .findAll({
            where: {
                title: {[Op.like]: '%' + req.query.keyword + '%'}
            }
        })
        .then(peliculas => {
            if (peliculas.length > 0) {
                return res.status(200).json(peliculas);
            } 
                return res.status(200).json("no se encontró la pelicula solicitada");
        })
    }
}

module.exports = peliculasController;