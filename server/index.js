require('dotenv').config();
const express = require('express');
const cors = require('cors')
const MongoClient = require('mongodb').MongoClient;
const router = require('./routes/index');
const errorHandler = require('./middleware/ErrorHandlingMiddleware');

const PORT = process.env.PORT || 5000;
const DB_NAME = process.env.DB_NAME || 'flowers';
const URL_MONGODB = process.env.URL_MONGODB || 'mongodb://localhost:27017';
const clientPromise = new MongoClient(URL_MONGODB, { useUnifiedTopology: true, maxPoolSize: 10 }); // подключение MongoDB

const ApiError = require('./error/ApiError')

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api', router);

//* объект подключения к MongoDB
app.use(async (req, res, next) => {
    try {
        const client = await clientPromise.connect();
        req.db = client.db(DB_NAME)
        next()

    } catch (err) {
        console.log(`Ошибка формирования объекта подключения к MongoDB: `, err);
        next(ApiError.internal('Нет подключения к DB'))
    }
})

//* функция подключения к MongoDB
const DB = async () => {
    try {
        const client = await clientPromise.connect();
        return client.db(DB_NAME);

    } catch (err) {
        console.log('Ошибка при получении объекта DB: ', err);
    }
}






//* Обаботка ошибок
app.use(errorHandler)

app.listen(PORT, () => {
    console.log(`SERVER RUN TO PORT: ${PORT}`);
})