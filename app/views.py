import sqlite3
from flask import Flask, render_template, flash, redirect, g
from contextlib import closing

from app import app

def connect_db():
    return sqlite3.connect(app.config['DATABASE'])

def create_db():
    with closing(connect_db()) as db:
        with app.open_resource('schema.sql', mode='r') as f:
            db.cursor().executescript(f.read())
        db.commit()

@app.cli.command('initdb')
def create_db_command():
    """Creates the database tables."""
    create_db()
    print('Initialized the database.')

def get_db():
    """Opens a new database connection if there is none yet for the current application context."""
    if not hasattr(g, 'sqlite_db'):
        g.sqlite_db = connect_db()
    return g.sqlite_db

@app.before_request
def before_request():
    g.db = connect_db()

@app.teardown_request
def teardown_request(exception):
    db = getattr(g, 'db', None)
    if db is not None:
        db.close()

@app.route('/')
def index():
    db = get_db()
    cur = g.db.execute('SELECT * FROM book ORDER BY bookId asc')
    books = cur.fetchall()
    return render_template('index.html', books=books)

# @app.route('/modal')
# def modal():
#   return render_template('modal.html')