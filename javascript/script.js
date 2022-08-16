let escolha = 10,
    baralho = [1, 2, 3, 4, 5, 6, 7],
    posicao = [],
    final = false;

const superior = document.querySelector('.fileirasuperior');
const inferior = document.querySelector('.fileirainferior');

iniciarJogo();
cartear();

function iniciarJogo() {
    do {
        if ((escolha > 14 || escolha < 4 || escolha % 2 !== 0) || (escolha > 14 || escolha < 4 && escolha % 2 !== 0)) {
            alert("Valor inválido, tente novamente!");
        }
        escolha = prompt("Escolha o número de cartas (somente quantidade par de 4 à 14):");
    } while ((escolha > 14 || escolha < 4 || escolha % 2 !== 0) || (escolha > 14 || escolha < 4 && escolha % 2 !== 0)) console.log('17')
}

function cartear() {
    let cont2 = 0;
    const tamanho = escolha;
    baralho.sort(comparador);

    for (let cont = 0; cont < tamanho; cont += 2) {
        posicao[cont] = criarcarta(baralho[cont2]);
        posicao[cont + 1] = criarcarta(baralho[cont2]);
        cont2++;
    }

    posicao.sort(comparador);

    for (let cont = 0; cont < tamanho; cont++) {
        if (cont < tamanho / 2) {
            console.log(',37', posicao[cont])
            posicao[cont] = superior.appendChild(posicao[cont]);
        }
        if (cont >= tamanho / 2) {
            posicao[cont] = inferior.appendChild(posicao[cont]);
        }
    }
    return posicao;
}

function criarcarta(num) {
    const frente = document.createElement("div");
    const costas = document.createElement("div");
    const carta = document.createElement("div");

    frente.classList.add("frente", "conteudocarta");
    img = document.createElement("img");
    img.src = "./imagens/front.png";
    frente.appendChild(img);

    costas.classList.add("costas", "conteudocarta");
    img = document.createElement("img");
    img.src = `./imagens/costas${num}.gif`;
    costas.appendChild(img);

    carta.classList.add("carta");
    carta.appendChild(frente);
    carta.appendChild(costas);
    return carta;
}

function comparador() {
    return Math.random() - 0.5;
}