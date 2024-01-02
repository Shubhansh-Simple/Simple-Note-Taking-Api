import express    from 'express';
import dotenv     from 'dotenv';
import bodyParser from 'body-parser';

// Local data
import notes from './data.js';

dotenv.config();
const port = process.env.PORT || 5000;

const app = express();

const jsonParser       = bodyParser.json();
const urlencodedParser = bodyParser.urlencoded({extended:false});

/* Returns todays date with specific format */
const getTodayDate = () => {

  const today = new Date();
  const year  = today.getFullYear();
  const month = today.getMonth()+1; 
  const day   = today.getDate();

  return `${year-month-day}`
}


/* Returning string on get request
  * at this endpoint */
app.get('/', (req, res)=>{
  res.send('<h1>API is running...</h1>');
});


/* 
 * Method      - GET  
 * Endpoints   - /api/notes 
 * Description - Returns list of notes
 */
app.get('/api/notes', (req, res) => {
  res.json(notes);
});


/* 
 * Method      - GET  
 * Endpoints   - /api/notes/:id
 * Description - Returns note with matched id
 */
app.get('/api/notes/:id', (req,res) => {
  const note = notes.find(n => n._id === req.params.id);
  res.json(note);
})

/*
 * Method      - POST
 * Endpoints   - /api/notes/
 * Description - Create a note in database
 */
app.post('/api/notes/', jsonParser, (req,res) => {
  const body = req.body;
  console.log('Post data - ', body, typeof(body));
  res.json(notes);
})

/*
 * Method      - UPDATE
 * Endpoints   - /api/notes/:id
 * Description - Update note of given id
 */


/* 
 * Method      - DELETE  
 * Endpoints   - /api/notes/:id
 * Description - Delete note of given id
 */
app.delete('/api/notes/:id', (req, res) => {
  const updatedNotes = notes.filter(note => note._id !== req.params.id);
  res.json(updatedNotes);
})




// Listen to given port with return alert message
app.listen(port, () => console.log(`Server running on port ${port}`));


