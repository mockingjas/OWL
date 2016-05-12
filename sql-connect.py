import sqlite3
import json
import html
import pprint

def executeQuery(db, query, args=()):
    conn = sqlite3.connect(db)
    cur = conn.cursor()
    cur.execute(query, args)
    r = [dict((cur.description[i][0], value) \
               for i, value in enumerate(row)) for row in cur.fetchall()]
    cur.connection.commit()
    cur.connection.close()
    return r



db = 'owl_sys.db'
queryResult = executeQuery(db,'INSERT INTO book (title, genre, author, isbn, avail_flag) VALUES ("C - A Reference Manual", "C++", "Harbison, Samuel; Steele, Guy", "0-13-326232-4", "1");', ());
queryResult = executeQuery(db,'SELECT * FROM book', ());
json_output = json.dumps(queryResult) #CREATE JSON
pprint.pprint(json_output)

#conn = sqlite3.connect(sqlite_file)

#cur = conn.cursor()

#cur.execute('''SELECT * FROM book''')
#r = [dict((cur.description[i][0], value) \
#               for i, value in enumerate(row)) for row in cur.fetchall()]
#cur.connection.close()
#my_query = (r[0] if r else None)

#for row in data:
#    print ("Let's talk about %s." % row)
    
#c.execute('''SELECT * FROM book''')
#data = c.fetchall()

#print (data)
#pprint.pprint(data)


#print(jsonConvert)
#for row in data:
    #print ("Let's talk about %s." % row)
    
#json.dumps(['foo', {'bar': ('baz', None, 1.0, 2)}])
#print (json.dumps("\"foo\bar"))