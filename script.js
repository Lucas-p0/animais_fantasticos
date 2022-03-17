const img = document.querySelector("img");
function callback() {
  console.log("clicou");
}

img.addEventListener("click", callback);
img.addEventListener("click", callback());
