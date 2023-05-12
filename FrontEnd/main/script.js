function load() {

    fetch('http://localhost:3000/Equipamentos')
        .then(resp => resp.json())
        .then(res => {
            res.forEach(dados => {
                let tabela = listaRead.cloneNode(true)
                tabela.classList.remove("model")

                tabela.querySelector(".id").innerHTML = dados.id
                tabela.querySelector(".equipamento").innerHTML = dados.equipamento
                tabela.querySelector(".imagem").src = './assets/' + dados.imagem
                tabela.querySelector(".descricao").innerHTML = dados.descricao
                tabela.querySelector(".ativo").innerHTML = dados.ativo
                tabela.querySelector(".data").innerHTML = dados.data

                container.appendChild(tabela)
            });
        })
        .catch(err => console.error(err));
}
