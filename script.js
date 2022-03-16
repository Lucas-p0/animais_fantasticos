function somaImage() {
  const imagens = document.querySelectorAll("img");
  let soma = 0;
  imagens.forEach((imagem) => {
    soma = soma + imagem.offsetWidth;
  });
  console.log(soma);
}

window.onload = function () {
  somaImage();
};

const links = document.querySelectorAll("a");

links.forEach((link) => {
  const linkWidth = link.offsetWidth;
  const linkHeight = link.offsetHeight;
  if (linkWidth >= 48 && linkHeight >= 48) {
    console.log(link, "Possui boa acessibilidade");
  } else {
    console.log(link, "Não possui boa acessibilidade");
  }
});

const browerSmall = window.matchMedia("(max-width:720px)").matches;

if (browerSmall) {
  const menu = document.querySelector(".menu");
  menu.classList.add("menu-mobile");
}
