const [date, time] = formatDate(new Date()).split(' ');

// ✅ Set Date input Value
const dateInput = document.getElementById('DATE_FROM');
dateInput.value = date;

// ✅ Set time input value
const timeInput = document.getElementById('TIME_FROM');
timeInput.value = time;

// 👇️ Format Date as yyyy-mm-dd hh:mm:ss

function padTo2Digits(num) {
  return num.toString().padStart(2, '0');
}

function formatDate(date) {
  return (
    [
      date.getFullYear(),
      padTo2Digits(date.getMonth() + 1),
      padTo2Digits(date.getDate()),
    ].join('-') +
    ' ' +
    [
      padTo2Digits(date.getHours()),
      padTo2Digits(date.getMinutes()),
      // padTo2Digits(date.getSeconds()),  // 👈️ can also add seconds
    ].join(':')
  );
}

function Confirm(msg) {
    var confirm_value = document.createElement("INPUT");
    confirm_value.type = "hidden";
    confirm_value.name = "confirm_value";
    if (confirm("Do you want to " + msg + " data?")) {
        confirm_value.value = "Yes";
    } else {
        confirm_value.value = "No";
    }
    document.forms[0].appendChild(confirm_value);
}