FROM python:3.11-alpine AS builder

RUN apk add --no-cache build-base postgresql-dev libpq

WORKDIR /app

COPY app/requirements.txt .

RUN pip install --no-cache-dir --prefix=/install -r requirements.txt

FROM python:3.11-alpine

RUN apk add --no-cache libpq

RUN adduser -D appuser
USER appuser

WORKDIR /app

COPY --from=builder /install /usr/local

COPY --chown=appuser:appuser app/ /app/

EXPOSE 8000

CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]
