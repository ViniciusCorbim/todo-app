//-----------------------------Change theme color-----------------------------\\
const icon = document.querySelector("#btn_change_theme img");

//AnimationA - image decrease
//AnimationB - image increase
function changeTheme() {
  const src = document.documentElement.classList.toggle("lightMode")
    ? "./assets/images/icon-moon.svg"
    : "./assets/images/icon-sun.svg";
  icon.src = src;

  icon.classList.toggle("animationA", false);
  icon.classList.toggle("animationB", true);
}

const btn_change_theme = document.getElementById("btn_change_theme");
btn_change_theme.addEventListener("click", () => {
  if (icon.classList.contains("animationA")) return;

  icon.classList.toggle("animationB", false);
  icon.classList.toggle("animationA", true);
  changeThemeTimeout = setTimeout(changeTheme, 350);
});
//-----------------------------End Change theme color-----------------------------\\
