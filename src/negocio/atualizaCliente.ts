import Entrada from "../io/entrada";
import Cliente from "../modelo/cliente";
import Empresa from "../modelo/empresa";
import Atualiza from "./atualiza";
import ListagemClientes from "./listagemClientes";

export default class AtualizaCliente extends Atualiza {
    private clientes: Array<Cliente>
    private entrada: Entrada
    constructor(clientes: Array<Cliente>) {
        super()
        this.clientes = clientes
        this.entrada = new Entrada()
    }
    public atualizar(): void {
        let nome = this.entrada.receberTexto(`Digite o nome de um cliente: `)
        let Listacliente = new ListagemClientes(this.clientes)
        let cliente = Listacliente.getUmCliente(nome)
        let NoNome = this.entrada.receberTexto(`Digite o novo nome do clinete: `)
        let NoNomeSo = this.entrada.receberTexto(`Digite o novo nome social do cliente: `)
        cliente.nome = NoNome
        cliente.nomeSocial = NoNomeSo
    }
}