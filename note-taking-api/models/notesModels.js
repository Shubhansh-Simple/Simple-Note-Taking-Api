import mongoose from "mongoose";

/*
 * Fields of our "notes" table in note-taking-db database
 * _id          AUTO-CREATED-BY-MONGO-DB
 * title
 * description
 * createdAt   CREATED-BY-MONGO-DB
 * updatedAt   CREATED-BY-MONGO-DB
 */

/* "notes" table blueprint as javascript object  */
const notesSchema = new mongoose.Schema({

  title : {
    type     : String,
    required  : [true,'Title is required'],
    minLength : [3, 'Title is too short'],
    maxLength : [25, 'Title is too long'],
  },

  description : {
    type : String,
    required : [true,'Description is required'],
    minLength : [5, 'Description is too short'],
    maxLength : [500, 'Description is too long'],
  }
},
  /* To add the created_at & updated_at  */
  {
  timestamps : true,
});

const Notes = mongoose.model('Notes', notesSchema);

export default Notes;



