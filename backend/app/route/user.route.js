module.exports = (app) => {

    const user = require('../controller/user.controller');
    var { authJwt } = require("../middleware");
    app.get('/api/users', [authJwt.verifyToken], user.findAll);
    // Получение всех пользователей
    app.get('/api/users', user.findAll);

    app.get('/api/findCommonUsers', user.findCommonUsers);

    // Добавление пользователей
    app.post('/api/addUser', user.create);

    // Обновление пользователей по id
    app.post('/api/updateUser/:id', user.update);

    // Удаление пользователей по id
    app.post('/api/deleteUser/:id', user.delete);

    // Получение пользователей по id
    app.get('/api/user/:id', user.findUserById);

    // Получение пользователя по username
    //app.get('/api/command/username/:username', command.findByUsername);
};