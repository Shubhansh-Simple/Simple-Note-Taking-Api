/*
 * ENTRY POINT OF THE SERVER
 */

// Node Packages
import express    from 'express';
import dotenv     from 'dotenv';
import bodyParser from 'body-parser';
import morgan     from 'morgan';

// Local 
import router    from './routes/notesRoutes.js';
import connectDB from './config/db.js';

// SETTING ENVIRONMENT VARIABLE
dotenv.config();

// SETTING PORT
const port = process.env.PORT || 5000;

// CONNECTING TO DATABASE
connectDB();

// SETTING EXPRESS
const app = express();


// Top LEVEL Middlewares
app.use(morgan('dev'));
app.use(bodyParser.json());


/* TESTING */
app.get('/', (_, res)=>{
  res.send('Welcome to Note-Taking-Apis');
});


// Entry Point of our Note-Taking-Api Application
app.use('/api/notes', router);


// Listen to given port with return alert message
app.listen(port, 
  () => console.log(`Server running on port ${port}`)
);


