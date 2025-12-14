// ===== LISTA INTERATIVA DA ROTINA =====
const listaRotina = document.getElementById("listaRotina");
const itemRotina = document.getElementById("itemRotina");
const posRotina = document.getElementById("posRotina");

function criarItemRotina(texto) {
    const li = document.createElement("li");
    li.className = "list-group-item";
    li.textContent = texto;
    return li;
}

function inserirInicio() {
    const texto = itemRotina.value.trim();
    if (!texto) return;
    listaRotina.prepend(criarItemRotina(texto));
    itemRotina.value = "";
}

function inserirFim() {
    const texto = itemRotina.value.trim();
    if (!texto) return;
    listaRotina.appendChild(criarItemRotina(texto));
    itemRotina.value = "";
}

function inserirPosicao() {
    const texto = itemRotina.value.trim();
    const pos = parseInt(posRotina.value);

    if (!texto || isNaN(pos) || pos < 1) return;

    const novoItem = criarItemRotina(texto);
    const referencia = listaRotina.children[pos - 1];

    if (referencia) {
        listaRotina.insertBefore(novoItem, referencia);
    } else {
        listaRotina.appendChild(novoItem);
    }

    itemRotina.value = "";
    posRotina.value = "";
}

function removerInicio() {
    if (listaRotina.children.length > 0) {
        listaRotina.removeChild(listaRotina.firstChild);
    }
}

function removerFim() {
    if (listaRotina.children.length > 0) {
        listaRotina.removeChild(listaRotina.lastChild);
    }
}

function removerPosicao() {
    const pos = parseInt(posRotina.value);
    if (isNaN(pos) || pos < 1 || pos > listaRotina.children.length) return;
    listaRotina.removeChild(listaRotina.children[pos - 1]);
    posRotina.value = "";
}

// ===== SIMULAÇÃO DE ROTINA =====
function simular(periodo) {
    const resultado = document.getElementById("resultadoSimulacao");

    switch (periodo) {
        case "manha":
            resultado.innerHTML = `
                <ul class="list-group">
                    <li class="list-group-item">07:00 - Acordar e alongar o corpo</li>
                    <li class="list-group-item">07:15 - Lavar o rosto e skincare</li>
                    <li class="list-group-item">07:40 - Tomar café da manhã</li>
                    <li class="list-group-item">08:00 - Organizar o dia</li>
                </ul>`;
            break;

        case "tarde":
            resultado.innerHTML = `
                <ul class="list-group">
                    <li class="list-group-item">12:00 - Almoçar com calma</li>
                    <li class="list-group-item">13:00 - Estudar ou trabalhar</li>
                    <li class="list-group-item">15:30 - Pausa para água e descanso</li>
                    <li class="list-group-item">17:00 - Alongar e relaxar</li>
                </ul>`;
            break;

        case "noite":
            resultado.innerHTML = `
                <ul class="list-group">
                    <li class="list-group-item">19:00 - Jantar leve</li>
                    <li class="list-group-item">20:00 - Skincare noturno</li>
                    <li class="list-group-item">21:00 - Momento de relaxamento</li>
                    <li class="list-group-item">22:30 - Preparar para dormir</li>
                </ul>`;
            break;
    }
}

// ===== AVALIAÇÃO DA PELE =====
function avaliarPele() {
    const nome = document.getElementById("nomePele").value.trim();
    const situacao = document.getElementById("situacaoPele").value;
    const resultado = document.getElementById("resultadoPele");

    // limpa mensagens anteriores
    resultado.className = "";
    resultado.innerHTML = "";

    // ERRO
    if (!nome || !situacao) {
        resultado.classList.add("erro-msg");
        resultado.innerHTML = "⚠️ Por favor, preencha seu nome e selecione a situação da pele.";
        return;
    }

    let dica = "";
    switch (situacao) {
        case "seca":
            dica = "Sua pele está seca. Use hidratantes mais intensos e evite água quente.";
            break;
        case "oleosa":
            dica = "Sua pele está oleosa. Prefira produtos oil-free e limpeza suave.";
            break;
        case "mista":
            dica = "Sua pele é mista. Hidrate bem e controle a oleosidade.";
            break;
        case "sensivel":
            dica = "Sua pele é sensível. Use produtos suaves e sem fragrância.";
            break;
    }

    // SUCESSO
    resultado.classList.add("sucesso-msg");
    resultado.innerHTML = `
        <p>Olá, <strong>${nome}</strong> 💖</p>
        <p>${dica}</p>
    `;
}
