const lista = document.querySelector(".list")
const itemLista = document.querySelector(".item-list")

function load() {

    fetch("http://localhost:3000/Equipamentos")
        .then(resp => resp.json())
        .then(res => {
            res.forEach(dados => {
                let item = itemLista.cloneNode(true)
                item.classList.remove("model")
                console.log(dados.comentarios)
                item.querySelector("#imagem").src = './assets/' + dados.imagem;
                item.querySelector("#id").innerHTML = dados.id;
                item.querySelector("#equipamento").innerHTML = dados.equipamento;
                item.querySelector("#descricao").innerHTML = dados.descricao;
                item.querySelector("#ativo").innerHTML = dados.ativo;
                item.querySelector("#data").innerHTML = dados.data.split("T", [1]);
                item.querySelector("#comentModal").setAttribute("onclick", abrirModalC(dados.comentarios, dados.id))


                lista.appendChild(item)
            });
        })
}

function abrirModalC(dados, equipId) {
    loadModalC(dados, equipId)
    let modalOpen = document.querySelector(".modalComment");
    modalOpen.classList.add("modelModal")
}

function fecharModalC() {
    let modalClose = document.querySelector(".modalComment");
    modalClose.classList.remove("modelModal")
}

function loadModalC(dados, equipId) {
    dados.forEach(dado => {
        console.log(dado)
        if (dado.equipamento == equipId) {
            let item = itemLista2.cloneNode(true)
            item.classList.remove("model2")
            item.querySelector("#perfil").innerHTML = dado.perfio.perfil;
            item.querySelector("#comentario").innerHTML = dado.comentario;
            item.querySelector("#data2").innerHTML = dado.data.split("T", [1]);

            lista2.appendChild(item)
        }
    });
}