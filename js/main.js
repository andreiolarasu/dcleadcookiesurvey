var po = {
  // ba: null,
  // tj: null,
  // ty: null,
  // tn: null,
  // tr: null,
  // ta: null,
  // td: null,
  // tc: null
};

const u = 'https://cookiesurvey.azurewebsites.net/api/cookies';

//initializing the batch, the joining timestamp, and showing the correct popup
function init() {
  po.ba = (Math.floor(Math.random() * 2) === 0) ? 'A' : 'B';
  po.tj = Date.now();
  var batchCodeToBeRemoved = po.ba == 'A' ? 'B' : 'A';
  var popup = document.querySelector('#popupContentFrame' + batchCodeToBeRemoved);
  popup.parentNode.removeChild(popup);
  $('#popupContentFrame' + po.ba)[0].style.display = "block";
}

function yes() {
  po.ty = Date.now();
  closeAndSendData();
}

function no() {
  po.tn = Date.now();
  closeAndSendData();
}

function read() {
  po.tr = Date.now();
  $('#defaultFrame' + po.ba)[0].style.display = "none";
  $('#customFrame' + po.ba)[0].style.display = "block";
}

function checkCheckboxes(){
  var batch = 'a';
  if(po.ba !== 'A')
    batch = 'b';
  if ($('#o' + batch + '1').is(":checked"))
  {
    po.o1 = 'Yes';
  }

  if ($('#o' + batch + '2').is(":checked"))
  {
    po.o2 = 'Yes';
  }

  if ($('#o' + batch + '3').is(":checked"))
  {
    po.o3 = 'Yes';
  }

  if ($('#o' + batch + '4').is(":checked"))
  {
    po.o4 = 'Yes';
  }
}

function agreeAll() {
  po.ta = Date.now();
  checkCheckboxes();
  closeAndSendData();
}

function disagreeAll() {
  po.td = Date.now();
  checkCheckboxes();
  closeAndSendData();
}

function custom() {
  po.tc = Date.now();
  checkCheckboxes();
  closeAndSendData();
}

function closeAndSendData(){
  $('#popupContentFrame' + po.ba)[0].style.display = "none";
  $.post(u, JSON.stringify(po), null,  "json");
}
document.addEventListener("DOMContentLoaded", init);

