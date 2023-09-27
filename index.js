var listStaff = new ListStaff();
getLocalStorage();
function getID(id) {
  return document.getElementById(id);
}
function getInfoStaff() {
  var _accountS = getID("tknv").value;
  var _nameS = getID("name").value;
  var _emailS = getID("email").value;
  var _passwordS = getID("password").value;
  var _workDayS = getID("datepicker").value;
  var _basicSalaryS = getID("luongCB").value;
  var _positionS = getID("chucvu").value;
  var _workDuringMonthS = getID("gioLam").value;

  checkRong(_accountS, "tbTKNV", "Vui lòng không bỏ trống");
  checkEmail(_emailS, "tbEmail", "Vui lòng nhập đúng email");
  checkNumber(_basicSalaryS, "tbLuongCB", "Vui lòng nhập số");
  checkPosition("chucvu", "tbChucVu", "Vui lòng chọn chức vụ");
  isPassword(
    _passwordS,
    "tbMatKhau",
    "Vui lòng nhập mật khẩu chứa ít nhất 1 ký tự số, 1 ký tự in hoa, 1 ký tự đặc biệt"
  );
  checkstring(_nameS, "tbTen", "Vui lòng nhập kí tự");
  checkWorkDuringMonths(
    _workDuringMonthS,
    "tbGiolam",
    " Vui lòng nhập số ngày làm"
  );
  checkBasicSalary(
    _basicSalaryS,
    "tbLuongCB",
    "Vui lòng nhập đúng số lương từ 1000000 -> 20000000"
  );

  var isValid = true;

  isValid &=
    checkRong(_accountS, "tbTKNV", "Vui lòng không bỏ trống") &&
    checkDoDaiKyTu(_accountS, 4, 6, "tbTKNV", "Vui lòng nhập từ 4 đến 6 kí tự");
  console.log(isValid);

  isValid &=
    checkRong(_nameS, "tbTen", "Vui lòng không bỏ trống") &&
    checkstring(_nameS, "tbTen", "Vui lòng nhập kí tự");

  isValid &=
    checkRong(_emailS, "tbEmail", "Vui lòng không bỏ trống") &&
    checkEmail(_emailS, "tbEmail", "Vui lòng nhập đúng email");

  isValid &=
    checkRong(_passwordS, "tbMatKhau", "Vui lòng không bỏ trống") &&
    checkDoDaiKyTu(
      _passwordS,
      6,
      10,
      "tbMatKhau",
      "Vui lòng nhập từ 6 đến 10 kí tự"
    ) &&
    isPassword(
      _passwordS,
      "tbMatKhau",
      "Vui lòng nhập mật khẩu chứa ít nhất 1 ký tự số, 1 ký tự in hoa, 1 ký tự đặc biệt"
    );

  isValid &= checkRong(_workDayS, "tbNgay", "Vui lòng không bỏ trống");

  isValid &=
    checkRong(_basicSalaryS, "tbLuongCB", "Vui lòng không bỏ trống") &&
    checkNumber(_basicSalaryS, "tbLuongCB", "Vui lòng nhập số") &&
    checkBasicSalary(
      _basicSalaryS,
      "tbLuongCB",
      "Vui lòng nhập đúng số lương từ 1000000 -> 20000000"
    );

  isValid &=
    checkRong(_workDuringMonthS, "tbGiolam", "Vui lòng không bỏ trống") &&
    checkNumber(_workDuringMonthS, "tbGiolam", "Vui lòng nhập số") &&
    checkWorkDuringMonths(
      _workDuringMonthS,
      "tbGiolam",
      " Vui lòng nhập số giờ làm từ 80 - 200 giờ"
    );
  if (!isValid) {
    return null;
  }

  var sf = new Staff(
    _accountS,
    _nameS,
    _emailS,
    _passwordS,
    _workDayS,
    _basicSalaryS,
    _positionS,
    _workDuringMonthS
  );
  sf.totalSalary();
  sf.rankOfStaff();
  return sf;
}
function addStaff() {
  var sf = getInfoStaff();
  if (sf) {
    listStaff.addStaff(sf);
    renderListStaff(listStaff.arr);

    setLocalStorage();
    getLocalStorage();
  }
}

function renderListStaff(data) {
  var content = "";
  for (var i = 0; i < data.length; i++) {
    var sf = data[i];
    content += `
    <tr>
    <td>${sf.accountS}</td>
    <td>${sf.nameS} </td>
    <td>${sf.emailS} </td>
    <td>${sf.workDayS} </td>
    <td>${sf.positionS} </td>
    <td> ${sf.totalSalary}</td>
    <td> ${sf.rankOfStaff}</td>

    <td> 
    <button class="btn btn-danger" onclick="fixStaff('${sf.accountS}')"> Fix </button>
    <button class="btn btn-success" onclick="deleteStaff('${sf.accountS}')"> Delete </button>
    </td>
  </tr>
    `;
  }

  getID("tableDanhSach").innerHTML = content;
}
function fixStaff(accountS) {
  var sf = listStaff._getinfoStaff(accountS);
  if (sf) {
    getID("tknv").value = sf.accountS;

    getID("tknv").disabled = true;
    getID("name").value = sf.nameS;
    getID("email").value = sf.emailS;
    getID("password").value = sf.passwordS;
    getID("datepicker").value = sf.workDayS;
    getID("luongCB").value = sf.basicSalaryS;
    getID("chucvu").value = sf.positionS;
    getID("gioLam").value = sf.workDuringMonthS;
  }
}

function deleteStaff(accountS) {
  listStaff.deleteStaff(accountS);
  console.log(listStaff.arr);

  renderListStaff(listStaff.arr);
  setLocalStorage();
}
function updateStaff() {
  var sf = getInfoStaff();
  if (sf) {
    listStaff.updateStaff(sf);
    renderListStaff(listStaff.arr);
    setLocalStorage();
  }
}

getID("searchName").addEventListener("keyup", function () {
  var keyword = getID("searchName").value;
  var findArr = listStaff._findStaff(keyword);
  console.log(keyword);
  renderListStaff(findArr);
});

function setLocalStorage() {
  // localStorge là măc định của html5, setItem Với key là tên biến để ta truy xuất và value là giá trị biến truyền vào.
  // Chú ý: LocalStorage chỉ cho phép chúng ta lưu biến với kiểu String
  // JSON.stringify(): chuyển về chuỗi
  var dataString = JSON.stringify(listStaff.arr);
  //lưu xuống localStorage
  localStorage.setItem("ListStaff", dataString);
}

function getLocalStorage() {
  if (localStorage.getItem("ListStaff")) {
    var dataString = localStorage.getItem("ListStaff");
    // cần chuyển data từ string => JSON
    var dataJson = JSON.parse(dataString);
    //cập nhật data từ localStorage vào dsss.arr
    listStaff.arr = dataJson;
    //re-renderListSV
    renderListStaff(listStaff.arr);
  }
}
