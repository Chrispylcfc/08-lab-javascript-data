(function(){
  let ol = document.getElementById("demo");

  // creates a JavaScript object by parsing the JSON-formatted string from the file
  let obj = JSON.parse(jsonString);
  console.log(obj);
 
  /*
    EXERCISE 01:
    Rewrite this to make it *loop* through all the lecturers' names. 
    (Note the ES6 'template literal' syntax):
  */ 
    
  for (let i = 0; i < obj.lecturers.length; i++) {
    let name = `${obj.lecturers[i].firstName} ${obj.lecturers[i].lastName} ${obj.lecturers[i].roomNumber}`;
    let li = document.createElement("li");
    li.appendChild(document.createTextNode(name));
    ol.appendChild(li);
  }
   
  /*
    EXERCISE 02:
    Once you have looped through all the data, present the 
    results on the page, styled with CSS.
  */
}());
