1 Create Project Structure

ReactWebApp/
├── frontend/
│   └── ... (React files)
├── backend/
│   ├── my_project/
│   ├── apps/
│   │   ├── chat/
│   │   └── users/
│   ├── manage.py
│   └── requirements.txt
└── README.md

2 Set Up Virtual Environment

cd backend
py -m venv venv
.\venv\Scripts\activate

3 Install Dependencies

pip install django djangorestframework channels celery redis python-dotenv
pip freeze > requirements.txt

4 Create Django Project

django-admin startproject my_project .
py manage.py startapp users apps/users
py manage.py startapp chat apps/chat

5 Database Setup

py manage.py makemigrations
py manage.py migrate
py manage.py createsuperuser

6 Start Redis Server
Download Redis for Windows from: https://github.com/microsoftarchive/redis/releases
Install and start Redis server

7 Start Services

# Terminal 1: Django Server
py manage.py runserver

# Terminal 2: Celery Worker
celery -A my_project worker -l info --pool=solo

8 Frontend Setup

cd frontend
npm install
npm start

9 Environment Variables

Create .env file in backend directory:
DEBUG=True
SECRET_KEY=your-secret-key
DATABASE_URL=sqlite:///db.sqlite3
REDIS_URL=redis://localhost:6379

9 API Endpoints

Authentication: http://localhost:8000/api/auth/
Chat: http://localhost:8000/api/chat/
WebSocket: ws://localhost:8000/ws/chat/

10 Additional Commands

# Create new migrations
py manage.py makemigrations

# Apply migrations
py manage.py migrate

# Create superuser
py manage.py createsuperuser

# Collect static files
py manage.py collectstatic

# Run tests
py manage.py test


11 Common Issues

Redis Connection Error
    Ensure Redis server is running
    Check Redis connection URL

Celery Worker Error
    Ensure Redis is running
    Use --pool=solo on Windows
Database Migration Issues
    Delete db.sqlite3
    Delete migration files
    Rerun migrations

12 Project Structue Details

backend/
├── my_project/
│   ├── __init__.py
│   ├── settings.py
│   ├── urls.py
│   ├── asgi.py
│   └── wsgi.py
├── apps/
│   ├── chat/
│   │   ├── __init__.py
│   │   ├── models.py
│   │   ├── views.py
│   │   └── urls.py
│   └── users/
│       ├── __init__.py
│       ├── models.py
│       ├── views.py
│       └── urls.py
├── manage.py
└── requirements.txt

