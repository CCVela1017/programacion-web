# Assessment 3: Secret messages (Containers)

## Excecution Instructions:

## 1. Clone the repo
```bash
  git@github.com:CCVela1017/programacion-web.git
```
## 2. Create ignored environment files

- Backend .env:
  ```dotenv
  DEBUG=True
  SECRET_KEY=supersecretkey
  REDIS_URL=redis://redis:6379/0
  DJANGO_ALLOWED_HOSTS=*
  ```
- Frontend .env:
  ```dotenv
  VITE_API_URL=http://localhost:8000/api
  VITE_APP_NAME=SecretManager
  ```

## 2. Build the docker container
```bash
  docker compose build
```

## 3. Start the docker container
```bash
  docker compose up
```

## 4. Open secrets website on [localhost:5173](http://localhost:5173/)

## 5. Secrets API running on [localhost:8000/api](http://127.0.0.1:8000/api/)
  - To create a secret, submit as POST method on the url: [localhost:8000/api/create/](http://127.0.0.1:8000/api/create/)
    - Sample JSON body:
      ```json
      {
        "value": "My Secret String"
      }
      ```
  - To retrieve or show a secret, call via GET method the url: [localhost:8000/api/reveal/](http://127.0.0.1:8000/api/create/)
    - Url Parameter: /?key=mysecretgeneratedkey123

## 6. Show Redis database values

 a. After running the container, visit Redis Insight visualization page at: [localhost:5540](http://localhost:5540/)

 b. Create a new Redis connection with the following parameters:
  - Host: redis
  - Port: 6379

 c. The data will be showing on the page wit a "key: value" format.

## 7. Clean containers
```bash
  docker compose down -v
```