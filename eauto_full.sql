-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Gép: localhost:8889
-- Létrehozás ideje: 2022. Ápr 26. 07:27
-- Kiszolgáló verziója: 5.7.34
-- PHP verzió: 7.4.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Adatbázis: `eauto`
--
CREATE DATABASE IF NOT EXISTS `eauto` DEFAULT CHARACTER SET utf8 COLLATE utf8_hungarian_ci;
USE `eauto`;

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `etipusok`
--

CREATE TABLE `etipusok` (
  `id` varchar(10) COLLATE utf8_hungarian_ci NOT NULL DEFAULT '',
  `nev` varchar(255) COLLATE utf8_hungarian_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_hungarian_ci;

--
-- A tábla adatainak kiíratása `etipusok`
--

INSERT INTO `etipusok` (`id`, `nev`) VALUES
('aet', 'Audi e-Torn'),
('b330', 'BMV 330 PHEV'),
('bi', 'BMV i3'),
('fk', 'Ford Kuga PHEV'),
('hk', 'Hyundai Kona EV'),
('kn', 'Kia Niro EV'),
('ma250', 'Mercedes A250 EV'),
('mglc', 'Mercedes GLC300e PEV'),
('mo', 'Mitsubishi Outlander PHEV'),
('nl', 'Nissan Feaf'),
('p208', 'Peugeot 208 Ev'),
('rz', 'Renault Zoe'),
('sft', 'Smart For Two EV'),
('tm3', 'Tesla Model 3'),
('vwg', 'Volswagen Golf'),
('vwid3', 'Volswagen ID3'),
('vwp', 'Volswagen Passat'),
('vwu', 'Volswagen e-Up!'),
('vxc40', 'Volvo XC40 PHEV'),
('vxc60', 'Volvo XC60T8 PHEV');

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `eu_eladas_data`
--

CREATE TABLE `eu_eladas_data` (
  `id` int(11) NOT NULL,
  `etipusID` varchar(10) COLLATE utf8_hungarian_ci NOT NULL,
  `evId` int(11) NOT NULL,
  `mennyiseg` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_hungarian_ci;

--
-- A tábla adatainak kiíratása `eu_eladas_data`
--

INSERT INTO `eu_eladas_data` (`id`, `etipusID`, `evId`, `mennyiseg`) VALUES
(1, 'rz', 1, 99613),
(2, 'tm3', 1, 87642),
(3, 'vwp', 1, 26700),
(4, 'vwid3', 1, 56937),
(5, 'vwg', 1, 33659),
(6, 'hk', 1, 48537),
(7, 'aet', 1, 33463),
(8, 'nl', 1, 31791),
(9, 'p208', 1, 31554),
(10, 'kn', 1, 30690),
(11, 'ma250', 1, 29436),
(12, 'mglc', 1, 21286),
(13, 'sft', 1, 19537),
(14, 'vxc40', 1, 28254),
(15, 'vxc60', 1, 24785),
(16, 'mo', 1, 27387),
(17, 'b330', 1, 26180),
(18, 'bi', 1, 22849),
(19, 'fk', 1, 22849),
(20, 'vwu', 1, 21942),
(21, 'rz', 2, 47343),
(22, 'tm3', 2, 80630),
(23, 'vwp', 2, 33800),
(24, 'vwid3', 2, 56937),
(25, 'vwg', 2, 28765),
(26, 'hk', 2, 22680),
(27, 'aet', 2, 18386),
(28, 'nl', 2, 31116),
(29, 'p208', 2, 31554),
(30, 'kn', 2, 11119),
(31, 'ma250', 2, 29436),
(32, 'mglc', 2, 21286),
(33, 'sft', 2, 11840),
(34, 'vxc40', 2, 28254),
(35, 'vxc60', 2, 14409),
(36, 'mo', 2, 34668),
(37, 'b330', 2, 10186),
(38, 'bi', 2, 31734),
(39, 'fk', 2, 22849),
(40, 'vwu', 2, 21942);

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `eu_world`
--

CREATE TABLE `eu_world` (
  `id` int(11) NOT NULL,
  `ev` int(4) DEFAULT NULL,
  `elektromos` int(11) DEFAULT NULL,
  `hagyomanyos` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_hungarian_ci;

--
-- A tábla adatainak kiíratása `eu_world`
--

INSERT INTO `eu_world` (`id`, `ev`, `elektromos`, `hagyomanyos`) VALUES
(1, 2014, 100060, 12996324),
(2, 2015, 193493, 14192584),
(3, 2016, 222619, 15118305),
(4, 2017, 306143, 5610239),
(5, 2018, 386347, 5605746),
(6, 2019, 564206, 15805658),
(7, 2020, 1367138, 11961182);

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `ev`
--

CREATE TABLE `ev` (
  `Id` int(11) NOT NULL,
  `datum` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_hungarian_ci;

--
-- A tábla adatainak kiíratása `ev`
--

INSERT INTO `ev` (`Id`, `datum`) VALUES
(1, '2019-12-31'),
(2, '2020-12-31');

--
-- Indexek a kiírt táblákhoz
--

--
-- A tábla indexei `etipusok`
--
ALTER TABLE `etipusok`
  ADD PRIMARY KEY (`id`);

--
-- A tábla indexei `eu_eladas_data`
--
ALTER TABLE `eu_eladas_data`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK_eu_eladas_data_etipusID` (`etipusID`),
  ADD KEY `FK_eu_eladas_data_evId` (`evId`);

--
-- A tábla indexei `eu_world`
--
ALTER TABLE `eu_world`
  ADD PRIMARY KEY (`id`);

--
-- A tábla indexei `ev`
--
ALTER TABLE `ev`
  ADD PRIMARY KEY (`Id`);

--
-- A kiírt táblák AUTO_INCREMENT értéke
--

--
-- AUTO_INCREMENT a táblához `eu_eladas_data`
--
ALTER TABLE `eu_eladas_data`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=41;

--
-- AUTO_INCREMENT a táblához `ev`
--
ALTER TABLE `ev`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Megkötések a kiírt táblákhoz
--

--
-- Megkötések a táblához `eu_eladas_data`
--
ALTER TABLE `eu_eladas_data`
  ADD CONSTRAINT `FK_eu_eladas_data_etipusID2` FOREIGN KEY (`etipusID`) REFERENCES `etipusok` (`id`) ON DELETE NO ACTION,
  ADD CONSTRAINT `FK_eu_eladas_data_evId2` FOREIGN KEY (`evId`) REFERENCES `ev` (`Id`) ON DELETE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
