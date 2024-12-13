// Definir a data e hora de referência (25/12/2023 15:45:32)
const dataReferencia = new Date(2023, 11, 25, 0, 0, 0); // Meses são baseados em 0 (novembro é 11)

// Função para atualizar o contador de tempo
function atualizarContador() {
    const agora = new Date();
    const tempoDecorrido = agora - dataReferencia; // Em milissegundos

    // Calcular a diferença em anos, meses, dias, horas, minutos e segundos
    const anos = Math.floor(tempoDecorrido / (1000 * 60 * 60 * 24 * 365));
    const meses = Math.floor(tempoDecorrido / (1000 * 60 * 60 * 24 * 30.416666667)) % 12;
    const dias = Math.floor(tempoDecorrido / (1000 * 60 * 60 * 24)) % 30;
    const horas = Math.floor(tempoDecorrido / (1000 * 60 * 60)) % 24;
    const minutos = Math.floor(tempoDecorrido / (1000 * 60)) % 60;
    const segundos = Math.floor(tempoDecorrido / 1000) % 60;

    // Atualizar os valores nos spans
    document.getElementById("anos").textContent = anos;
    document.getElementById("meses").textContent = meses;
    document.getElementById("dias").textContent = dias;
    document.getElementById("horas").textContent = horas;
    document.getElementById("minutos").textContent = minutos;
    document.getElementById("segundos").textContent = segundos;
}

// Chamar a função para atualizar o contador a cada segundo
setInterval(atualizarContador, 1000);

// Chamar a função uma vez para garantir que os valores estejam atualizados ao carregar a página
atualizarContador();
