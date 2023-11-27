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
        let nome = this.entrada.receberTexto(`Digite o nome do cliente (Digite 0 para cancelar): `)
        if (nome == "0") {
            return
        }
        let cliente = this.clientes.filter((e) => e.nome == nome)
        while (cliente.length < 0) {
            nome = this.entrada.receberTexto(`Esse cliente não existe, digite de novo: `)
            cliente = this.clientes.filter((e) => e.nome == nome)
        }
        return this.clientes.filter((e) => e.nome != nome)
    }
}