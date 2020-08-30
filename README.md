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

`prod.docker-compose.yml` is a great start to deploy your instance of mat.chalmers.it. To test locally, just run `docker-compose -f prod.docker-compose.yml up --build` Some notes on it, however:

* You do not need to run gamma again when setting up your mat.chalmers.it instance. Gamma is expected to run separately from mat.chalmers.it. 
* Since `prod.docker-compose.yml` is able to run locally, there are some paths that point to localhost. This should probably be changed when deploying in production.

### Database migration 

Right now there's no migration script installed on mat.chalmers.it. You'll have to do it manually. Just don't forget to make a backup before starting. In the future, there should be SQL files for migration in `/database/migration`. 
