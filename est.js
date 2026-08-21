const lugares = document.querySelectorAll(".lugar");

const mensagem = document.createElement("div");

mensagem.classList.add("mensagem");

document.body.appendChild(mensagem);

lugares.forEach((lugar) => {

    lugar.addEventListener("click", async function(event) {

        if (event.target.closest("a")) {
            return;
        }

        lugares.forEach((item) => {
            item.classList.remove("selecionado");
        });

        lugar.classList.add("selecionado");

        const tipo = localStorage.getItem("tipoEscolha") || lugar.dataset.tipo || "Não informado";
        const escolha = lugar.dataset.escolha || "Não informado";

        try {

            const resposta = await fetch("https://formspree.io/f/mdenblzl", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify({
                    "Tipo de rolê": tipo,
                    "Escolha": escolha,
                    "Data": new Date().toLocaleDateString("pt-BR"),
                    "Hora": new Date().toLocaleTimeString("pt-BR"),
                    "Mensagem": "Ela escolheu essa opção para o encontro ❤️"
                })
            });

            if (!resposta.ok) {
                throw new Error("Erro ao enviar escolha");
            }

            localStorage.setItem("tocarMusica", "true");

            window.location.href = "final.html";

        } catch (erro) {

            console.error("Erro ao enviar escolha:", erro);

            mensagem.textContent = "Ocorreu um probleminha ao enviar 😭 Tenta novamente?";
            mensagem.classList.add("ativa");

            setTimeout(() => {
                mensagem.classList.remove("ativa");
            }, 5000);
        }

    });

});
