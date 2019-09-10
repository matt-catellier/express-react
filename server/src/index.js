import 'dotenv/config';
import express from 'express';
import routes from './routes'

console.log('src/index.js runing in ' + process.env.ENVIRONMENT + ' mode');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/example', routes.example)

app.get('/', (req, res) => {
  res.send('Hello world')
});

app.listen(process.env.PORT, () => {
  console.log(`App listening on port ${process.env.PORT}`)
})



