function Staff(
  _accountS,
  _nameS,
  _emailS,
  _passwordS,
  _workDayS,
  _basicSalaryS,
  _positionS,
  _workDuringMonthS
) {
  this.accountS = _accountS;
  this.nameS = _nameS;
  this.emailS = _emailS;
  this.passwordS = _passwordS;
  this.workDayS = _workDayS;
  this.basicSalaryS = _basicSalaryS;
  this.positionS = _positionS;
  this.workDuringMonthS = _workDuringMonthS;
  this.totalSalaryS = 0;
  this.rankOfStaff = "";

  this.totalSalary = function () {
    var total = 0;
    if (this.positionS === "Sếp") {
      total = this.basicSalaryS * 3;
    }
    if (this.positionS === "Trưởng phòng") {
      total = this.basicSalaryS * 2;
    }
    if (this.positionS === "Nhân viên") {
      total = this.basicSalaryS * 1;
    }
    this.totalSalary = total;
  };

  this.rankOfStaff = function () {
    if (this.workDuringMonthS >= 192) {
      this.rankOfStaff = "Xuất sắc";
    } else if (this.workDuringMonthS >= 176) {
      this.rankOfStaff = "Giỏi";
    } else if (this.workDuringMonthS >= 160) {
      this.rankOfStaff = "Khá";
    } else {
      this.rankOfStaff = "Trung bình";
    }
  };
}
