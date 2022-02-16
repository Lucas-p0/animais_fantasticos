const img = document.querySelectorAll('img');
console.log(img);


const imagensAnimais = document.querySelectorAll('img[src^="imagem"]');
console.log(imagensAnimais);

const linkInterno = document.querySelectorAll('[href^="#"]');
console.log(linkInterno);

const animais = document.querySelector('.animais-descricao');
const h2Animais = document.querySelector('.animais-descricao h2');

console.log(animais);
console.log(h2Animais);

const itensMenu = document.querySelectorAll('.menu a')
itensMenu.forEach((item) => {
    item.classList.add('ativo');
})
itensMenu.forEach((item) => {
    item.classList.remove('ativo');
})
itensMenu[0].classList.add('ativo')

const imgs = ((img) => {
    img.hasAttribute(img, alt);
})
document.querySelector('a[href^="http"]');
linkInterno.setAttibute()


const listaAnimais = document.querySelector('.animais-lista');

const height = listaAnimais.scrollHeight;
const animaisTop = listaAnimais.offsetTop;
console.log(animaisTop);
const h2left = primeiroh2.offsetLeft;