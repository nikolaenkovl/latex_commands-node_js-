var db = require('../config/db.config.js');
var User_command = db.user_command;
var Command = db.command;
var User=db.user;
var globalFunctions = require('../config/global.functions.js');
var { Op } = require("sequelize");


exports.findCommandsForUser = (req, res) => {
    Command.findAll({
        include: [
            {
                model: User_command,
                required: true, // INNER JOIN
                where: {
                    user_id: req.params.user_id
                }
            }
        ]
    })
        .then(objects => {
            globalFunctions.sendResult(res, objects);
        })
        .catch(err => {
            globalFunctions.sendError(res, err);
        })
};

exports.findCommandsNotUser = (req, res) => {
    db.sequelize.query(
        `SELECT * FROM command 
            WHERE NOT EXISTS ( 
                SELECT * FROM user_command 
                WHERE user_id = ? AND user_command.command_id = command.id
            )`,
        {
            type: db.sequelize.QueryTypes.SELECT,
            replacements: [req.params.user_id] // подстановка параметров
        })
        .then(objects => {
            globalFunctions.sendResult(res, objects);
        })
        .catch(err => {
            globalFunctions.sendError(res, err);
        })
};

exports.create = (req, res) => {
    User_command.create({
        user_id: req.body.user_id,
        command_id: req.body.command_id
    }).then(object => {
        globalFunctions.sendResult(res, object);
    }).catch(err => {
        globalFunctions.sendError(res, err);
    })
};
exports.delete = (req, res) => {
    User_command.destroy({
        where: {
            id: req.params.id
        }
    }).then(() => {
        globalFunctions.sendResult(res, 'Запись удалена');
    }).catch(err => {
        globalFunctions.sendError(res, err);
    });
};
exports.deleteFavorite = (req, res) => {
    User_command.destroy({
        where: {
            command_id: req.params.command_id
        }
    }).then(() => {
        globalFunctions.sendResult(res, 'Запись удалена');
    }).catch(err => {
        globalFunctions.sendError(res, err);
    });
};