from app import app
from flask import (
    render_template,
    url_for,
    redirect,
    request,
    make_response,
    abort,
    jsonify,
    session,
    flash)

@app.route('/')
def index():
    return render_template('index.html')