import Cliente from "../modelo/cliente";
import Listagem from "./listagem";

export default class ListagemClientes extends Listagem {
    private clientes: Array<Cliente>
    constructor(clientes: Array<Cliente>) {
        super()
        this.clientes = clientes
    }
    public listar(): void {
        console.log(`\nLista de todos os clientes:`);
        this.clientes.forEach(cliente => {
            console.log(`Nome: ` + cliente.nome);
            console.log(`Nome social: ` + cliente.nomeSocial);
            console.log(`Genêro: ` + cliente.genero);
            console.log(`CPF: ` + cliente.getCpf.getValor);
            cliente.getRgs.forEach(rg => {
                console.log(`RG: ` + rg.getValor)
            });
            console.log(`--------------------------------------`);
        });
        console.log(`\n`);
    }

    public getUmCliente(nome: String){
        let cliente
        for (let cli of this.clientes) {
            if (cli.nome == nome) {
                cliente = cli
                break
            }
        }
        return cliente
    }
}