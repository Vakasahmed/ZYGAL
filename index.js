const enterDate = document.getElementById("enterDate");
let realDate = document.getElementsByTagName("td");
function date() {
  for (let i = 0; i<realDate.length; i++) {
    enterDate.value === realDate[i].innerText
      ? realDate[i].style.backgroundColor === "white"
        ? (realDate[i].style.backgroundColor = "green")
        : (realDate[i].style.backgroundColor = "white")
      : (realDate[i].style.backgroundColor = "white");
  }
}
