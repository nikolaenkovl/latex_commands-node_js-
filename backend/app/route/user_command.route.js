module.exports = (app) => {

    const user_command = require('../controller/user_command.controller');

    //app.get('/api/user_commands', user_command.findAll);

    // Обновление команд по id
    // app.post('/api/updateUserCommand/:id', user_command.update);

    // Добавление команд
    app.post('/api/addUserCommand', user_command.create);

    //Удаление команд по id
    //app.post('/api/deleteUserCommand/:id', user_command.delete);

    app.post('/api/deleteFavoriteCommand/commandId=:command_id', user_command.deleteFavorite);

    // Получение команд по id
    app.get('/api/userCommand/userId=:user_id', user_command.findCommandsForUser);

    app.get('/api/notUserCommand/userId=:user_id', user_command.findCommandsNotUser);

    // Получение пользователя по username
    //app.get('/api/command/username/:username', command.findByUsername);
};