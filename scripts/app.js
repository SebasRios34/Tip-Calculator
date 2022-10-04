var bill = new Bill({
  value: 0,
  tip: 0,
  people: 0,
});
var billValue;
var tipValue;
var customValue;

const billInput = document.querySelector("#bill-input");
const tipInput = document.querySelectorAll("#tip-input");
const customInput = document.querySelector("#custom-input");
const peopleInput = document.querySelector("#people-input");
const errorText = document.querySelector(".error-text");

const getCustomNumber = (num) => {
  return num / 100;
};

billInput.addEventListener("input", (event) => {
  const { value } = event.target;

  switch (value) {
    case value.length == 0:
      break;
    case value.indexOf(".") > -1:
      billValue = parseInt(value);
      bill.value = billValue;
      break;
    default:
      billValue = parseFloat(value);
      bill.value = billValue;
      break;
  }

  if (bill.tip > 0) {
    console.log(bill.tip);
    bill.getTotal();
  }

  console.log(bill);
});

tipInput.forEach((tip) => {
  tip.addEventListener("click", (event) => {
    event.preventDefault();

    const { value } = event.target;

    customInput.value = "";

    tipValue = parseFloat(value);
    bill.tip = tipValue;
    console.log(bill);
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
      break;
    default:
      customValue = parseFloat(value);
      customValue = getCustomNumber(customValue);
      bill.tip = customValue;
      break;
  }
  console.log(bill);
});

peopleInput.addEventListener("input", (event) => {
  const { value } = event.target;

  if (value == 0) {
    peopleInput.style.border = "1px solid #f05933";
    errorText.style.display = "flex";
  } else if (value.length === 0) {
    peopleInput.style.border = "";
    errorText.style.display = "none";
  } else {
    peopleInput.style.border = "";
    errorText.style.display = "none";
  }
});

peopleInput.addEventListener("keypress", (event) => {
  const { value } = event.target;
});
