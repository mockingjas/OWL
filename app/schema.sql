/*lib system main*/

-- CREATE DATABASE owl_sys;

/*
IN CMD: sqlite3 (http://www.tutorialspoint.com/sqlite/sqlite_installation.htm)
Create database schema by executing: sqlite3 owl_sys.db main.sql
Make sure to cdir to your intended location of db
*/

CREATE TABLE book(
	bookId INTEGER PRIMARY KEY AUTOINCREMENT,
	title CHAR(100) NOT NULL,
	isbn CHAR(100) NOT NULL,
	genre CHAR(100) NOT NULL,
	author CHAR(100) NOT NULL,
	avail_flag BOOLEAN NOT NULL
);

CREATE TABLE user(
	username CHAR(50) PRIMARY KEY,
	/*adding some details, in case we have the notification :)*/
	name CHAR(50) NOT NULL,
	isAdmin BOOLEAN NOT NULL
);

CREATE TABLE borrow(
	borrowId INTEGER PRIMARY KEY AUTOINCREMENT ,
	borrowDate DATE NOT NULL,
	dueDate DATE NOT NULL,
	returnDate DATE NOT NULL,
	borrowReason CHAR(200),
    bookId INTEGER,
    username VARCHAR(50),
	FOREIGN KEY (bookId) REFERENCES book(bookId),
	FOREIGN KEY (username) REFERENCES user(username)
);
