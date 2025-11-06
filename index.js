const checkbox = document.getElementById("switch");
const simpleBlock = document.getElementById("simpleBlock");
const expBlock = document.getElementById("expBlock");

checkbox.addEventListener("change", () => {
  if (checkbox.checked) {
    expBlock.classList.add("mode-active");
    expBlock.classList.remove("mode-hidden");

    simpleBlock.classList.add("mode-hidden");
    simpleBlock.classList.remove("mode-active");
  } else {
    simpleBlock.classList.add("mode-active");
    simpleBlock.classList.remove("mode-hidden");

    expBlock.classList.add("mode-hidden");
    expBlock.classList.remove("mode-active");
  }
});
