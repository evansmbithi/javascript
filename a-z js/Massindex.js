class Massindex {
  constructor(name, mass, height) {
    this.name = name;
    this.mass = mass;
    this.height = height;
  }

  calculateBmi() {
    let bmi = this.mass / this.height ** 2;
    return bmi;
  }
}

export default Massindex;
