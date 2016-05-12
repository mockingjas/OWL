import sqlite3
import json

sqlite_file = 'owl_sys.db'
conn = sqlite3.connect(sqlite_file)

c = conn.cursor()

c.execute('''SELECT username FROM user''')
data = c.fetchall()

for row in data:
    print ("Let's talk about %s." % row)
    
c.execute('''SELECT bookId FROM book''')
data = c.fetchall()

for row in data:
    print ("Let's talk about %s." % row)
    
json.dumps(['foo', {'bar': ('baz', None, 1.0, 2)}])
print (json.dumps("\"foo\bar"))