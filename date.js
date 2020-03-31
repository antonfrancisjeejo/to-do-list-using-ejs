//module.exports or use exports
exports.getDate = function() {
  //Creates a new date object with current date,month and year
  const today = new Date();
  //Javascript object to convert the date to string
  const options = {
    weekday: "long",
    day: "numeric",
    month: "long"
  };
  //Inbuilt function to convert the date and month to en-us that is Day Month and date
  return today.toLocaleDateString("en-us", options);

};

exports.getDay = function() {
  //Creates a new date object with current date,month and year
  const today = new Date();
  //Javascript object to convert the date to string
  const options = {
    weekday: "long"
  };
  //Inbuilt function to convert the date and month to en-us that is Day Month and date
  return today.toLocaleDateString("en-us", options);

};
