-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 19-02-2024 a las 01:55:19
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `next-usuarios`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `aula`
--

CREATE TABLE `aula` (
  `aula_id` int(11) NOT NULL,
  `aula_nombre` varchar(99) NOT NULL,
  `aula_descripcion` text NOT NULL,
  `aula_organizacion` varchar(99) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `curso`
--

CREATE TABLE `curso` (
  `curso_id` int(11) NOT NULL,
  `curso_nombre` varchar(99) NOT NULL,
  `curso_descripcion` text NOT NULL,
  `curso_abierto` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `curso`
--

INSERT INTO `curso` (`curso_id`, `curso_nombre`, `curso_descripcion`, `curso_abierto`) VALUES
(1, 'Marketing 360°', 'Un curso sobre Marketing', 0),
(2, 'Mujeres en Tecnología', 'Impulsando la igualdad en el sector', 0),
(3, 'SilverTech', 'Un Curso para población +50 que busca reinsertarse en el mundo laboral.', 0),
(4, 'Historias para armar', '', 0),
(5, 'Yoga para novatos', '', 0),
(6, 'Nuevo curso', '', 0);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `curso_aula`
--

CREATE TABLE `curso_aula` (
  `aula_id` int(11) NOT NULL,
  `curso_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `leccion`
--

CREATE TABLE `leccion` (
  `leccion_id` int(11) NOT NULL,
  `leccion_unidad` int(11) NOT NULL,
  `leccion_nombre` varchar(99) NOT NULL,
  `leccion_contenido` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL CHECK (json_valid(`leccion_contenido`)),
  `leccion_orden` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `leccion`
--

INSERT INTO `leccion` (`leccion_id`, `leccion_unidad`, `leccion_nombre`, `leccion_contenido`, `leccion_orden`) VALUES
(24, 11, 'UX/UI para el desarrollador', '{\"time\":1708001679740,\"blocks\":[{\"id\":\"HTUbNeRDb3\",\"type\":\"header\",\"data\":{\"text\":\"Mi encabezado preferido\",\"level\":2}},{\"id\":\"0OHkYuwrbs\",\"type\":\"paragraph\",\"data\":{\"text\":\"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam maximus arcu vel elit pharetra cursus. Ut sagittis eu mauris vitae pulvinar. In pellentesque arcu sed turpis fermentum, vitae faucibus eros dapibus. Sed mollis tincidunt metus, cursus pulvinar ipsum tempor eu. Praesent arcu eros, fermentum vitae accumsan non, tincidunt eget augue. Vestibulum convallis gravida sapien. Vestibulum tincidunt nunc consectetur sodales posuere. Pellentesque vehicula vehicula congue. Cras ut lacinia elit. Integer bibendum ipsum at vulputate euismod. Sed eleifend consectetur odio sit amet feugiat. In eget dolor vel arcu posuere viverra quis et nunc. Proin tristique egestas lorem, ut laoreet nibh consequat eu. Vestibulum aliquam facilisis feugiat.\"}},{\"id\":\"_lnIm4kpDQ\",\"type\":\"paragraph\",\"data\":{\"text\":\"Quisque egestas turpis a lorem dignissim fermentum. Vestibulum sollicitudin vulputate nisi id pulvinar. Fusce varius ultricies suscipit. Cras lacinia, purus eget auctor cursus, quam enim ullamcorper arcu, eu ultricies lectus sem ultrices magna. Sed pulvinar egestas consectetur. Integer tristique turpis vitae orci molestie facilisis vitae varius lorem. Quisque venenatis sem quis lectus eleifend, eget tempus eros luctus. Aliquam eget libero nisi. Vestibulum rutrum risus urna. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nullam volutpat sit amet est in faucibus.\"}},{\"id\":\"Vp3rtdZdJb\",\"type\":\"paragraph\",\"data\":{\"text\":\"Vestibulum fringilla eleifend justo, non sollicitudin turpis lobortis eget. Etiam nisi sem, consectetur et nunc ultrices, lacinia cursus ligula. Nullam non aliquet nisl. Suspendisse dignissim, eros in sodales tincidunt, ligula ante pharetra nibh, a sodales magna ante in mi. Integer sodales sapien ac nisl dignissim placerat. Donec non suscipit eros. Mauris rhoncus quis nunc a fermentum. Proin scelerisque in libero a auctor. Curabitur pretium sollicitudin eros, sed rutrum leo luctus id.\"}}],\"version\":\"2.29.0\"}', 1),
(25, 11, 'Leccion no completada', '{\"time\":1707612792804,\"blocks\":[{\"id\":\"HyWbwDCELz\",\"type\":\"paragraph\",\"data\":{\"text\":\"Donec ac velit vitae lacus pellentesque auctor id sit amet urna. Nam rutrum vitae purus eu facilisis. Vestibulum fringilla felis vel sapien aliquam, in mattis ex bibendum. Duis viverra lorem eu venenatis faucibus. In feugiat porta tempus. Sed semper luctus maximus. Mauris et tellus sodales leo hendrerit ornare at ac nisi. Praesent quis ligula vehicula, iaculis dui vel, elementum ipsum. Etiam malesuada, quam sit amet lobortis luctus, sapien erat tincidunt enim, eu pulvinar urna nulla quis turpis. Sed et quam a metus accumsan rhoncus. Aenean et sapien vulputate, condimentum nisi ut, vestibulum eros.\"}},{\"id\":\"BpL3eQrGVz\",\"type\":\"paragraph\",\"data\":{\"text\":\"Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Quisque nec lacinia orci. Aliquam feugiat sollicitudin lectus, id laoreet urna. Nulla pulvinar nisi in mauris eleifend dignissim. Quisque in turpis vulputate, tristique ligula vel, vulputate nulla. Donec scelerisque justo dolor, quis suscipit elit condimentum et. Maecenas a urna ut massa lobortis mollis. Vestibulum convallis erat id mi lobortis, sit amet vehicula felis egestas. In euismod, nibh at mollis facilisis, urna risus hendrerit sapien, at consequat odio lorem auctor nunc. Donec a risus feugiat, elementum massa hendrerit, viverra leo. Praesent finibus mi turpis, eu imperdiet magna scelerisque nec. Nunc massa purus, ultrices et tortor in, condimentum feugiat quam.\"}},{\"id\":\"TZAtxkVP7U\",\"type\":\"embed\",\"data\":{\"service\":\"youtube\",\"source\":\"https://www.youtube.com/watch?v=sWtEYPva4A0\",\"embed\":\"https://www.youtube.com/embed/sWtEYPva4A0\",\"width\":580,\"height\":320,\"caption\":\"\"}}],\"version\":\"2.29.0\"}', 1),
(26, 11, 'Otra leccion no completada', '{\"time\":1707607880656,\"blocks\":[{\"id\":\"6bfTpoFOUZ\",\"type\":\"paragraph\",\"data\":{\"text\":\"Donec ac velit vitae lacus pellentesque auctor id sit amet urna. Nam rutrum vitae purus eu facilisis. Vestibulum fringilla felis vel sapien aliquam, in mattis ex bibendum. Duis viverra lorem eu venenatis faucibus. In feugiat porta tempus. Sed semper luctus maximus. Mauris et tellus sodales leo hendrerit ornare at ac nisi. Praesent quis ligula vehicula, iaculis dui vel, elementum ipsum. Etiam malesuada, quam sit amet lobortis luctus, sapien erat tincidunt enim, eu pulvinar urna nulla quis turpis. Sed et quam a metus accumsan rhoncus. Aenean et sapien vulputate, condimentum nisi ut, vestibulum eros.\"}},{\"id\":\"-et4d_leWI\",\"type\":\"paragraph\",\"data\":{\"text\":\"Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Quisque nec lacinia orci. Aliquam feugiat sollicitudin lectus, id laoreet urna. Nulla pulvinar nisi in mauris eleifend dignissim. Quisque in turpis vulputate, tristique ligula vel, vulputate nulla. Donec scelerisque justo dolor, quis suscipit elit condimentum et. Maecenas a urna ut massa lobortis mollis. Vestibulum convallis erat id mi lobortis, sit amet vehicula felis egestas. In euismod, nibh at mollis facilisis, urna risus hendrerit sapien, at consequat odio lorem auctor nunc. Donec a risus feugiat, elementum massa hendrerit, viverra leo. Praesent finibus mi turpis, eu imperdiet magna scelerisque nec. Nunc massa purus, ultrices et tortor in, condimentum feugiat quam.\"}},{\"id\":\"ff4dLXVKE9\",\"type\":\"embed\",\"data\":{\"service\":\"youtube\",\"source\":\"https://www.youtube.com/watch?v=sWtEYPva4A0\",\"embed\":\"https://www.youtube.com/embed/sWtEYPva4A0\",\"width\":580,\"height\":320,\"caption\":\"\"}}],\"version\":\"2.29.0\"}', 2),
(27, 12, 'Tareas del hogar', '{\"time\":1707608121023,\"blocks\":[{\"id\":\"20iYLPldDL\",\"type\":\"paragraph\",\"data\":{\"text\":\"Intenciones buenas.\"}}],\"version\":\"2.29.0\"}', 0),
(28, 13, 'Como diseniar un modelo de negocio', '{\"time\":1707777322495,\"blocks\":[{\"id\":\"bND1_9HGMM\",\"type\":\"header\",\"data\":{\"text\":\"Mi titulo\",\"level\":2}},{\"id\":\"tVZIcvySdn\",\"type\":\"embed\",\"data\":{\"service\":\"youtube\",\"source\":\"https://www.youtube.com/watch?v=zoaF0qq3Qqk\",\"embed\":\"https://www.youtube.com/embed/zoaF0qq3Qqk\",\"width\":580,\"height\":320,\"caption\":\"\"}}],\"version\":\"2.29.0\"}', 0),
(29, 11, 'Ideas creativas', '{\"blocks\":[]}', 3),
(30, 12, 'Recetas para impresionar', '{\"blocks\":[]}', 1),
(31, 15, 'Flexbox', '{\"blocks\":[]}', 0);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `unidad`
--

CREATE TABLE `unidad` (
  `unidad_id` int(11) NOT NULL,
  `unidad_curso` int(11) NOT NULL,
  `unidad_nombre` varchar(99) NOT NULL,
  `unidad_orden` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `unidad`
--

INSERT INTO `unidad` (`unidad_id`, `unidad_curso`, `unidad_nombre`, `unidad_orden`) VALUES
(11, 2, 'Mi primera app', 1),
(12, 2, 'Swift UI', 2),
(13, 6, 'Canva para negocio', 1),
(14, 6, 'Mi primera web', 2),
(15, 2, 'Aprendiendo CSS', 3);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuario`
--

CREATE TABLE `usuario` (
  `usuario_id` int(11) NOT NULL,
  `usuario_nombre` varchar(60) NOT NULL,
  `usuario_apellido` varchar(60) NOT NULL,
  `usuario_email` varchar(60) NOT NULL,
  `usuario_tipo` enum('Estudiante','Observador','Editor','Administrador') NOT NULL,
  `usuario_clave` char(60) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `usuario`
--

INSERT INTO `usuario` (`usuario_id`, `usuario_nombre`, `usuario_apellido`, `usuario_email`, `usuario_tipo`, `usuario_clave`) VALUES
(18, 'Prueba', 'Prueba3', 'prueba@prueba3.com', 'Estudiante', '$2a$10$iUY0XN2.in2A9oyZLvOrAOVaemcvQ1Z/Txv.FbDvdmn7OGSc1JylG'),
(19, 'Admin', 'Prueba3', 'fede@admin.com', 'Administrador', '$2a$10$iUY0XN2.in2A9oyZLvOrAOVaemcvQ1Z/Txv.FbDvdmn7OGSc1JylG');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuario_aula`
--

CREATE TABLE `usuario_aula` (
  `usuario_id` int(11) NOT NULL,
  `aula_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuario_leccion`
--

CREATE TABLE `usuario_leccion` (
  `usuario_id` int(11) NOT NULL,
  `leccion_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `usuario_leccion`
--

INSERT INTO `usuario_leccion` (`usuario_id`, `leccion_id`) VALUES
(18, 24),
(18, 31),
(19, 24),
(19, 25),
(19, 26),
(19, 27),
(19, 29),
(19, 30),
(19, 31);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `aula`
--
ALTER TABLE `aula`
  ADD PRIMARY KEY (`aula_id`);

--
-- Indices de la tabla `curso`
--
ALTER TABLE `curso`
  ADD PRIMARY KEY (`curso_id`);

--
-- Indices de la tabla `curso_aula`
--
ALTER TABLE `curso_aula`
  ADD PRIMARY KEY (`aula_id`,`curso_id`);

--
-- Indices de la tabla `leccion`
--
ALTER TABLE `leccion`
  ADD PRIMARY KEY (`leccion_id`),
  ADD KEY `fk_leccion_unidad` (`leccion_unidad`);

--
-- Indices de la tabla `unidad`
--
ALTER TABLE `unidad`
  ADD PRIMARY KEY (`unidad_id`),
  ADD KEY `fk_unidad_curso` (`unidad_curso`);

--
-- Indices de la tabla `usuario`
--
ALTER TABLE `usuario`
  ADD PRIMARY KEY (`usuario_id`);

--
-- Indices de la tabla `usuario_aula`
--
ALTER TABLE `usuario_aula`
  ADD PRIMARY KEY (`usuario_id`,`aula_id`);

--
-- Indices de la tabla `usuario_leccion`
--
ALTER TABLE `usuario_leccion`
  ADD PRIMARY KEY (`usuario_id`,`leccion_id`) USING BTREE,
  ADD KEY `leccion_id` (`leccion_id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `aula`
--
ALTER TABLE `aula`
  MODIFY `aula_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `curso`
--
ALTER TABLE `curso`
  MODIFY `curso_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de la tabla `leccion`
--
ALTER TABLE `leccion`
  MODIFY `leccion_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=32;

--
-- AUTO_INCREMENT de la tabla `unidad`
--
ALTER TABLE `unidad`
  MODIFY `unidad_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT de la tabla `usuario`
--
ALTER TABLE `usuario`
  MODIFY `usuario_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `leccion`
--
ALTER TABLE `leccion`
  ADD CONSTRAINT `fk_leccion_unidad` FOREIGN KEY (`leccion_unidad`) REFERENCES `unidad` (`unidad_id`);

--
-- Filtros para la tabla `unidad`
--
ALTER TABLE `unidad`
  ADD CONSTRAINT `fk_unidad_curso` FOREIGN KEY (`unidad_curso`) REFERENCES `curso` (`curso_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
