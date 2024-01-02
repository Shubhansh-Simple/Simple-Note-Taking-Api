/*
 * Upload local data to database
 * by running the following command
 * Run this file using "node seeder.js"
 */

// Node Package
import dotenv from 'dotenv';

// Database Model
import Notes     from './models/notesModels.js';
import connectDB from './config/db.js';

// Local 
import notes     from './data.js';

// Connect to database
dotenv.config();
connectDB();


/*
 * First, Deletes all records in 'notes' table 
 * then inserted our local data to it.
 */
const importData = async () => {
  try{
    /* First delete all records of Notes tables */
    await Notes.deleteMany();
    console.log('EXISTING DATA DELETED SUCCESSFULLY!');

    /* Then insert all given records to Notes tables */
    await Notes.insertMany(notes);
    console.log('DATE IMPORTED TO DATABASE!');

    process.exit();
  }
  catch(err){
    console.error(err);
    process.exit(1);
  }
}

importData();




