<div align="center">

# Consulta CEP

Aplicação web simples para consultar endereços a partir do CEP. O usuário digita o código postal e os campos de endereço são preenchidos automaticamente com os dados retornados pela API.

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![ViaCEP](https://img.shields.io/badge/API-ViaCEP-3b82f6?style=for-the-badge)

</div>

---

## Funcionalidades

- Busca de endereço por CEP
- Preenchimento automático de: logradouro, complemento, unidade, bairro, localidade, UF, estado, região, IBGE, GIA, DDD e SIAFI
- Botão **Limpar** para resetar o formulário
- Interface escura, responsiva e com animações suaves
- Estados de foco e hover para melhor usabilidade e acessibilidade

## Tecnologias

- ![HTML5](https://img.shields.io/badge/-HTML5-E34F26?logo=html5&logoColor=white) HTML5
- ![CSS3](https://img.shields.io/badge/-CSS3-1572B6?logo=css3&logoColor=white) CSS3
- ![JavaScript](https://img.shields.io/badge/-JavaScript-F7DF1E?logo=javascript&logoColor=black) JavaScript (Fetch API)
- [ViaCEP](https://viacep.com.br/) para consulta dos dados

## Como executar

1. Clone o repositório:
   ```bash
   git clone https://github.com/Linharestheo/Consulta-CEP.git
   ```
2. Entre na pasta do projeto:
   ```bash
   cd Consulta-CEP
   ```
3. Abra o `index.html` no navegador, ou use a extensão **Live Server** do VS Code.

4. Ou acesse o link: https://linharestheo.github.io/Consulta-CEP/

## Como usar

1. Digite o CEP no campo (somente números).
2. Clique em **Buscar**.
3. Os dados do endereço serão exibidos nos campos abaixo.
4. Clique em **Limpar** para fazer uma nova consulta.

## Estrutura do projeto

```
consulta-cep/
├── index.html
├── style.css
└── script.js
└── README.MD
```

## Melhorias futuras

- [ ] Máscara de formatação no campo CEP (00000-000)
- [ ] Indicador de carregamento no botão Buscar
- [ ] Mensagens de erro para CEP inválido ou não encontrado
- [ ] Copiar endereço completo com um clique

## Autor

Feito por [Theo Linhares Marano](https://github.com/Linharestheo).

<div align="center">

⭐ Se gostou do projeto, deixe uma estrela no repositório!

</div>
