function ListStaff() {
  this.arr = [];
  this.addStaff = function (staff) {
    this.arr.push(staff);
  };

  this._findLocation = function (accountS) {
    var index = -1;
    for (var i = 0; i < this.arr.length; i++) {
      var sf = this.arr[i];
      if (accountS === sf.accountS) {
        index = i;
        break;
      }
    }
    return index;
  };

  this._getinfoStaff = function (accountS) {
    var index = this._findLocation(accountS);
    if (index !== -1) {
      return this.arr[index];
    }
    return null;
  };

  this.deleteStaff = function (accountS) {
    var index = this._findLocation(accountS);

    if (index !== -1) {
      //xoa sv
      this.arr.splice(index, 1);
    }
  };

  this.updateStaff = function (sf) {
    var index = this._findLocation(sf.accountS);
    if (index !== -1) {
      this.arr[index] = sf;
    }
  };

  this._findStaff = function (keyword) {
    var findArr = [];
    for (var i = 0; i < this.arr.length; i++) {
      var sf = this.arr[i];
      //convert keyword => lowercase
      var keylowercase = keyword.toLowerCase();
      //convert sv.tenSV => lowercase
      var tenSFLowerCase = sf.rankOfStaff.toLowerCase();
      if (tenSFLowerCase.indexOf(keylowercase) !== -1) {
        findArr.push(sf);
      }
      return findArr;
    }
  };
}
