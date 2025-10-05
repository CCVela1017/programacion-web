import time
import psycopg2
import os

def wait_for_db():
    db_host = os.getenv("DB_HOST", "db")
    db_port = os.getenv("DB_PORT", "5432")
    db_name = os.getenv("POSTGRES_DB")
    db_user = os.getenv("POSTGRES_USER")
    db_password = os.getenv("POSTGRES_PASSWORD")

    while True:
        try:
            conn = psycopg2.connect(
                dbname=db_name,
                user=db_user,
                password=db_password,
                host=db_host,
                port=db_port
            )
            conn.close()
            print("db ready")
            break
        except psycopg2.OperationalError:
            print("..waiting for db..")
            time.sleep(2)

if __name__ == "__main__":
    wait_for_db()
