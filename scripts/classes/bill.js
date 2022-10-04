class Bill {
  constructor({ value = 0, tip = 0, people = 0 }) {
    this.value = value;
    this.tip = tip;
    this.people = people;
    this.total = 0;
  }

  getTotal() {
    let percentageValue = this.value * (100 * this.tip);
    this.total = this.value + percentageValue / this.people;
  }
}
