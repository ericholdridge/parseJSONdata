var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function () {
  if(xhr.readyState === 4 && xhr.status === 200) {
    var employees = JSON.parse(xhr.responseText);
    var statusHTML = '<ul class="bulleted">';
    for (var i=0; i<employees.length; i += 1) {
      if (employees[i].inoffice === true) {
        statusHTML += '<li class="in">';
      } else {
        statusHTML += '<li class="out">';
      }
      statusHTML += employees[i].name;
      statusHTML += '</li>';
    }
    statusHTML += '</ul>';
    document.getElementById('employeeList').innerHTML = statusHTML;
  }
};
xhr.open('GET', 'data/employees.json');
xhr.send();


// Create a new XMLHttpRequest
var request = new XMLHttpRequest();

request.onreadystatechange = function () {
  if(request.readyState === 4) {
    // Change the json text to a js object
    var rooms = JSON.parse(request.responseText);
    var HTML = '<ul class="rooms">';
    for(var i = 0; i < rooms.length; i++) {
      if(rooms[i].available === false) {
        HTML += '<li class="full">';
      } else {
        HTML += '<li class="empty">';
      }
      HTML += rooms[i].room;
      HTML += '</li>';
    }
    HTML += '</ul>';
    document.getElementById('roomList').innerHTML = HTML;
  }
}

request.open('GET', 'data/rooms.json');
request.send();
