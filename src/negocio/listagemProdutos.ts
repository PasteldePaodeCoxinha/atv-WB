import Produto from "../modelo/produto";
import Listagem from "./listagem";

export default class ListagemProdutos extends Listagem {
    private produtos: Array<Produto>
    constructor(produtos: Array<Produto>) {
        super()
        this.produtos = produtos
    }
    public listar(): void {
        console.log(`\nLista de todos os produtos:`);
        this.produtos.forEach(produto => {
            console.log(`Nome: ` + produto.nome);
            console.log(`Preço: R$` + produto.preco);
            console.log(`--------------------------------------`);
        });
        console.log(`\n`);
    }

    public getUmProduto(nome: String) {
        let produto
        for (let pro of this.produtos) {
            if (pro.nome == nome) {
                produto = pro
                break
            }
        }
        return produto
    }

    public maisConsu() {
        let lisPro = this.produtos.slice(0).sort((a, b) => b.getComprado[2] - a.getComprado[2])
        lisPro.forEach((p) => {
            console.log(`\nProduto: ${p.nome}`);
            console.log(`Preço: ${p.preco}`);
            console.log(`Comprado por ${p.getComprado[2]} pessoas`);
            console.log(`------------------------------------------------------`);
        })
    }
}