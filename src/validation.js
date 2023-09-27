// kiểm tra dữ liệu người dùng nhập vào
function checkRong(value, idWarning, mess) {
  var domTheSpan = document.getElementById(idWarning);
  // kiểm tra xem tham số value có rỗng hay không
  if (value == "") {
    console.log("Input này rỗng");
    // xuất hiện đoạn nội dung cảnh báo khi người dùng lỗi
    domTheSpan.innerHTML = mess;
    return false;
  } else {
    console.log("Input này bth");
    // nội dung rỗng vào thể span khi người dùng không còn lỗi
    domTheSpan.innerHTML = "";
    return true;
  }
}

// hàm giúp kiểm tra độ dài kí tự
function checkDoDaiKyTu(value, min, max, idWarning, mess) {
  var domTheSpan = document.getElementById(idWarning);
  //kiểm tra
  if (value.length < min || value.length > max) {
    //sai
    domTheSpan.innerHTML = mess;
    return false;
  } else {
    //đúng
    domTheSpan.innerHTML = "";
    return true;
  }
}

// hàm giúp kiểm tra email
function checkEmail(email, idWarning, mess) {
  var domTheSpan = document.getElementById(idWarning);
  // lưu trữ đoạn mã regex giúp lưu trữ dữ liệu
  var regexEmail =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i;
  //regex để kiểm tra email hợp lệ hay không
  // dùng dữ liệu kết hợp cùng phương thức match để kiểm tra email có hợp lệ không
  var isValid = regexEmail.test(email);
  console.log(isValid);
  if (isValid) {
    //Đúng
    domTheSpan.innerHTML = "";
    return true;
  } else {
    // sai
    domTheSpan.innerHTML = mess;
    return false;
  }
}

//hàm kiểm tra xem dữ liệu có phải là chữ hay không
function checkstring(value, idWarning, mess) {
  var domTheSpan = document.getElementById(idWarning);
  for (var i = 0; i < value.length; i++) {
    if (isNaN(value[i])) {
      //Đúng
      domTheSpan.innerHTML = "";
      return true;
    } else {
      //Sai
      domTheSpan.innerHTML = mess;
      return false;
    }
  }
}

//hàm kiểm tra xem dữ liệu có phải là số hay không
function checkNumber(value, idWarning, mess) {
  var domTheSpan = document.getElementById(idWarning);
  //reget kiểm tra số
  var regexNumber = /^\d+$/;
  // kiểm tra với regex
  var isValid = regexNumber.test(value);
  console.log(isValid);
  if (isValid) {
    //Đúng
    domTheSpan.innerHTML = "";
    return true;
  } else {
    //Sai
    domTheSpan.innerHTML = mess;
    return false;
  }
}

// hàm kiểm tra người dùng có chọn chức vụ hay không
function checkPosition(idSelect, idWarning, mess) {
  var domTheSpan = document.getElementById(idWarning);
  var domSelect = document.getElementById(idSelect).selectedIndex;
  console.log(domSelect);

  // xử lý dom select mà có giá trị 0 nghĩa là người dùng không chọn sẽ show ra lỗi
  if (domSelect == 0) {
    //sai
    domTheSpan.innerHTML = mess;
    return false;
  } else {
    //Đúng
    domTheSpan.innerHTML = "";
    return true;
  }
}

// hàm kiểm tra mật khẩu
function isPassword(value, idWarning, mess) {
  var domTheSpan = document.getElementById(idWarning);
  var regex =
    /^(?=.*[A-Z])(?=.*[!&%\/()=\?\^\*\+\]\[#><;:,\._-|@])(?=.*[0-9])(?=.*[a-z]).{6,10}$/;
  // kiểm tra
  var isValid = regex.test(value);
  console.log(isValid);
  if (isValid) {
    //Đúng
    domTheSpan.innerHTML = "";
    return true;
  } else {
    //Sai
    domTheSpan.innerHTML = mess;
    return false;
  }
}
// hàm kiểm giờ làm
function checkWorkDuringMonths(value, idWarning, mess) {
  var domTheSpan = document.getElementById(idWarning);
  var regex = /^\d+$/;
  // kiểm tra
  if (regex.test(value)) {
    if (value < 80 || value > 200) {
      domTheSpan.innerHTML = mess;
      return false;
    } else {
      domTheSpan.innerHTML = "";
      return true;
    }
  } else {
    //Sai
    domTheSpan.innerHTML = mess;
    return false;
  }
}

// hàm kiểm tra lương
function checkBasicSalary(value, idWarning, mess) {
  var domTheSpan = document.getElementById(idWarning);
  var regex = /^\d+$/; // Biểu thức chính quy kiểm tra chuỗi là một số hoàn toàn
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
