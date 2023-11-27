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
        let nome = this.entrada.receberTexto(`Digite o nome de um cliente (Digite 0 para cancelar): `)
        if (nome == "0") {
            return
        }
        let Listacliente = new ListagemClientes(this.clientes)
        let cliente = Listacliente.getUmCliente(nome)
        while (cliente == undefined) {
            nome = this.entrada.receberTexto(`Esse cliente não existe, digite o nome de novo: `)
            cliente = Listacliente.getUmCliente(nome)
            if (nome == "0") {
                return
            }
        }

        let perNome = this.entrada.receberTexto(`Você deseja alterar o nome do cliente (S ou N): `)
        while (!"SN".includes(perNome.toUpperCase())) {
            perNome = this.entrada.receberTexto(`Operação não entendida, digite de novo: `)
        }
        if (perNome.toUpperCase() == "S") {
            let NoNome = this.entrada.receberTexto(`Digite o novo nome do cliente: `)
            cliente.nome = NoNome
        }

        let perNomeSo = this.entrada.receberTexto(`Você deseja alterar o nome social do cliente (S ou N): `)
        while (!"SN".includes(perNomeSo.toUpperCase())) {
            perNomeSo = this.entrada.receberTexto(`Operação não entendida, digite de novo: `)
        }
        if (perNomeSo.toUpperCase() == "S") {
            let NoNomeSo = this.entrada.receberTexto(`Digite o novo nome social do cliente: `)
            cliente.nomeSocial = NoNomeSo
        }

        let perGen = this.entrada.receberTexto(`Você deseja alterar o genêro do cliente (S ou N): `)
        while (!"SN".includes(perGen.toUpperCase())) {
            perGen = this.entrada.receberTexto(`Operação não entendida, digite de novo: `)
        }
        if (perGen.toUpperCase() == "S") {
            let Gen = this.entrada.receberTexto(`Digite o genêro: `)
            cliente.genero = Gen
        }

        let perRG = this.entrada.receberTexto(`Você deseja adicionar mais um RG (S ou N): `)
        while (!"SN".includes(perRG.toUpperCase())) {
            perRG = this.entrada.receberTexto(`Operação não entendida, digite de novo: `)
        }
        if (perRG.toUpperCase() == "S") {
            let qtdRg = this.entrada.receberNumero(`Digite quantos RG's você quer adicionar: `);
            while (qtdRg + (27 - cliente.rgs.length) > 27) {
                qtdRg = this.entrada.receberNumero(`Quantidade de RG inválida, digite de novo: `)
            }
            for (let i = 0; i < qtdRg; i++) {
                let valorRg = this.entrada.receberTexto(`Por favor informe o número do RG: `);
                while ((valorRg.split.length != 9 || valorRg == "") && !+valorRg) {
                    valorRg = this.entrada.receberTexto(`RG inválido digite denovo: `)
                }
                let dataRg = this.entrada.receberTexto(`Por favor informe a data de emissão do RG (dd/mm/yyyy): `);
                while (dataRg.split("/").length < 3 || dataRg.split("/").length > 3 || dataRg == "") {
                    dataRg = this.entrada.receberTexto(`Data invalidar, digite de novo (dd/mm/yyyy): `)
                }
                let partesDataRg = dataRg.split('/')
                let anoRg = new Number(partesDataRg[2].valueOf()).valueOf()
                let mesRg = new Number(partesDataRg[1].valueOf()).valueOf()
                while (!(+mesRg in Array.from(Array(5).keys()).map(x => x + 1))) {
                    mesRg = this.entrada.receberNumero(`Mês inválido digite de novo: `)
                }
                let diaRg = new Number(partesDataRg[0].valueOf()).valueOf()
                while (diaRg > 31 || diaRg < 1) {
                    diaRg = this.entrada.receberNumero(`Dia inválido, digite de novo: `)
                }
                let dataEmissaoRg = new Date(anoRg, mesRg, diaRg)
                partesDataRg = []
                let rg = new RG(valorRg, dataEmissaoRg);
                cliente.setRgs = rg
            }
        }

        let perTel = this.entrada.receberTexto(`Você deseja deletar um telefone (S ou N): `)
        while (!"SN".includes(perTel.toUpperCase())) {
            perTel = this.entrada.receberTexto(`Operação não entendida, digite de novo: `)
        }
        if (perTel.toUpperCase() == "S") {
            let telDes = this.entrada.receberTexto(`Digite o número do telefone/celular desejado: `)

            cliente.delTel = telDes

            telDes = ``
            console.log(`Telefone apagado`)
        }
        perTel = ``

        perTel = this.entrada.receberTexto(`Você deseja editar um telefone/celular (S ou N): `)
        while (!"SN".includes(perTel.toUpperCase())) {
            perTel = this.entrada.receberTexto(`Operação não entendida, digite de novo: `)
        }
        if (perTel.toUpperCase() == "S") {
            let telDes = this.entrada.receberTexto(`Digite o número do telefone/celular desejado: `)

            let NodddTel = this.entrada.receberTexto(`Por favor informe o novo DDD do seu telefone/celular: `);
            while (NodddTel.split.length != 2 || !+NodddTel) {
                NodddTel = this.entrada.receberTexto(`DDD inválido, digite de novo: `)
            }
            let NonumTel = this.entrada.receberTexto(`Por favor informe o novo número do seu telefone/celular: `);
            while (NonumTel.split.length != 9 || !+NonumTel) {
                NonumTel = this.entrada.receberTexto(`Número inválido, digite de novo: `)
            }
            let NoTel = new Telefone(NodddTel, NonumTel);
            cliente.ediTel(telDes, NoTel)

            console.log(`Telefone editado`)
        }
        perTel = ``

        perTel = this.entrada.receberTexto(`Você deseja adicionar um telefone (S ou N): `)
        while (!"SN".includes(perTel.toUpperCase())) {
            perTel = this.entrada.receberTexto(`Operação não entendida, digite de novo: `)
        }
        if (perTel.toUpperCase() == "S") {
            let qtdTel = this.entrada.receberNumero(`Digite quantos telefones/celulares você possui: `);
            for (let i = 0; i < qtdTel; i++) {
                let dddTel = this.entrada.receberTexto(`Por favor informe o DDD do seu telefone/celular: `);
                while (dddTel.split.length != 2 || !+dddTel) {
                    dddTel = this.entrada.receberTexto(`DDD inválido, digite de novo: `)
                }
                let numTel = this.entrada.receberTexto(`Por favor informe o número do seu telefone/celular: `);
                while (numTel.split.length != 9 || !+numTel) {
                    numTel = this.entrada.receberTexto(`Número inválido, digite de novo: `)
                }
                let telefone = new Telefone(dddTel, numTel);
                cliente.setTel = telefone
            }
        }
        perTel = ``
    }
}