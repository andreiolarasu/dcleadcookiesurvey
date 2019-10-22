function timer() {
  //    todo: start timer when the user arrived on the page to calculate the time it takes to press each button
  //    todo alternative: save timestamp for each click and send it to the API
}
function yes() {
  alert("Yes");
  $.post("http://cookiesurvey.azurewebsites.net/api/cookies", {fromSite : "fromSitedata", otherStuff: "randomStuff"}, null,  "json");
  //    todo: code for saving the default YES preferences
}
function no() {
  alert("No");
  //    todo: code for saving the default NO preferences
}
function read() {
  $('#defaultFrame')[0].style.display = "none";
  $('#customFrame')[0].style.display = "block";
  //    todo: code for the hiding defaultFrame and showing customFrame
}
function agreeAll() {
  //    todo: code for saving all the preferences as YES
}
function disagreeAll() {
  //    todo: code for saving all the preferences as NO
}
function custom() {
  //    todo: code for saving the CUSTOM preferences
}
function save() {
  //    todo: code for saving preferences and making the API call
  //    todo: getting the values of the checkboxes
}
