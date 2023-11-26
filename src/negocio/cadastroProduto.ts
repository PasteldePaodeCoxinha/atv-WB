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
        console.log(`\nInício do cadastro do produto`);
        let nome = this.entrada.receberTexto(`Por favor informe o nome do produto: `)
        while (new ListagemProdutos(this.produtos).getUmProduto(nome) != undefined || nome == "") {
            if (nome == "") {
                nome = this.entrada.receberTexto(`Você tem que digitar um nome: `)
            } else {
                nome = this.entrada.receberTexto(`Esse produto já existe, digite de novo: `)
            }
        }
        let preco = this.entrada.receberNumero(`Por favor informe o preço desse produto (use ponto invez de virgula): R$`)
        let produto = new Produto(nome, preco);
        this.produtos.push(produto)
        console.log(`\nPRODUTO CADASTRADO :)\n`);
    }
}