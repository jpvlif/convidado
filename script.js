// Seleção de elementos do DOM
const inputText = document.querySelector('#input');
const btnAdd = document.querySelector('#add');
const ulConvidados = document.querySelector('.convidados');
const limpar = document.querySelector('#limpar');

btnAdd.style.backgroundColor = 'green';
limpar.style.backgroundColor = 'red';

// Função para adicionar convidados à lista
function addConvidados() {
    const text = inputText.value.trim();
    const regex = /^[A-Za-z\s]+$/;
    if (text !== '' && text.match(regex)) {
        btnAdd.textContent = 'Adicionado!';

        // Criando elementos do DOM
        const li = document.createElement('li');
        const div = document.createElement('div');
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        const bt = document.createElement('button');
        bt.textContent = 'Remover';

        // Adicionando elementos ao DOM
        div.classList.add('flex');
        div.appendChild(checkbox);
        div.appendChild(bt);
        li.textContent = text;
        li.appendChild(div);
        ulConvidados.appendChild(li);

        // Adicionando eventos aos botões
        bt.addEventListener('click', () => {
            ulConvidados.removeChild(li);
        });

        checkbox.addEventListener('change', () => {
            li.classList.toggle('risk');
        });

        // Limpar o input e focar nele para a próxima entrada
        inputText.value = '';
        inputText.focus();

    } else {
        document.querySelector('h1').innerHTML = 'Inválido';
    }
}

// Função para limpar toda a lista de convidados
function limparAll() {
    while (ulConvidados.firstChild) {
        ulConvidados.removeChild(ulConvidados.firstChild);
    }
    btnAdd.textContent = 'Adicionar';
}

// Evento de tecla Enter no input
inputText.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        addConvidados();
    }
});

// Adicionando eventos aos botões principais
btnAdd.addEventListener('click', addConvidados);
limpar.addEventListener('click', limparAll);
