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
        while (produto != Produto) {
            nome = this.entrada.receberTexto(`Esse produto não existe, digite o nome de novo: `)
        }

        let perNome = this.entrada.receberTexto(`Você deseja alterar o nome do produto (S ou N): `)
        while (perNome.toUpperCase() != "S" || perNome.toUpperCase() != "N") {
            perNome = this.entrada.receberTexto(`Operação não entendida, digite de novo: `)
        }
        if (perNome.toUpperCase() == "S") {
            let NoNome = this.entrada.receberTexto(`Digite o novo nome do produto: `)
            produto.nome = NoNome
        }

        let perPreco = this.entrada.receberTexto(`Você deseja alterar o preço do produto (S ou N): `)
        while (perPreco.toUpperCase() != "S" || perPreco.toUpperCase() != "N") {
            perPreco = this.entrada.receberTexto(`Operação não entendida, digite de novo: `)
        }
        if (perPreco.toUpperCase() == "S") {
            let NoPreco = this.entrada.receberTexto(`Digite o novo preço do produto: `)
            produto.preco = NoPreco
        }
    }
}