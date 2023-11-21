import Entrada from "../io/entrada";
import Cliente from "../modelo/cliente";
import RG from "../modelo/rg";
import Telefone from "../modelo/telefone";
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

        let perNome = this.entrada.receberTexto(`Você deseja alterar o nome do cliente (S ou N): `)
        if (perNome.toUpperCase() == "S") {
            let NoNome = this.entrada.receberTexto(`Digite o novo nome do cliente: `)
            cliente.nome = NoNome
        }

        let perNomeSo = this.entrada.receberTexto(`Você deseja alterar o nome social do cliente (S ou N): `)
        if (perNomeSo.toUpperCase() == "S") {
            let NoNomeSo = this.entrada.receberTexto(`Digite o novo nome social do cliente: `)
            cliente.nomeSocial = NoNomeSo
        }

        let perGen = this.entrada.receberTexto(`Você deseja alterar o genêro do cliente (S ou N): `)
        if (perGen.toUpperCase() == "S") {
            let Gen = this.entrada.receberTexto(`Digite o genêro: `)
            cliente.genero = Gen
        }

        let perRG = this.entrada.receberTexto(`Você deseja adicionar mais um RG (S ou N): `)
        if (perRG.toUpperCase() == "S") {
            let qtdRg = this.entrada.receberNumero(`Digite quantos RG's você quer adicionar: `);
            for (let i = 0; i < qtdRg; i++) {
                let valorRg = this.entrada.receberTexto(`Por favor informe o número do RG: `);
                let dataRg = this.entrada.receberTexto(`Por favor informe a data de emissão do RG (dd/mm/yyyy): `);
                let partesDataRg = dataRg.split('/')
                let anoRg = new Number(partesDataRg[2].valueOf()).valueOf()
                let mesRg = new Number(partesDataRg[1].valueOf()).valueOf()
                let diaRg = new Number(partesDataRg[0].valueOf()).valueOf()
                let dataEmissaoRg = new Date(anoRg, mesRg, diaRg)
                partesDataRg = []
                let rg = new RG(valorRg, dataEmissaoRg);
                cliente.setRgs = rg
            }
        }

        let perTel = this.entrada.receberTexto(`Você deseja deletar um telefone (S ou N): `)
        if (perTel.toUpperCase() == "S") {
            let telDes = this.entrada.receberTexto(`Digite o número do telefone/celular desejado: `)

            cliente.delTel = telDes

            telDes = ``
            console.log(`Telefone apagado`)
        }
        perTel = ``

        perTel = this.entrada.receberTexto(`Você deseja editar um telefone/celular (S ou N): `)
        if (perTel.toUpperCase() == "S") {
            let telDes = this.entrada.receberTexto(`Digite o número do telefone/celular desejado: `)

            let NodddTel = this.entrada.receberTexto(`Por favor informe o novo DDD do seu telefone/celular: `);
            let NonumTel = this.entrada.receberTexto(`Por favor informe o novo número do seu telefone/celular: `);
            let NoTel = new Telefone(NodddTel, NonumTel);
            cliente.ediTel(telDes, NoTel)

            console.log(`Telefone editado`)
        }
        perTel = ``

        perTel = this.entrada.receberTexto(`Você deseja adicionar um telefone (S ou N): `)
        if (perTel.toUpperCase() == "S") {
            let qtdTel = this.entrada.receberNumero(`Digite quantos telefones/celulares você possui: `);
            for (let i = 0; i < qtdTel; i++) {
                let dddTel = this.entrada.receberTexto(`Por favor informe o DDD do seu novo telefone/celular: `);
                let numTel = this.entrada.receberTexto(`Por favor informe o número do seu novo telefone/celular: `);
                let telefone = new Telefone(dddTel, numTel);
                cliente.setTel = telefone
            }
        }
        perTel = ``
    }
}