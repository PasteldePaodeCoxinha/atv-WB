import Entrada from "../io/entrada";
import Cliente from "../modelo/cliente";
import Deleta from "./deleta";

export default class DeletaCliente extends Deleta {
    private clientes: Array<Cliente>
    private entrada: Entrada
    constructor(clientes: Array<Cliente>) {
        super()
        this.clientes = clientes
        this.entrada = new Entrada()
    }

    public deletar() {
        let nome = this.entrada.receberTexto(`Digite o nome do cliente: `)
        return this.clientes.filter((e) => e.nome != nome)
    }
}