from flask_restful import Resource, Api
from sqlalchemy import create_engine
from json import dumps

from app import app

api = Api(app)

e = create_engine('sqlite:///tmp/owl_sys.db')

class GetBooks(Resource):
    def get(self):
        conn = e.connect()
        query = conn.execute('SELECT * FROM book ORDER BY bookId asc')
        books = query.cursor.fetchall()
        return {'books': [dict(zip(tuple (query.keys()), i)) for i in books]}

class GetBorrowedBooks(Resource):
    def get(self):
        conn = e.connect()
        query = conn.execute('SELECT * FROM borrow ORDER BY dueDate asc')
        books = query.cursor.fetchall()
        return {'books': [dict(zip(tuple (query.keys()), i)) for i in books]}

api.add_resource(GetBooks, '/api/books/')
api.add_resource(GetBorrowedBooks, '/api/borrowed/')

if __name__ == '__main__':
    app.run()