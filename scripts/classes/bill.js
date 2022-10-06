class Bill {
  constructor({ value = 0, tip = 0, people = 0 }) {
    this.value = value;
    this.tip = tip;
    this.people = people;
    this.total = 0;
    this.amountTip = 0;
  }

  getTotalPerPerson() {
    let percentageValue = 100 * this.tip;
    this.total = (this.value + percentageValue) / this.people;
    console.log(this.people);
  }

  getTipAmountPerPerson() {
    let amountTip = (this.value * this.tip) / this.people;
    this.amountTip = amountTip;
  }
}
