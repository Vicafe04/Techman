const lista = document.querySelector(".list")
const itemLista = document.querySelector(".item-list")
const lista2 = document.querySelector(".list2")
const itemLista2 = document.querySelector(".item-list2")


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
                item.querySelector("#comentModal").setAttribute("onclick", abrirModalC(dados.id))


                lista.appendChild(item)
            });
        })
}

function abrirModalC(equipId) {
    let modalOpen = document.querySelector(".modalOpenC");
    modalOpen.classList.add("modelModal")

    fetch(`http://localhost:3000/Equipamentos/${equipId}`)
        .then(response => response.json())
        .then(res => {
            // console.log(res)
            res.comentarios.forEach(dados => {

                let item = itemLista2.cloneNode(true)
                item.classList.remove("model")
                console.log(dados)
                item.querySelector('#perfil').innerHTML = dados.perfio.perfil
                item.querySelector('#comentario').innerHTML = dados.comentario
                item.querySelector('#data2').innerHTML = dados.data

                lista2.appendChild(item)
            })
        })
        .catch(err => console.error(err));
}

function fecharModalC() {
    let modalClose = document.querySelector(".modalOpenC");
    modalClose.classList.remove("modelModal")
}