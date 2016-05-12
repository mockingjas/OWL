import sqlite3

# ==================================================================== #
# || Arguments: username, bookId, borrowDate, dueDate, borrowReason || #
# ==================================================================== #
def borrowBook(*arg):
    print ("Arguments: ", arg)
    # Set avail_flag for TABLE book to 0
    # Insert borrowDate, dueDate, returnDate, borrowReason, bookId, username to TABLE borrow
    sqlite_file = 'owl_sys.db'
    conn = sqlite3.connect(sqlite_file)
    c = conn.cursor()

    params = (arg[1], )
    c.execute("UPDATE book SET avail_flag = 0 WHERE bookId = ?", params)
    params = arg
    c.execute("INSERT INTO borrow (username, bookId, borrowDate, dueDate, returnDate, borrowReason) VALUES (?, ?, ?, ?, 11111111, ?)", params)
    
    conn.commit()
    conn.close()

# ============================================= #
# || Arguments: returnDate, bookId, username || #
# ============================================= #
def returnBook(*arg):
    # Set avail_flag for TABLE book to 1
    # Delete row from TABLE borrow if username=username and bookId=bookId
    sqlite_file = 'owl_sys.db'
    conn = sqlite3.connect(sqlite_file)
    c = conn.cursor()

    params = (arg[1], )
    c.execute("UPDATE book SET avail_flag = 1 WHERE bookId = ?", params)
    params = arg
    c.execute("UPDATE borrow SET returnDate = ? WHERE bookId = ? AND username = ?", params)
    
    conn.commit()
    conn.close()
