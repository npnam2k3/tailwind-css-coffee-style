const dropDownMenu = document.getElementById("drop-down-menu");
const toggleMenuIcon = document.getElementById("toggle-menu");

document.addEventListener("click", (e) => {
  if (toggleMenuIcon.contains(e.target)) {
    dropDownMenu.classList.toggle("ct-drop-down");
    dropDownMenu.classList.toggle("hidden");
  } else {
    if (dropDownMenu.classList.contains("ct-drop-down")) {
      dropDownMenu.classList.remove("ct-drop-down");
      dropDownMenu.classList.add("hidden");
    }
  }
});
