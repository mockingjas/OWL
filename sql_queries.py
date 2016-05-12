import datetime
import sqlite3

# ==================================================================== #
# || Arguments: username, bookId, borrowDate, dueDate, borrowReason || #
# ==================================================================== #
def borrowBook(*arg):

    # Set avail_flag for TABLE book to 0
    # Insert borrowDate, dueDate, returnDate, borrowReason, bookId, username to TABLE borrow

    print ("Arguments: ", arg)

    sqlite_file = 'owl_sys.db'
    conn = sqlite3.connect(sqlite_file)
    c = conn.cursor()

    currentDate = datetime.date.today()
    modifiedDate = currentDate + datetime.timedelta(days=7) 

    params = (arg[1], )
    c.execute("UPDATE book SET avail_flag = 0 WHERE bookId = ?", params)
    params = (arg[0], arg[1], currentDate, modifiedDate, arg[2])
    c.execute("INSERT INTO borrow (username, bookId, borrowDate, dueDate, borrowReason) VALUES (?, ?, ?, ?, ?)", params)
    
    conn.commit()
    conn.close()

# ============================================= #
# || Arguments: returnDate, bookId, username || #
# ============================================= #
def returnBook(*arg):

    # Set avail_flag for TABLE book to 1
    # Delete row from TABLE borrow if username=username and bookId=bookId
    
    print ("Arguments: ", arg)

    sqlite_file = 'owl_sys.db'
    conn = sqlite3.connect(sqlite_file)
    c = conn.cursor()

    currentDate = datetime.date.today()

    params = (arg[1], )
    c.execute("UPDATE book SET avail_flag = 1 WHERE bookId = ?", params)
    params = (currentDate, arg[0], arg[1])
    c.execute("UPDATE borrow SET returnDate = ? WHERE bookId = ? AND username = ?", params)
    
    conn.commit()
    conn.close()
