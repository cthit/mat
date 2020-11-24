# [mat.chalmers.it](https://mat.chalmers.it)

Your fast track to restaurants that's nearby from Chalmers Campus Johanneberg and Campus Lindholmen!

mat.chalmers.it gives IT students the ability to review restaurants and voice their opinion to let other people know about where you can get the best food. 

## Development

The easiest way to get started is via docker!

`docker-compose up --build`

`docker-compose.yml` sets up the following dependencies:

* Frontend and backend with hot reloading support.
* Postgres database for the backend.
* Redis instance for caching and saving of user sessions.
* The frontend, backend, a database, and a Redis instance for [Gamma](https://github.com/cthit/gamma).

### Adding or updating dependencies

Docker can be unforgiving when trying to update dependencies. 

* Start with updating your dependencies in one of the package.json, either the one for frontend or the one for the backend.
* Run `yarn install`.
* Run `docker-compose rm`. This will remove your volumes and any previously saved data.
* Run `docker-compose build --force-rm --no-cache mat-frontend mat-backend`.

After that, you can just run `docker-compose up` to get started again.

### Form validation

If you have to change form validation, do not forget to update it both in the frontend and the backend. In the frontend it's in `frontend/src/validation`, and in the backend it's in `backend/src/controllers/validation`. Note that `text` and error messages are not necessary in the backend validation.

## Deployment

What's needed to run mat in production is:

- Frontend
- Backend
- PostgreSQL database
- Redis
- Reverse proxy (to run the frontend and backend from the same port)

### Database migration 

Right now there's no migration script installed on mat.chalmers.it. You'll have to do it manually. Just don't forget to make a backup before starting. In the future, there should be SQL files for migration in `/database/migration`. 

### Environment variables 

The frontend have as of right now the gamma url hardcoded to https://gamma.chalmers.it. 

Environment variables for the backend:

- DB_HOST, DB_PORT, DB_USER, DB_DATABASE, DB_PASSWORD: Connecting to a PostgreSQL database.
- REDIS_HOST, REDIS_PORT: Connecting to a redis instance.
- MAT_COOKIE_NAME, MAT_COOKIE_SECRET, MAT_COOKIE_AGE, MAT_COOKIE_DOMAIN: Cookie settings. See `session.js` for default settings.
- MAT_PORT: Port that the backend will run on. Default is 8080.
- MAT_GAMMA_AUTHORITY: The name of the gamma authority. Default is admin.