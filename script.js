const listaConvidados = [];

function validarNome(nome) {
  return nome.match(/^[a-zA-Z]+$/);
}

function atualizarLista() {
    const ul = document.querySelector(".lista-convidados");
    ul.innerHTML = "";
  
    for (const convidado of listaConvidados) {
      const li = document.createElement("li");
  
      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.checked = false;
      checkbox.style.float = "left";
  
      const button = document.createElement("button");
      button.textContent = "Deletar";
      button.style.float = "right";
  
      li.appendChild(checkbox);
      li.appendChild(document.createTextNode(convidado));
      li.appendChild(button);
  
      ul.appendChild(li);
    }
  }
  

document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();

  const nome = document.querySelector("input[name='nome']").value;

  if (!validarNome(nome)) {
    alert("Verifique as informações do convidado, o valor inserido não é válido.");
    return;
  }

  listaConvidados.push(nome);
  atualizarLista();
});

document.querySelector(".lista-convidados").addEventListener("click", (event) => {
    const target = event.target;
  
    if (target.tagName === "INPUT" && target.type === "checkbox") {
      const li = target.closest("li");
  
      li.classList.toggle("riscado");
    } else if (target.tagName === "BUTTON" && target.textContent === "Deletar") {
      const li = target.closest("li");
      const index = listaConvidados.indexOf(li.textContent);
      listaConvidados.splice(index, 1);
  

      atualizarLista();
    }
  });
