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
