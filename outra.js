const formulario = document.getElementById("formulario");
const mensagem = document.getElementById("mensagem");

formulario.addEventListener("submit", async function(event) {
    event.preventDefault();

    const lugar = document.getElementById("lugar").value;
    const horario = document.getElementById("horario").value;
    const maps = document.getElementById("maps").value;
    const observacao = document.getElementById("observacao").value;

    const dados = {
        "Tipo de rolê": "Outra coisa",
        "Lugar escolhido": lugar,
        "Horário escolhido": horario,
        "Google Maps": maps || "Não informado",
        "Observação": observacao || "Nenhuma",
        "Data da escolha": new Date().toLocaleDateString("pt-BR"),
        "Hora da escolha": new Date().toLocaleTimeString("pt-BR")
    };

    const botao = formulario.querySelector("button");
    botao.disabled = true;
    botao.textContent = "ENVIANDO... ❤️";

    try {
        const resposta = await fetch("https://formspree.io/f/mdenblzl", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(dados)
        });

        if (!resposta.ok) {
            throw new Error("Erro ao enviar formulário");
        }

        window.location.href = "final.html";

    } catch (erro) {
        console.error("Erro:", erro);

        botao.disabled = false;
        botao.textContent = "ENVIAR MINHA ESCOLHA ❤️";

        mensagem.innerHTML = `
            Ocorreu um probleminha ao enviar 😭<br>
            Tenta novamente?
        `;

        mensagem.classList.add("ativa");
    }
});
