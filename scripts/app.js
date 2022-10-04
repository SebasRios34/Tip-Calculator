var bill = new Bill({
  value: 0,
  tip: 0,
  people: 0,
});

var billValue;
var tipValue;
var customValue;
var peopleValue;

const billInput = document.querySelector("#bill-input");
const tipInput = document.querySelectorAll("#tip-input");
const customInput = document.querySelector("#custom-input");
const peopleInput = document.querySelector("#people-input");
const resetButton = document.querySelector("#reset");

const errorText = document.querySelector(".error-text");

const tipDisplay = document.querySelector("#tip-amount-person");
const totalDisplay = document.querySelector("#total-amount-person");

const getCustomNumber = (num) => {
  return num / 100;
};

const updateDisplay = () => {
  if (isNaN(bill.amountTip) || isNaN(bill.total)) return;

  if (bill.amountTip == Infinity || bill.total == Infinity) return;

  let strTip = "$";
  let strTotal = "$";

  strTip = strTip.concat(bill.amountTip.toFixed(2));
  strTotal = strTotal.concat(bill.total.toFixed(2));

  tipDisplay.innerHTML = strTip;
  totalDisplay.innerHTML = strTotal;
};

billInput.addEventListener("input", (event) => {
  const { value } = event.target;

  switch (value) {
    case value.length == 0:
      break;
    case value.indexOf(".") > -1:
      billValue = parseInt(value);
      bill.value = billValue;

      bill.getTotalPerPerson();
      bill.getTipAmountPerPerson();

      updateDisplay();
      break;
    default:
      billValue = parseFloat(value);
      bill.value = billValue;

      bill.getTotalPerPerson();
      bill.getTipAmountPerPerson();

      updateDisplay();
      break;
  }

  if (bill.tip > 0) {
    bill.getTotalPerPerson();
    bill.getTipAmountPerPerson();

    updateDisplay();
  }
});

tipInput.forEach((tip) => {
  tip.addEventListener("click", (event) => {
    event.preventDefault();

    const { value } = event.target;

    customInput.value = "";

    tipValue = parseFloat(value);
    bill.tip = tipValue;

    bill.getTotalPerPerson();
    bill.getTipAmountPerPerson();

    updateDisplay();
  });
});

customInput.addEventListener("input", (event) => {
  const { value } = event.target;

  switch (value) {
    case value.length == 0:
      break;
    case value.indexOf(".") > -1:
      customValue = parseInt(value);
      customValue = getCustomNumber(customValue);
      bill.tip = customValue;

      bill.getTotalPerPerson();
      bill.getTipAmountPerPerson();

      updateDisplay();
      break;
    default:
      customValue = parseFloat(value);
      customValue = getCustomNumber(customValue);
      bill.tip = customValue;

      bill.getTotalPerPerson();
      bill.getTipAmountPerPerson();

      updateDisplay();
      break;
  }
});

peopleInput.addEventListener("input", (event) => {
  const { value } = event.target;

  if (value == 0) {
    peopleInput.style.border = "1px solid #f05933";
    errorText.style.display = "flex";
  } else {
    peopleInput.style.border = "";
    errorText.style.display = "none";

    peopleValue = parseInt(value);
    bill.people = peopleValue;

    bill.getTotalPerPerson();
    bill.getTipAmountPerPerson();

    updateDisplay();
  }
});

resetButton.addEventListener("click", () => {
  bill.value = 0;
  bill.tip = 0;
  bill.people = 0;
  bill.total = 0;
  bill.amountTip = 0;

  billInput.value = "";
  customInput.value = "";
  peopleInput.value = "";

  tipDisplay.innerHTML = "$0.00";
  totalDisplay.innerHTML = "$0.00";
});
