var db = require('../config/db.config.js');
var Command = db.command;
var globalFunctions = require('../config/global.functions.js');
var { Op } = require("sequelize");

// Получение команд из категории
exports.findCommandByCategory = (req, res) => {
    Command.findAll({
        where: {
            category: { [Op.like]: `%${req.params.category}%` }
        }
    }).then(objects => {
        globalFunctions.sendResult(res, objects);
    }).catch(err => {
        globalFunctions.sendError(res, err);
    })
};
exports.findCommandById = (req, res) => {
    Command.findByPk(req.params.id)
    .then(object => {
        globalFunctions.sendResult(res, object);
    })
    .catch(err => {
        globalFunctions.sendError(res, err);
    })
};


// Получение всех команд
exports.findAll = (req, res) => {
    Command.findAll()
        .then(objects => {
            globalFunctions.sendResult(res, objects);
        })
        .catch(err => {
            globalFunctions.sendError(res, err);
        })
};

exports.create = (req, res) => {
    Command.create({
        name: req.body.name,
        description: req.body.description,
        example: req.body.example,
        category: req.body.category
    }).then(object => {
        globalFunctions.sendResult(res, object);
    }).catch(err => {
        globalFunctions.sendError(res, err);
    })
};

exports.update = (req, res) => {
    Command.update({
        name: req.body.name,
        description: req.body.description,
        example: req.body.example,
        category: req.body.category
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
    Command.destroy({
        where: {
            id: req.params.id
        }
    }).then(() => {
        globalFunctions.sendResult(res, 'Запись удалена');
    }).catch(err => {
        globalFunctions.sendError(res, err);
    });
};

/*exports.findByCategory = (req, res) => {
    Command.findByFk({where: {
        category: req.params.category}})
        .then(object => {
            globalFunctions.sendResult(res, object);
        })
        .catch(err => {
            globalFunctions.sendError(res, err);
        })
};*/
/*
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
};*/