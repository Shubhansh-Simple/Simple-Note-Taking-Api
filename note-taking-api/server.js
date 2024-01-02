/*
 * ENTRY POINT OF THE SERVER
 */

// Node Packages
import express    from 'express';
import dotenv     from 'dotenv';
import morgan     from 'morgan';

// Local 
import router    from './routes/notesRoutes.js';
import connectDB from './config/db.js';

// SETTING ENVIRONMENT VARIABLE
dotenv.config();

// SETTING PORT
const PORT = process.env.PORT || 5000;
const MODE = process.env.NODE_ENV;

// CONNECTING TO DATABASE
connectDB();

// SETTING EXPRESS
const app = express();


// Top LEVEL Middlewares
if ( MODE === 'development' )
  app.use(morgan('dev'));

app.use(express.json());


/* TESTING */
app.get('/', (_, res)=>{
  res.send('Welcome to Note-Taking-Apis');
});


// Entry Point of our Note-Taking-Api Application
app.use('/api/notes', router);


// Listen to given port with return alert message
app.listen(PORT, 
  () => console.log(`Server running in ${MODE} mode on port ${PORT}`)
);


