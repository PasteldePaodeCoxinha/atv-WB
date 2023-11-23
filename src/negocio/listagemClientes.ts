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
            console.log(`------------------------------------------------------`);
            console.log(`Nome: ` + cliente.nome);
            console.log(`Nome social: ` + cliente.nomeSocial);
            console.log(`Genêro: ` + cliente.genero);
            console.log(`CPF: ` + cliente.getCpf.getValor);
            cliente.getRgs.forEach(rg => {
                console.log(`RG: ` + rg.getValor)
            });
            cliente.getTelefones.forEach(tel => {
                console.log(`Telefone/celular: ` + tel.geTelCompleto)
            });

            console.log(`-----------PRODUTOS CONSUMIDOS-----------`);
            cliente.getProdutosConsumidos.forEach(pro => {
                console.log(`${pro.nome}`);
            });

            console.log(`-----------SERVIÇOS CONSUMIDOS-----------`);
            cliente.getServicosConsumidos.forEach(ser => {
                console.log(`${ser.nome}`);
            });

            console.log(`\nTotal gasto: `);
            console.log(`R$${cliente.getProdutosConsumidos.reduce((x, y) => x + y.preco, 0)
                +
                cliente.getServicosConsumidos.reduce((x, y) => x + y.preco, 0)}`);

            console.log(`------------------------------------------------------`);
        });
        console.log(`\n`);
    }

    public getUmCliente(nome: String) {
        let cliente
        for (let cli of this.clientes) {
            if (cli.nome == nome) {
                cliente = cli
                break
            }
        }
        return cliente
    }

    public listaProQTD(rev: boolean) {
        let listCli = this.clientes.slice(0, 10).sort(function (a, b) {
            return (!rev) ? b.getProdutosConsumidos.length - a.getProdutosConsumidos.length
                : a.getProdutosConsumidos.length - b.getProdutosConsumidos.length
        })
        if (listCli.length > 10) {
            listCli = listCli.slice(0, 10)
        }
        listCli.forEach((c) => {
            console.log(`\nNome: ${c.nome}`);
            console.log(`Genêro: ${c.genero}`);
            console.log(`Quantidade de produtos consumidos: ${c.getProdutosConsumidos.length}`);
            console.log(`------------------------------------------------------`);
        })
    }

    public listaSerQTD(rev) {
        let listCli = this.clientes.slice(0, 10).sort(function (a, b) {
            return (!rev) ? b.getServicosConsumidos.length - a.getServicosConsumidos.length
                : a.getServicosConsumidos.length - b.getServicosConsumidos.length
        })
        if (listCli.length > 10) {
            listCli = listCli.slice(0, 10)
        }
        listCli.forEach((c) => {
            console.log(`\nNome: ${c.nome}`);
            console.log(`Genêro: ${c.genero}`);
            console.log(`Quantidade de serviços consumidos: ${c.getServicosConsumidos.length}`);
            console.log(`------------------------------------------------------`);
        })
    }

    public listaGasto() {
        let listCli = this.clientes.slice(0, 5).sort(function (a, b) {
            return (b.getProdutosConsumidos.reduce((x, y) => x
                +
                y.preco, 0) + b.getServicosConsumidos.reduce((x, y) => x + y.preco, 0))
                -
                (a.getProdutosConsumidos.reduce((x, y) => x
                    +
                    y.preco, 0) + a.getServicosConsumidos.reduce((x, y) => x + y.preco, 0))
        })

        listCli.forEach((c) => {
            console.log(`\nNome: ${c.nome}`)
            console.log(`Genêro: ${c.genero}`)
            console.log(`Total gasto: `);
            console.log(`R$${c.getProdutosConsumidos.reduce((x, y) => x + y.preco, 0)
                +
                c.getServicosConsumidos.reduce((x, y) => x + y.preco, 0)}`);
            console.log(`------------------------------------------------------`);
        })
    }
}