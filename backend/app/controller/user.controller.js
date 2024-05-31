var db = require('../config/db.config.js');
var User = db.user;
var globalFunctions = require('../config/global.functions.js');
var { Op } = require("sequelize");

// Получение данных пользователя по name
exports.findUsersByName = (req, res) => {
    User.findAll({
        where: {
            name: { [Op.like]: `%${req.params.name}%` }
        }
    }).then(objects => {
        globalFunctions.sendResult(res, objects);
    }).catch(err => {
        globalFunctions.sendError(res, err);
    })
};

exports.findCommonUsers = (req, res) => {
    User.findAll({
        where: {
            isAdmin: { [Op.like]: `%${0}%` }
        }})
        .then(objects => {
            globalFunctions.sendResult(res, objects);
        })
        .catch(err => {
            globalFunctions.sendError(res, err);
        })
};

// Получение всех пользователей
exports.findAll = (req, res) => {
    User.findAll()
        .then(objects => {
            globalFunctions.sendResult(res, objects);
        })
        .catch(err => {
            globalFunctions.sendError(res, err);
        })
};

exports.create = (req, res) => {
    User.create({
        name: req.body.name,
        username: req.body.username,
        password: req.body.password,
        isAdmin: false
    }).then(object => {
        globalFunctions.sendResult(res, object);
    }).catch(err => {
        globalFunctions.sendError(res, err);
    })
};

exports.update = (req, res) => {
    User.update({
            name: req.body.name,
            username: req.body.username,
            password: req.body.password
        },
        {
            where: {
                id: req.params.id
            }
        }
    ).then(object => {
        globalFunctions.sendResult(res, object);
    }).catch(err => {
        globalFunctions.sendError(res, err);
    })
};

exports.delete = (req, res) => {
    User.destroy({
        where: {
            id: req.params.id
        }
    }).then(() => {
        globalFunctions.sendResult(res, 'Запись удалена');
    }).catch(err => {
        globalFunctions.sendError(res, err);
    });
};

exports.findUserById = (req, res) => {
    User.findByPk(req.params.id)
        .then(object => {
            globalFunctions.sendResult(res, object);
        })
        .catch(err => {
            globalFunctions.sendError(res, err);
        })
};

exports.findByUsername = (req, res) => {
    User.findAll({
        where: {
            username: req.params.username
        }
    }).then(objects => {
        globalFunctions.sendResult(res, objects);
    }).catch(err => {
        globalFunctions.sendError(res, err);
    })
};