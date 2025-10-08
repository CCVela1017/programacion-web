import time
import psycopg2
import os

DB_HOST = os.getenv("DJANGO_DB_HOST")
DB_NAME = os.getenv("DJANGO_DB_NAME")
DB_USER = os.getenv("DJANGO_DB_USER")
DB_PASS = os.getenv("DJANGO_DB_PASSWORD")

while True:
    try:
        conn = psycopg2.connect(
            dbname=DB_NAME, user=DB_USER, password=DB_PASS, host=DB_HOST
        )
        conn.close()
        print("database ready")
        break
    except psycopg2.OperationalError:
        print("waiting for database...")
        time.sleep(2)
        