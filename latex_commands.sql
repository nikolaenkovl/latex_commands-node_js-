-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1
-- Время создания: Дек 18 2022 г., 10:47
-- Версия сервера: 10.4.25-MariaDB
-- Версия PHP: 7.4.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `latex_commands`
--

-- --------------------------------------------------------

--
-- Структура таблицы `command`
--

CREATE TABLE `command` (
  `id` int(10) NOT NULL,
  `name` varchar(50) NOT NULL,
  `description` varchar(500) NOT NULL,
  `example` varchar(50) NOT NULL,
  `category` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Дамп данных таблицы `command`
--

INSERT INTO `command` (`id`, `name`, `description`, `example`, `category`) VALUES
(14, '\\frac', 'Команда \\frac имеет два параметра – числитель и знаменатель. Перед самой командой не обязательно ставить пробел. Следом за ключевым словом \\frac записываются числитель и знаменатель. Если числитель и знаменатель имеют длину более одного символа, они заключаются в фигурные скобки.', '\\frac{a^2-b^2}{2ab}', 3),
(15, '\\sqrt', 'Команда \\sqrt создаёт символ квадратного корня, окружающий математическое выражение. Он принимает необязательный аргумент в квадратных скобках ([ и ]) для изменения показателя (степени) корня:', '\\sqrt[n]{1+x+x^2+x^3+\\dots+x^n}', 3),
(16, '\\sum', 'Знак суммы', '\\sum_{i=1}^{10} a_ib_i+100', 3),
(17, '\\emph', 'Команда \\emph выделяет содержимое курсивом. Принимает один аргумент в фигурных скобках. ', '\\emph{Команды LaTeX}', 1),
(18, '\\textbf', 'Команда \\textbf выделяет текст жирным. Принимает один аргумент в фигурных скобках. ', '\\textbf{Курсовая работа}', 1);

-- --------------------------------------------------------

--
-- Структура таблицы `user`
--

CREATE TABLE `user` (
  `id` int(10) NOT NULL,
  `name` varchar(50) NOT NULL,
  `username` varchar(50) NOT NULL,
  `password` varchar(150) NOT NULL,
  `isAdmin` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Дамп данных таблицы `user`
--

INSERT INTO `user` (`id`, `name`, `username`, `password`, `isAdmin`) VALUES
(3, 'Oleg Nechiporenko', 'interpol12', '$2a$10$RTBdd9/wPLyrJZuF.DkJv.irw75KG7CbDc0JhVieAgg72yJKiR/C.', 1),
(4, 'NotAdmin1', 'notadmin', '$2a$10$JTgZHu5Vi7r/O.hwnyfGk.eHJmKiTiGm.uCOzfrFvrPwmeHefVk8.', 0),
(5, 'Common User', 'notadmin2', '$2a$10$axbZUC0do45ESOCpnFfgx.XEAYiPJZpd1lD9/aN6hsGMLNjOpD0He', 0);

-- --------------------------------------------------------

--
-- Структура таблицы `user_command`
--

CREATE TABLE `user_command` (
  `id` int(10) NOT NULL,
  `user_id` int(10) NOT NULL,
  `command_id` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Дамп данных таблицы `user_command`
--

INSERT INTO `user_command` (`id`, `user_id`, `command_id`) VALUES
(24, 3, 14),
(25, 3, 15),
(26, 3, 17),
(27, 5, 14),
(28, 5, 15),
(29, 5, 17);

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `command`
--
ALTER TABLE `command`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `user_command`
--
ALTER TABLE `user_command`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`),
  ADD KEY `command_id` (`command_id`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `command`
--
ALTER TABLE `command`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT для таблицы `user`
--
ALTER TABLE `user`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT для таблицы `user_command`
--
ALTER TABLE `user_command`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=30;

--
-- Ограничения внешнего ключа сохраненных таблиц
--

--
-- Ограничения внешнего ключа таблицы `user_command`
--
ALTER TABLE `user_command`
  ADD CONSTRAINT `user_command_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `user_command_ibfk_2` FOREIGN KEY (`command_id`) REFERENCES `command` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
