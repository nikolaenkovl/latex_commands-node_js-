var db = require("../config/db.config");
var config = require("../config/auth.config");
var User = db.user;
var globalFunctions = require('../config/global.functions.js');
var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");

/**
 * Проверяет данные пользователя для входа в систему.
  @function
  @name register
  @param {Object} req - Данные пользователя
  @param {Object} res - Результат обработки запроса
 */
exports.register = (req, res) => {
    User.create({
        name: req.body.name,
        username: req.body.username,
        isAdmin: 0,
        password: bcrypt.hashSync(req.body.password, 10) // генерация хеша пароля
    })
        .then(() => {
            var result = {
                message: "Пользователь зарегистрирован"
            };
            globalFunctions.sendResult(res, result);
        })
        .catch(err => {
            globalFunctions.sendError(res, err);
        });
};
exports.login = (req, res) => {
    User.findOne({
        where: {
            username: req.body.username
        }
    })
        .then(user => {
            if (!user) {
                res.status(404).send({ message: "Неверно введенный логин и/или пароль" });
                return;
            }

            var passwordIsValid = bcrypt.compareSync(
                req.body.password,
                user.password
            );
            if (!passwordIsValid) {
                res.status(401).send({
                    accessToken: null,
                    message: "Неверно введенный логин и/или пароль"
                });
                return;
            }

            var token = jwt.sign({ id: user.id }, config.secret, {
                expiresIn: 28800 // 8 часов — время действия токена
            });

            var object = {
                id: user.id,
                name: user.name,
                username: user.username,
                isAdmin: user.isAdmin,
                accessToken: token
            };
            globalFunctions.sendResult(res, object);
        })
        .catch(err => {
            globalFunctions.sendError(res, err);
        });
};

exports.userBoard = (req, res) => {
    globalFunctions.sendResult(res, "Пользователь авторизован");
};