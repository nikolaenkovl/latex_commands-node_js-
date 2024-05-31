var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var cors = require('cors');
var corsOptions = {
    origin: 'http://localhost:4200', // указываем, откуда будут приходить запросы
    credentials: true, // разрешаем обрабатывать запросы
    optionSuccessStatus: 200 // при успешной обработке запроса будет возвращён статус 200
};

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


var db = require('./app/config/db.config.js'); // подключение настроек базы данных

db.sequelize.sync({force: false});

app.listen(3000);
var auth = require('./app/route/auth.route.js');
auth(app);

var command = require('./app/route/command.route.js');
command(app);

var user = require('./app/route/user.route.js');
user(app);

var user_command = require('./app/route/user_command.route.js');
user_command(app);





