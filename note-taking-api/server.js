/*
 * ENTRY POINT OF THE SERVER
 */

import express    from 'express';
import dotenv     from 'dotenv';
import bodyParser from 'body-parser';
import morgan     from 'morgan';

// Local 
import router from './routes/notesRoutes.js';

// ENVIRONMENT VARIABLE
dotenv.config();

// Setting Port
const port = process.env.PORT || 5000;

// Setting express
const app = express();


// Top LEVEL Middlewares
app.use(morgan('dev'));
app.use(bodyParser.json());


/* TESTING */
app.get('/', (req, res)=>{
  res.send('Welcome to Note-Taking-Apis');
});


// Entry Point of our Note-Taking-Api Application
app.use('/api', router);


// Listen to given port with return alert message
app.listen(port, 
  () => console.log(`Server running on port ${port}`)
);


