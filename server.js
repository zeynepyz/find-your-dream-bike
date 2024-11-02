const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const app = express();
const PORT = 3000;

dotenv.config();  // .env dosyasını yükler

const mongoURI = process.env.MONGO_URI;

// MongoDBye bağlan
mongoose.connect(mongoURI, {
    serverApi: {
      version: '1',
      strict: true,
      deprecationErrors: true,
    }
  }).then(() => {
    console.log("MongoDB bağlantısı başarılı!");
  }).catch((err) => {
    console.error("MongoDB bağlantı hatası:", err);
  });

// JSON verilerini işlemek için bir middleware
app.use(express.json());