async function buscarCep() {
    const cep = document.getElementById('cep').value;

    if (cep.length == 8) {
        try {
            const url = `https://viacep.com.br/ws/${cep}/json/`;
            const resposta = await fetch(url);

            const dados = await resposta.json();

            if (dados.erro) {
                alert('CEP não encontrado!');
            } else {
                document.getElementById('cep').value = dados.cep;
                document.getElementById('logradouro').value = dados.logradouro;
                document.getElementById('complemento').value = dados.complemento;
                document.getElementById('unidade').value = dados.unidade;
                document.getElementById('bairro').value = dados.bairro;
                document.getElementById('localidade').value = dados.localidade;
                document.getElementById('uf').value = dados.uf;
                document.getElementById('estado').value = dados.estado;
                document.getElementById('regiao').value = dados.regiao;
                document.getElementById('ibge').value = dados.ibge;
                document.getElementById('gia').value = dados.gia;
                document.getElementById('ddd').value = dados.ddd;
                document.getElementById('siafi').value = dados.siafi;
            }
        } catch (error) {
            alert('Erro ao buscar o CEP na rede.');
        }
    }
}

async function limparInput() {
    document.getElementById('cep').value = null;
    document.getElementById('logradouro').value = null;
    document.getElementById('complemento').value = null;
    document.getElementById('unidade').value = null;
    document.getElementById('bairro').value = null;
    document.getElementById('localidade').value = null;
    document.getElementById('uf').value = null;
    document.getElementById('estado').value = null;
    document.getElementById('regiao').value = null;
    document.getElementById('ibge').value = null;
    document.getElementById('gia').value = null;
    document.getElementById('ddd').value = null;
    document.getElementById('siafi').value = null;
}
