import Entrada from "../io/entrada";
import Produto from "../modelo/produto";
import Cadastro from "./cadastro";
import ListagemProdutos from "./listagemProdutos";

export default class CadastroProduto extends Cadastro {
    private produtos: Array<Produto>
    private entrada: Entrada
    constructor(produtos: Array<Produto>) {
        super()
        this.produtos = produtos
        this.entrada = new Entrada()
    }
    public cadastrar(): void {
        console.log(`\nInício do cadastro do produto (Digite 0 para cancelar)`);

        // Nome
        let nome = this.entrada.receberTexto(`Por favor informe o nome do produto: `)
        if (nome == "0") {
            return
        }
        while (new ListagemProdutos(this.produtos).getUmProduto(nome) != undefined || nome == "") {
            if (nome == "") {
                nome = this.entrada.receberTexto(`Você tem que digitar um nome: `)
            } else {
                nome = this.entrada.receberTexto(`Esse produto já existe, digite de novo: `)
            }
        }
        if (nome == "0") {
            return
        }

        // Preço
        let preco = this.entrada.receberNumero(`Por favor informe o preço desse produto (use ponto invez de virgula): R$`)
        while (isNaN(preco)) {
            preco = this.entrada.receberNumero(`Valor inválido, digite de novo: `)
        }
        let produto = new Produto(nome, Number(preco.toFixed(2)));
        this.produtos.push(produto)
        console.log(`\nPRODUTO CADASTRADO :)\n`);
    }
}