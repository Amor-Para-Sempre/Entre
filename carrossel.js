// Diretório das imagens
const diretorioImagens = 'imagens/ayane-santiago/';
const quantidadeImagens = 12; // Quantidade de imagens no diretório

// Função para carregar as imagens no carrossel
function carregarImagens() {
    const carrosselImagens = document.getElementById('carrosselImagens');
    const contador = document.getElementById('contador');
    
    // Carregar as imagens
    for (let i = 1; i <= quantidadeImagens; i++) {
        const img = document.createElement('img');
        img.src = `${diretorioImagens}img${i}.jpeg`;  // Nome das imagens: img1.jpg, img2.jpg, ...
        img.alt = `Imagem ${i}`;
        carrosselImagens.appendChild(img);
    }
    
    // Clonar a primeira imagem no final para criar o loop infinito
    const primeiraImagem = carrosselImagens.firstElementChild.cloneNode();
    carrosselImagens.appendChild(primeiraImagem);
    
    // Adicionar as bolinhas de contador
    for (let i = 0; i < quantidadeImagens; i++) {
        const bolinha = document.createElement('div');
        bolinha.classList.add('bolinha');
        contador.appendChild(bolinha);
    }
}

// Função para mover para a próxima imagem
let indiceAtual = 0;
function proximaImagem() {
    const carrosselImagens = document.getElementById('carrosselImagens');
    const imagens = carrosselImagens.children;

    // Atualizar o índice, garantindo que seja circular
    indiceAtual = (indiceAtual + 1) % imagens.length;
    
    // Quando atingir a última imagem (imagem clonada), reiniciar o carrossel de forma invisível
    if (indiceAtual === imagens.length - 1) {
        setTimeout(() => {
            carrosselImagens.style.transition = 'none'; // Desativar transição para um "salto"
            carrosselImagens.style.transform = `translateX(0%)`; // Voltar ao início
            indiceAtual = 0; // Reiniciar o índice
        }, 1000); // Esperar um pouco para que a transição atual termine
    } else {
        carrosselImagens.style.transition = 'transform 1s ease-in-out'; // Ativar a transição suave
    }

    // Aplicar a transição para mover para a próxima imagem
    carrosselImagens.style.transform = `translateX(-${indiceAtual * 100}%)`;

    // Atualizar as bolinhas
    atualizarBolinhas();
}

// Função para mover para a imagem anterior
function imagemAnterior() {
    const carrosselImagens = document.getElementById('carrosselImagens');
    const imagens = carrosselImagens.children;

    // Atualizar o índice, garantindo que seja circular
    indiceAtual = (indiceAtual - 1 + imagens.length) % imagens.length;
    carrosselImagens.style.transform = `translateX(-${indiceAtual * 100}%)`;

    // Atualizar as bolinhas
    atualizarBolinhas();
}

// Atualizar as bolinhas de contador
function atualizarBolinhas() {
    const bolinhas = document.querySelectorAll('.bolinha');
    indiceBolinha = indiceAtual - 1
    bolinhas.forEach((bolinha, index) => {
        bolinha.classList.toggle('active', index === indiceBolinha);
    });
}

// Navegação manual (anterior e próximo)
document.getElementById('nextBtn').addEventListener('click', proximaImagem);
document.getElementById('prevBtn').addEventListener('click', imagemAnterior);

// Configurar o carrossel para avançar automaticamente a cada 3 segundos
setInterval(proximaImagem, 3000);

// Carregar as imagens quando a página for carregada
window.onload = carregarImagens;

// Função para tratar o swipe (arrastar para os lados)
let touchStartX = 0;
let touchEndX = 0;

const carrosselContainer = document.querySelector('.carrossel-container');
carrosselContainer.addEventListener('touchstart', (event) => {
    touchStartX = event.changedTouches[0].screenX;
});

carrosselContainer.addEventListener('touchend', (event) => {
    touchEndX = event.changedTouches[0].screenX;

    if (touchStartX - touchEndX > 50) {
        proximaImagem(); // Deslizar para a esquerda
    } else if (touchEndX - touchStartX > 50) {
        imagemAnterior(); // Deslizar para a direita
    }
});
