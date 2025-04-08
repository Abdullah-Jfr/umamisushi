document.getElementById("btn1").addEventListener("click", changetheme);
// function changetheme() {
//   if (document.body.style.backgroundColor == "gray") {
//     document.body.style.backgroundColor = "white";
//   } else {
//     document.body.style.backgroundColor = "gray";
//   }
// }

function changetheme() {
  if (document.body.classList.contains("light")) {
    document.body.classList.add("dark");
    document.body.classList.remove("light");
  } else {
    document.body.classList.add("light");
    document.body.classList.remove("dark");
  }
}

// setInterval(changetheme, 1000);
