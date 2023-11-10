import Entrada from "../io/entrada";
import Produto from "../modelo/produto";
import Atualiza from "./atualiza";
import ListagemProdutos from "./listagemProdutos";

export default class AtualizaProduto extends Atualiza {
    private produtos: Array<Produto>
    private entrada: Entrada
    constructor(produtos: Array<Produto>) {
        super()
        this.produtos = produtos
        this.entrada = new Entrada()
    }
    public atualizar(): void {
        let nome = this.entrada.receberTexto(`Digite o nome de um produto: `)
        let Listaproduto = new ListagemProdutos(this.produtos)
        let produto = Listaproduto.getUmProduto(nome)
        let NoNome = this.entrada.receberTexto(`Digite o novo nome do produto: `)
        let NoPreco = this.entrada.receberTexto(`Digite o novo preço do produto: `)
        produto.nome = NoNome
        produto.preco = NoPreco
    }
}