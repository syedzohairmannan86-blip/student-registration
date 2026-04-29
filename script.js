function next(step) {
  document.querySelector(".active").classList.remove("active");
  document.getElementById("step" + (step + 1)).classList.add("active");
}

function submitForm() {
  alert("Registered!");
}
