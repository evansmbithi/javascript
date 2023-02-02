class Driver {
  constructor(nm, occ, yob) {
    this.name = nm;
    this.occupation = occ;
    this.yob = yob;
  }

  calcAge = function () {
    return 2023 - this.yob;
  };

  hasLicense = function () {
    if (this.calcAge() > 18) {
      return true;
    } else {
      return false;
    }
  };
}

export default Driver;
