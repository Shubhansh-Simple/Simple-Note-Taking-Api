/*
 * Contains sample data for the application
 */

/*
 * Fields of our "notes" table in note-taking-db database
 * _id          AUTO-CREATED-BY-MONGO-DB
 * title
 * description
 * created_at   CREATED-BY-MONGO-DB
 * updated_at   CREATED-BY-MONGO-DB
 */

const notes = [
  {
    title : 'Canvas React App (accomplish)', 
    description : 'Succcessfully able to add the append feature. Now user able to add as many text as he/she wants with their own choosing styles.',
  },
  {
    title : 'Canvas React App (future)', 
    description : 'Next step is to add an update featuer for the existing text on the screen.We can update any text with their styles.',
  },
  {
    title : 'Note-Taking-App (sample database)', 
    description : 'We adding this file for creating a local database like data. We can test our api using this files data and test on it using Express.',
  },

]

export default notes;
