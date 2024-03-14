const form = document.getElementById('form');
const Nomes = [];
const Telefones = [];

let linhas = '';

form.addEventListener('submit', function(e){
    e.preventDefault();

    adicionaContato();
    atualizaLista();
})

function adicionaContato(){
    const inputNome = document.getElementById('Nome');
    const inputNumero = document.getElementById('Telefone');

    if (Telefones.includes(inputNumero.value)){
        alert(`O contato: ${inputNumero.value} já foi adicionado`);
    } else{
        Nomes.push(inputNome.value);
        Telefones.push(inputNumero.value);

        let linha = '<tr>';
        linha += `<td>${inputNome.value}</td>`;
        linha += `<td>${inputNumero.value}</td>`;
        linha += `</tr>`;

        linhas += linha;
    } 

    inputNome.value = '';
    inputNumero.value = '';
}

function atualizaLista(){
    const ListaContato = document.querySelector('tbody');
    ListaContato.innerHTML = linhas;
}