const paragrafo = documento.crateElement("p")
paragrafo.innerHTML = "É culpa do Mike"

document.body.appendChild(paragrafo)


function mostrarTelefone(){
    document.getElementById("telefone").style.display = "block"
}

function removerTelefone(){
    document.body.removeChild("telefone")
}