-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 08, 2023 at 06:11 AM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `moviedb`
--

-- --------------------------------------------------------

--
-- Table structure for table `auth`
--

CREATE TABLE `auth` (
  `id` int(200) NOT NULL,
  `username` varchar(1000) COLLATE utf8_unicode_ci NOT NULL,
  `password` varchar(1000) COLLATE utf8_unicode_ci NOT NULL,
  `accessToken` varchar(10000) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `auth`
--

INSERT INTO `auth` (`id`, `username`, `password`, `accessToken`) VALUES
(2, 'admin', '123', 'MPjl2Y5AkvtP30rFb3ABRwkYNWsuRhJXkRQLhjaweqsC7H4fg8H2UmY5RpOkbO05');

-- --------------------------------------------------------

--
-- Table structure for table `movie`
--

CREATE TABLE `movie` (
  `id` int(200) NOT NULL,
  `title` varchar(1000) COLLATE utf8_unicode_ci NOT NULL,
  `type` varchar(10) COLLATE utf8_unicode_ci NOT NULL,
  `thumbnail` varchar(1000) COLLATE utf8_unicode_ci NOT NULL,
  `trailer` varchar(1000) COLLATE utf8_unicode_ci NOT NULL,
  `description` varchar(10000) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `movie`
--

INSERT INTO `movie` (`id`, `title`, `type`, `thumbnail`, `trailer`, `description`) VALUES
(3, 'Ant-Man and The Wasp: Quantumania', '1', 'http://localhost:58245/quantumanias.png', 'https://www.youtube.com/watch?v=ug7JuDFg9R0', 'Here\'s our \'FINAL TRAILER\' concept for Marvel Studios\' upcoming movie Ant-Man and The Wasp: Quantumania (2023) (More Info About This Video Down Below!'),
(4, 'Captain American: The Winter Soldier', '1', 'http://localhost:58245/captain.png', 'https://www.youtube.com/watch?v=7SlILk2WMTI', 'The First Avenger returns for an all-new cinematic adventure April 4 in Marvel\'s Captain America: The Winter Soldier!'),
(5, 'Marvel Studios\' Avengers: Endgame', '1', 'http://localhost:58245/endgame.png', 'https://www.youtube.com/watch?v=TcMBFSGVi1c', 'The First Avenger returns for an all-new cinematic adventure April 4 in Marvel\'s Captain America: The Winter Soldier!'),
(6, 'Marvel Studios’ Hawkeye', '1', 'http://localhost:58245/hawkeye.png', 'https://www.youtube.com/watch?v=5VYb3B1ETlk', 'Starring Jeremy Renner as Clint Barton/Hawkeye and Hailee Steinfeld as Kate Bishop, “Hawkeye” also features Vera Farmiga, Fra Fee, Tony Dalton, Zahn McClarnon, Brian d’Arcy James and newcomer Alaqua Cox as Maya Lopez'),
(7, 'Marvel Studios’ Iron Man', '1', 'http://localhost:58245/ironman.png', 'https://www.youtube.com/watch?v=8ugaeA-nMTc', 'Check out the official Iron Man (2008) trailer starring Robert Downey Jr.!'),
(8, 'Marvel Studios\' Thor: Love and Thunder ', '1', 'http://localhost:58245/thor4.png', 'https://www.youtube.com/watch?v=UBgPypHGAqE', 'The film finds Thor (Chris Hemsworth) on a journey unlike anything he’s ever faced – a quest for inner peace. But his retirement is interrupted by a galactic killer known as Gorr the God Butcher (Christian Bale), who seeks the extinction of the gods'),
(9, 'Marvel Studios’ Black Panther: Wakanda Forever', '1', 'http://localhost:58245/wakanda.png', 'https://www.youtube.com/watch?v=_Z3QKkl1WyM', 'Show them who we are.” Watch the brand-new trailer for Marvel Studios’ Black Panther: Wakanda Forever');

-- --------------------------------------------------------

--
-- Table structure for table `userdb`
--

CREATE TABLE `userdb` (
  `id` int(200) NOT NULL,
  `username` varchar(1000) COLLATE utf8_unicode_ci NOT NULL,
  `password` varchar(1000) COLLATE utf8_unicode_ci NOT NULL,
  `email` varchar(1000) COLLATE utf8_unicode_ci NOT NULL,
  `fullname` varchar(1000) COLLATE utf8_unicode_ci NOT NULL,
  `accessToken` varchar(1000) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `userdb`
--

INSERT INTO `userdb` (`id`, `username`, `password`, `email`, `fullname`, `accessToken`) VALUES
(1, 'user1', '123', 'z@gmail.com', 'Manh Tran', 'XpT7OoqccDKg8Oa14B5w'),
(2, 'asmdnasmdn', '123', '@gmail.com', 'TRan Duc Manh', 'XpT7OoqccDKg8Oa14B5w'),
(3, 'user1', '123', 'z@gmail.com', 'Manh Tran', 'XpT7OoqccDKg8Oa14B5w'),
(4, 'asd', 'asd', 'asd', 'asd', 'XpT7OoqccDKg8Oa14B5w'),
(5, 'admin', 'asd', 'asd', 'asd', 'XpT7OoqccDKg8Oa14B5w'),
(6, 'phuonganh', '123', 'admin', 'admin', 'XpT7OoqccDKg8Oa14B5w'),
(7, 'phuonganhh', '123', 'admin', 'admin', 'XpT7OoqccDKg8Oa14B5w'),
(8, 'phuonganhh', '123', 'admin', 'admin', 'XpT7OoqccDKg8Oa14B5w'),
(9, 'zxc', 'zxc', 'zxc', 'zxc', 'XpT7OoqccDKg8Oa14B5w'),
(10, 'zxc', 'zxc', 'zxc', 'zxc', 'XpT7OoqccDKg8Oa14B5w'),
(11, 'zxc', 'zxc', 'zxc', 'zxc', 'XpT7OoqccDKg8Oa14B5w'),
(12, 'zxc', 'zxc', 'zxc', 'zxc', 'XpT7OoqccDKg8Oa14B5w'),
(13, 'zxc', 'zxc', 'zxc', 'zxc', 'XpT7OoqccDKg8Oa14B5w'),
(14, 'zxc', 'zxc', 'zxc', 'zxc', 'XpT7OoqccDKg8Oa14B5w'),
(15, 'zxcz', 'zxc', 'zxc', 'zxc', 'XpT7OoqccDKg8Oa14B5w'),
(16, 'zxcc', '', 'zxc', 'asdazqwe', 'XpT7OoqccDKg8Oa14B5w');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `auth`
--
ALTER TABLE `auth`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `movie`
--
ALTER TABLE `movie`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `userdb`
--
ALTER TABLE `userdb`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `auth`
--
ALTER TABLE `auth`
  MODIFY `id` int(200) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `movie`
--
ALTER TABLE `movie`
  MODIFY `id` int(200) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `userdb`
--
ALTER TABLE `userdb`
  MODIFY `id` int(200) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
