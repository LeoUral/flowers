require('dotenv').config();
const express = require('express');
const cors = require('cors')
const MongoClient = require('mongodb').MongoClient;
const PORT = process.env.PORT || 5000;
const DBNAME = process.env.DBNAME || 'flowers';
const URL_MONGODB = process.env.URL_MONGODB || 'mongodb://localhost:27017';
const clientPromise = new MongoClient(URL_MONGODB, { useUnifiedTopology: true, maxPoolSize: 10 }); // подключение MongoDB

const app = express();
app.use(cors());
app.use(express.json());

// объект подключения к MongoDB
app.use(async (req, res, next) => {
    try {
        const client = await clientPromise.connect();
        req.db = client.db(DBNAME)
        next()

    } catch (err) {
        console.log(`Ошибка формирования объекта подключения к MongoDB: `, err);
        next(err)
    }
})

//* функция подключения к MongoDB
const DB = async () => {
    try {
        const client = await clientPromise.connect();
        return client.db(DBNAME);

    } catch (err) {
        console.log('Ошибка при получении объекта DB: ', err);
    }
}


app.use((err, req, res, next) => {
    res.json({ message: err, text: err.message })
})

app.listen(PORT, () => {
    console.log(`SERVER RUN TO PORT: ${PORT}`);
})