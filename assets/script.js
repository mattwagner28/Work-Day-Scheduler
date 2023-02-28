$(function () {

  //Retrieves today's date from day.js
  var today = dayjs();

  //Formats today's date into the current hour as an integer 
  var currentHour = Number(today.format('H'));


  // Iterates through the hour divs by child number
  ($('.container-lg').children()).each(function () {
  
    //Name of the storage item i.e. 10PM, from HTML
    var storageName = [$(this).children('div').text()];

    //Retrieves saved item from storage and displays it on the site for each hour
    var atTime = [localStorage.getItem(storageName)];
    $(this).children('textarea').text(atTime);

    //Adds a class with style in CSS, conditionally dependent the time of day
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
        var toDo = [$(this).children('textarea').val()];

        // //Name of the storage item i.e. 10PM, from HTML
        var storageName = [$(this).children('div').text()];
        
        if (buttonIndex === $(this).index()) {
        localStorage.setItem(storageName, toDo);
        } 
      })
  });
    
  //Displays current date in the header of the page.
  $('#currentDay').text(today.format('dddd, MMMM D, YYYY'));
  console.log($('currentDay'));
  
});



