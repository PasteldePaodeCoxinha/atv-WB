export default class Produto {
    public nome: string
    public preco: number
    private comprado: number
    constructor(nome: string, preco: number) {
        this.nome = nome,
        this.preco = preco,
        this.comprado = 0
    }

    public get getComprado(): number {
        return this.comprado
    }
    public compradoMaisUm() {
        this.comprado = this.comprado + 1;
    }


}