CREATE DATABASE IF NOT EXISTS vbbm;

USE vbbm;

CREATE TABLE IF NOT EXISTS pengambilan (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nama VARCHAR(50) NOT NULL,
    bagian VARCHAR(50) NOT NULL,
    tanggal DATE NOT NULL,
    dualima INT NOT NULL,
    limapuluh INT NOT NULL,
    seratus INT NOT NULL
);

CREATE TABLE IF NOT EXISTS pengembalian (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nama VARCHAR(50) NOT NULL,
    bagian VARCHAR(50) NOT NULL,
    tanggal DATE NOT NULL,
    dualima INT NOT NULL,
    limapuluh INT NOT NULL,
    seratus INT NOT NULL
);
