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

var u = 'https://cookiesurvey.azurewebsites.net/api/cookies';

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
function agreeAll() {
  po.ta = Date.now();
  closeAndSendData();
}
function disagreeAll() {
  po.td = Date.now();
  closeAndSendData();
}

function custom() {
  po.tc = Date.now();
  if ($('#o1').is(":checked"))
  {
    po.o1 = 'Yes';
  }

  if ($('#o2').is(":checked"))
  {
    po.o2 = 'Yes';
  }

  if ($('#o3').is(":checked"))
  {
    po.o3 = 'Yes';
  }

  if ($('#o4').is(":checked"))
  {
    po.o4 = 'Yes';
  }
  closeAndSendData();
}

function closeAndSendData(){
  $('#popupContentFrame' + po.ba)[0].style.display = "none";
  $.post(u, JSON.stringify(po), null,  "json");
}
document.addEventListener("DOMContentLoaded", init);

