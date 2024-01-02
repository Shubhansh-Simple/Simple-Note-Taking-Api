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
    type : String,
    require : true,
  },

  description : {
    type : String,
    require : true,
  }
},
  /* To add the created_at & updated_at  */
  {
  timestamps : true,
});

const Notes = mongoose.model('Notes', notesSchema);

export default Notes;



