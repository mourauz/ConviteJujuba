function salvarEscolha(tipo) {
    localStorage.setItem("tipoEscolha", tipo);
}

function piz() {
    salvarEscolha("Pizzaria");
    window.location.href = "pizza.html";
}

function bar() {
    salvarEscolha("Barzinho");
    window.location.href = "bar.html";
}

function casa() {
    salvarEscolha("Casa");
    window.location.href = "casa.html";
}

function outra() {
    salvarEscolha("Outra coisa");
    window.location.href = "outra.html";
}