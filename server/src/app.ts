const express=require('express');
const cors=require('cors');
const connectToDB=require('../db.js')
const dotenv=require('dotenv')

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());
dotenv.config();

connectToDB()

app.get('/', (req, res) => {
  res.json({message:"Backend is connected to frontend"})
});

app.listen(port, () => {
return console.log(`express server is listening at http://localhost:${port}`);
});