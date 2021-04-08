const Redis = require("ioredis");

const REDIS_HOST = process.env.REDIS_HOST || "mat-redis";
const REDIS_PORT = process.env.REIDS_PORT || 6379;

const getRedisClient = () =>
    new Redis("redis://" + REDIS_HOST + ":" + REDIS_PORT);

module.exports = { getRedisClient };
