const joinList = function(array){
  let message = '';

  //iterate through the array
  array.forEach(element => {
    message = message + element + ', ';
  });

  //remove final space + comma 
  message = message.slice(0, -2);

  //add a period at the end
  // message = message + '.';

  return message;
}