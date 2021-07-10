const inputRangeEl = document.querySelector("#font-size-control");
const textEl = document.querySelector("#text");

const onInputRateChange = (event) => {
  textEl.getElementsByClassName.fontSize = event.target.value * 0.32 + "px";
};
inputRangeEl.addEventListener("input", onInputRateChange);
