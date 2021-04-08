const pg = require("pg");

const DB_HOST = process.env.DB_HOST || "mat-db";
const DB_PORT = process.env.DB_PORT || 5432;
const DB_USER = process.env.DB_USER || "user";
const DB_DATABASE = process.env.DB_DATABASE || "postgres";
const DB_PASSWORD = process.env.DB_PASSWORD || "password";

const getQuery = () => {
    const pool = new pg.Pool({
        user: DB_USER,
        database: DB_DATABASE,
        password: DB_PASSWORD,
        host: DB_HOST,
        port: DB_PORT
    });

    return (sql, values, convertResult) =>
        new Promise((resolve, reject) => {
            pool.query(sql, values, (errors, results) => {
                if (errors) {
                    reject(errors);
                } else {
                    resolve(convertResult(results));
                }
            });
        });
};
module.exports = { getQuery };
