// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(document).ready(function() {


$(function () {

  var today = dayjs();
  var currentHour = Number(today.format('H'));

  
  // Displays whatever is stored in local storage
  var atNine = localStorage.getItem('9AM');
  $('#hour-9').children('textarea').text(atNine);

  // Iterates through the hour divs and creates a style class, conditionally dependent the time of day
  ($('.container-lg').children()).each(function () {
    if ($(this).index() < (currentHour - 9)) {
    $(this).addClass("row time-block past");
    } else if ($(this).index() > (currentHour - 9)) {
    $(this).addClass("row time-block future");
    } else {
      $(this).addClass("row time-block present")
    }
  })
  
    
    
    //Retrieves the parent index of button pressed, then turns it into a variable -- from https://stackoverflow.com/questions/10291017/how-to-get-id-of-button-user-just-clicked
    $("button").click(function() {

      //Div index of button clicked
      var buttonIndex = ($(this).parent().index()); 

      //Iterates through the hour divs
      ($('.container-lg').children()).each(function () {
        //Userinput 
        toDo = [$(this).children('textarea').val()];

        //Name of the storage item i.e. 10PM, from HTML
        storageName = [$(this).children('div').text()];
        
        if (buttonIndex === $(this).index()) {
        localStorage.setItem(storageName, toDo);
        // atThisHour = localStorage.getItem(storageName);
        // $(this).children('textarea').text(atThisHour);
        // console.log(atThisHour);
        } 
      })
      
  

  });
    
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?



  //Displays current date in the header of the page.
  $('#currentDay').text(today.format('dddd, MMMM D, YYYY'));
  console.log($('currentDay'));
  
});


});

