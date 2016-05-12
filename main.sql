/*lib system main*/

CREATE DATABASE owl_sys;

CREATE TABLE book(
	bookId INT(5) AUTO_INCREMENT PRIMARY KEY,
	title VARCHAR(100) NOT NULL,
	isbn VARCHAR(100) NOT NULL,
	genre VARCHAR(100) NOT NULL,
	author VARCHAR(100) NOT NULL,
	avail_flag BOOLEAN NOT NULL
);

CREATE TABLE user(
	username VARCHAR(50) PRIMARY KEY,
	/*adding some details, in case we have the notification :)*/
	name VARCHAR(50) NOT NULL,
	isAdmin BOOLEAN NOT NULL
);

CREATE TABLE borrow(
	borrowId INT AUTO_INCREMENT PRIMARY KEY,
	borrowDate DATE NOT NULL,
	dueDate DATE NOT NULL,
	returnDate DATE NOT NULL,
	borrowReason VARCHAR(200),
	bookId INT FOREIGN KEY REFERENCES books(bookId),
	username VARCHAR(50) FOREIGN KEY REFERENCES user(username)
);

