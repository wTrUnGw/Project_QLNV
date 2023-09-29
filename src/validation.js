// kiểm tra dữ liệu người dùng nhập vào
function checkRong(value, idWarning, mess) {
  var domTheSpan = document.getElementById(idWarning);
  if (value == "") {
    console.log("Input này rỗng");
    domTheSpan.innerHTML = mess;
    return false;
  } else {
    console.log("Input này bth");
    domTheSpan.innerHTML = "";
    return true;
  }
}

// hàm giúp kiểm tra độ dài kí tự
function checkDoDaiKyTu(value, min, max, idWarning, mess) {
  var domTheSpan = document.getElementById(idWarning);
  if (value.length < min || value.length > max) {
    domTheSpan.innerHTML = mess;
    return false;
  } else {
    domTheSpan.innerHTML = "";
    return true;
  }
}

// hàm giúp kiểm tra email
function checkEmail(email, idWarning, mess) {
  var domTheSpan = document.getElementById(idWarning);
  var regexEmail =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i;
  var isValid = regexEmail.test(email);
  console.log(isValid);
  if (isValid) {
    domTheSpan.innerHTML = "";
    return true;
  } else {
    domTheSpan.innerHTML = mess;
    return false;
  }
}

//hàm kiểm tra xem dữ liệu có phải là chữ hay không
function checkstring(value, idWarning, mess) {
  var domTheSpan = document.getElementById(idWarning);
  for (var i = 0; i < value.length; i++) {
    if (isNaN(value[i])) {
      domTheSpan.innerHTML = "";
      return true;
    } else {
      domTheSpan.innerHTML = mess;
      return false;
    }
  }
}

//hàm kiểm tra xem dữ liệu có phải là số hay không
function checkNumber(value, idWarning, mess) {
  var domTheSpan = document.getElementById(idWarning);
  var regexNumber = /^\d+$/;
  var isValid = regexNumber.test(value);
  console.log(isValid);
  if (isValid) {
    domTheSpan.innerHTML = "";
    return true;
  } else {
    domTheSpan.innerHTML = mess;
    return false;
  }
}

// hàm kiểm tra người dùng có chọn chức vụ hay không
function checkPosition(idSelect, idWarning, mess) {
  var domTheSpan = document.getElementById(idWarning);
  var domSelect = document.getElementById(idSelect).selectedIndex;
  console.log(domSelect);
  if (domSelect == 0) {
    domTheSpan.innerHTML = mess;
    return false;
  } else {
    domTheSpan.innerHTML = "";
    return true;
  }
}

// hàm kiểm tra mật khẩu
function isPassword(value, idWarning, mess) {
  var domTheSpan = document.getElementById(idWarning);
  var regex =
    /^(?=.*[A-Z])(?=.*[!&%\/()=\?\^\*\+\]\[#><;:,\._-|@])(?=.*[0-9])(?=.*[a-z]).{6,10}$/;
  var isValid = regex.test(value);
  console.log(isValid);
  if (isValid) {
    domTheSpan.innerHTML = "";
    return true;
  } else {
    domTheSpan.innerHTML = mess;
    return false;
  }
}
// hàm kiểm giờ làm
function checkWorkDuringMonths(value, idWarning, mess) {
  var domTheSpan = document.getElementById(idWarning);
  var regex = /^\d+$/;
  if (regex.test(value)) {
    if (value < 80 || value > 200) {
      domTheSpan.innerHTML = mess;
      return false;
    } else {
      domTheSpan.innerHTML = "";
      return true;
    }
  } else {
    domTheSpan.innerHTML = mess;
    return false;
  }
}

// hàm kiểm tra lương
function checkBasicSalary(value, idWarning, mess) {
  var domTheSpan = document.getElementById(idWarning);
  var regex = /^\d+$/;
  if (regex.test(value)) {
    if (value < 1000000 || value > 20000000) {
      domTheSpan.innerHTML = mess;
      return false;
    } else {
      domTheSpan.innerHTML = "";
      return true;
    }
  } else {
    domTheSpan.innerHTML = mess;
    return false;
  }
}
