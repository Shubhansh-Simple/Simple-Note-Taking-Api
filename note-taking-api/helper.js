/*
 * Contains helper function to make the
 * job much easier
 */


/* Returns todays date with specific format for database */
const getTodayDate = () => {

  const today = new Date();
  const year  = today.getFullYear();
  const month = today.getMonth()+1; 
  const day   = today.getDate();

  return `${year-month-day}`
}

export {getTodayDate};

