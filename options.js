/* global chrome */

const range = document.getElementById("speedRange");
const input = document.getElementById("speedInput");

function setValue(value) {
  const v = Math.min(Math.max(parseFloat(value) || 1.0, 0.1), 10.0);
  range.value = v;
  input.value = v;
  chrome.storage.sync.set({ shiftGSpeed: v });
}

chrome.storage.sync.get({ shiftGSpeed: 1.0 }, (data) => {
  setValue(data.shiftGSpeed);
});

range.addEventListener("input", (e) => setValue(e.target.value));
input.addEventListener("input", (e) => setValue(e.target.value));

document.querySelectorAll(".presets button").forEach((btn) => {
  btn.addEventListener("click", () => setValue(btn.dataset.value));
});

