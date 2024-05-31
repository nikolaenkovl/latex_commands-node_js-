module.exports = (app) => {

    const command = require('../controller/command.controller');

    // Получение всех команд
    app.get('/api/commands', command.findAll);

    // Добавление команд
    app.post('/api/addCommand', command.create);

    // Обновление команд по id
    app.post('/api/updateCommand/:id', command.update);

    // Удаление команд по id
    app.post('/api/deleteCommand/:id', command.delete);

    // Получение команд по category
    app.get('/api/commandByCategory/:category', command.findCommandByCategory);

    app.get('/api/command/:id', command.findCommandById);
    // Получение пользователя по username
    //app.get('/api/command/username/:username', command.findByUsername);
};