import dotenv from 'dotenv';

export const PORT = 5555;

dotenv.config({
    path:'../.env'
});

export const DBURL = process.env.DBURL;