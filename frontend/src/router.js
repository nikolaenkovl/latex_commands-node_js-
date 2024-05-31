import { createWebHistory, createRouter } from "vue-router";
// импорт компонентов

import MathCommands from "./components/command/listMathCommands";
import TextCommands from "./components/command/listTextCommands";
import CommandVueForMath from "./components/command/CommandForMath";
import CommandVueForText from "./components/command/CommandForText";
import UserFavoriteCommands from "./components/command/UserFavoriteCommands";
import FavoriteCommand from "./components/command/FavoriteCommand";
import ListCommonUsers from "./components/command/listCommonUsers";

import Login from "./components/authorization/Login";
import Register from "./components/authorization/Register";
//import Users from "./components/user/ListUsersForAdmin";
// определяем маршруты
//'/api/findCommonUsers'
const routes = [
    {
        path: "/listCommonUsers", // указание маршрута, по которому будем переходить к списку пользователей
        name: "CommonUsers", // имя маршрута
        component: ListCommonUsers, // компонент, на основании которого будет отрисовываться страница
        meta: {
            title: "Список обычных пользователей"
        }
    },
    {
        path: "/listMathCommands", // указание маршрута, по которому будем переходить к списку пользователей
        name: "mathCommands", // имя маршрута
        alias: "/mathCommands", // указание дополнительного маршрута
        component: MathCommands, // компонент, на основании которого будет отрисовываться страница
        meta: {
            title: "Список математических команд"
        }
    },
    {
        path: "/listTextCommands", // указание маршрута, по которому будем переходить к списку пользователей
        name: "textCommands", // имя маршрута
        alias: "/textCommands", // указание дополнительного маршрута
        component: TextCommands, // компонент, на основании которого будет отрисовываться страница
        meta: {
            title: "Список команд для оформления текста"
        }
    },
    {
        path: "/CommandForMath/:id",
        name: "command-math-details",
        component: CommandVueForMath,
        props: true,
        meta: {
            title: "Команда математики"
        }
    },
    {
        path: "/FavoriteCommand/:id",
        name: "command-favorite-details",
        component: FavoriteCommand,
        props: true,
        meta: {
            title: "Избранная команда"
        }
    },
    {
        path: "/userCommand/userId=:user_id",
        name: "favoriteCommands",
        component: UserFavoriteCommands,
        props: true,
        meta: {
            title: "Избранные команды"
        }
    },
    {
        path: "/CommandForText/:id",
        name: "command-text-details",
        component: CommandVueForText,
        props: true,
        meta: {
            title: "Команда оформления текста"
        }
    },
    {
        path: "/login",
        name: "login-user",
        component: Login,
        meta: {
            title: "Вход в систему"
        }
    },
    {
        path: "/register",
        name: "register-user",
        component: Register,
        meta: {
            title: "Регистрация"
        }
    }
    /*{
        path: "/users",
        name: "list-user",
        component: Users,
        meta: {
            title: "Пользователи"
        }
    }*/
];

const router = createRouter({
    history: createWebHistory(), // указываем, что будет создаваться история посещений веб-страниц
    routes, // подключаем маршрутизацию
});

// указание заголовка компонентам (тега title), заголовки определены в meta
router.beforeEach((to, from, next) => {
    document.title = `${to.meta.title}`;
    next();
});

export default router;