FROM python:3.11-slim

RUN adduser --disabled-password --gecos '' appuser
USER appuser

WORKDIR /app

COPY --chown=appuser:appuser requirements.txt /app/

RUN pip install --no-cache-dir -r requirements.txt

COPY --chown=appuser:appuser . /app/

CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]
