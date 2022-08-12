const dados = [
    {
        "date": "2040-06-22T19:54:23.298Z",
        "customer": {
            "first_name": "Gael",
            "last_name": "Melo",
            "phone": "(62) 11618-7811"
        },
        "price": 869,
        "amount": 6,
        "store": {
            "name": "Reis - Silva",
            "phone": "(35) 1321-5192"
        },
        "type": "OUT"
    },
    {
        "date": "2051-10-25T18:19:43.343Z",
        "customer": {
            "first_name": "Joaquim",
            "last_name": "Carvalho",
            "phone": "+55 (90) 3269-5979"
        },
        "price": 2133,
        "amount": 4,
        "store": {
            "name": "Braga - Barros",
            "phone": "(63) 1476-5542"
        },
        "type": "IN"
    },
    {
        "date": "2089-07-29T05:55:55.219Z",
        "customer": {
            "first_name": "Sara",
            "last_name": "Braga",
            "phone": "(17) 3172-7493"
        },
        "price": 1810,
        "amount": 9,
        "store": {
            "name": "Albuquerque - Santos",
            "phone": "(89) 22435-7770"
        },
        "type": "OUT"
    },
    {
        "date": "2004-04-30T09:39:36.325Z",
        "customer": {
            "first_name": "Paula",
            "last_name": "Saraiva",
            "phone": "(03) 17859-2794"
        },
        "price": 3122,
        "amount": 3,
        "store": {
            "name": "Carvalho - Albuquerque",
            "phone": "(49) 6188-6586"
        },
        "type": "IN"
    },
    {
        "date": "2023-04-10T03:52:04.113Z",
        "customer": {
            "first_name": "Mércia",
            "last_name": "Reis",
            "phone": "(11) 2373-8129"
        },
        "price": 435,
        "amount": 5,
        "store": {
            "name": "Martins LTDA",
            "phone": "(21) 26574-9154"
        },
        "type": "OUT"
    },
    {
        "date": "2080-02-02T00:41:59.316Z",
        "customer": {
            "first_name": "Paulo",
            "last_name": "Franco",
            "phone": "(17) 44386-5050"
        },
        "price": 3940,
        "amount": 4,
        "store": {
            "name": "Costa, Melo and Moreira",
            "phone": "(55) 3553-4099"
        },
        "type": "OUT"
    },
    {
        "date": "2075-01-04T12:57:06.544Z",
        "customer": {
            "first_name": "Dalila",
            "last_name": "Carvalho",
            "phone": "+55 (11) 1408-4604"
        },
        "price": 3484,
        "amount": 9,
        "store": {
            "name": "Santos, Barros and Carvalho",
            "phone": "+55 (74) 4345-3798"
        },
        "type": "IN"
    },
    {
        "date": "2086-02-20T01:40:14.019Z",
        "customer": {
            "first_name": "Benício",
            "last_name": "Costa",
            "phone": "(82) 1546-6511"
        },
        "price": 1148,
        "amount": 8,
        "store": {
            "name": "Franco EIRELI",
            "phone": "+55 (67) 8598-1307"
        },
        "type": "OUT"
    },
    {
        "date": "2074-02-23T23:17:43.615Z",
        "customer": {
            "first_name": "Eduarda",
            "last_name": "Moreira",
            "phone": "(38) 84465-2722"
        },
        "price": 3183,
        "amount": 5,
        "store": {
            "name": "Costa, Nogueira and Xavier",
            "phone": "+55 (65) 5516-9289"
        },
        "type": "OUT"
    },
    {
        "date": "2064-08-16T14:25:59.891Z",
        "customer": {
            "first_name": "Antonella",
            "last_name": "Carvalho",
            "phone": "(96) 9063-0854"
        },
        "price": 933,
        "amount": 9,
        "store": {
            "name": "Moreira - Pereira",
            "phone": "(40) 74978-1053"
        },
        "type": "OUT"
    },
    {
        "date": "2056-06-01T13:26:35.494Z",
        "customer": {
            "first_name": "Melissa",
            "last_name": "Moreira",
            "phone": "+55 (75) 6881-3130"
        },
        "price": 4627,
        "amount": 1,
        "store": {
            "name": "Reis - Barros",
            "phone": "+55 (24) 8766-2785"
        },
        "type": "IN"
    },
    {
        "date": "2085-12-09T19:12:31.263Z",
        "customer": {
            "first_name": "Cecília",
            "last_name": "Saraiva",
            "phone": "(21) 97300-4850"
        },
        "price": 1219,
        "amount": 9,
        "store": {
            "name": "Oliveira, Moreira and Braga",
            "phone": "(17) 6652-7898"
        },
        "type": "OUT"
    },
    {
        "date": "2076-03-08T03:29:46.912Z",
        "customer": {
            "first_name": "Pedro",
            "last_name": "Braga",
            "phone": "(05) 60588-7884"
        },
        "price": 2471,
        "amount": 5,
        "store": {
            "name": "Macedo S.A.",
            "phone": "(22) 5217-8562"
        },
        "type": "IN"
    },
    {
        "date": "2024-05-16T22:02:28.522Z",
        "customer": {
            "first_name": "Norberto",
            "last_name": "Xavier",
            "phone": "(37) 4996-4228"
        },
        "price": 2960,
        "amount": 10,
        "store": {
            "name": "Macedo S.A.",
            "phone": "+55 (84) 9325-8306"
        },
        "type": "IN"
    },
    {
        "date": "1993-08-16T12:42:14.891Z",
        "customer": {
            "first_name": "Paulo",
            "last_name": "Oliveira",
            "phone": "+55 (99) 3770-0488"
        },
        "price": 1871,
        "amount": 1,
        "store": {
            "name": "Moraes EIRELI",
            "phone": "(84) 9492-7821"
        },
        "type": "IN"
    },
    {
        "date": "2083-05-08T00:58:57.309Z",
        "customer": {
            "first_name": "Maria Alice",
            "last_name": "Braga",
            "phone": "+55 (01) 5550-5785"
        },
        "price": 1259,
        "amount": 7,
        "store": {
            "name": "Nogueira, Santos and Santos",
            "phone": "(11) 15167-9939"
        },
        "type": "OUT"
    },
    {
        "date": "2001-02-23T17:06:41.667Z",
        "customer": {
            "first_name": "Vitória",
            "last_name": "Braga",
            "phone": "+55 (03) 0630-6868"
        },
        "price": 2096,
        "amount": 7,
        "store": {
            "name": "Barros EIRELI",
            "phone": "(32) 62096-6040"
        },
        "type": "OUT"
    },
    {
        "date": "2056-06-28T01:39:24.600Z",
        "customer": {
            "first_name": "Cecília",
            "last_name": "Albuquerque",
            "phone": "(28) 87345-8215"
        },
        "price": 1329,
        "amount": 9,
        "store": {
            "name": "Silva Comércio",
            "phone": "+55 (99) 8915-3722"
        },
        "type": "IN"
    },
    {
        "date": "2023-01-25T11:31:37.933Z",
        "customer": {
            "first_name": "Carla",
            "last_name": "Costa",
            "phone": "(39) 22281-2542"
        },
        "price": 4823,
        "amount": 10,
        "store": {
            "name": "Xavier, Santos and Martins",
            "phone": "(34) 2152-7682"
        },
        "type": "IN"
    },
    {
        "date": "2086-12-11T08:09:00.188Z",
        "customer": {
            "first_name": "Felipe",
            "last_name": "Barros",
            "phone": "(66) 3292-4608"
        },
        "price": 2072,
        "amount": 9,
        "store": {
            "name": "Carvalho S.A.",
            "phone": "(47) 9991-1596"
        },
        "type": "OUT"
    },
    {
        "date": "2065-02-17T16:54:02.046Z",
        "customer": {
            "first_name": "Marcelo",
            "last_name": "Moraes",
            "phone": "(40) 34436-8802"
        },
        "price": 928,
        "amount": 3,
        "store": {
            "name": "Braga - Xavier",
            "phone": "(85) 1634-8826"
        },
        "type": "OUT"
    },
    {
        "date": "2006-04-26T19:09:10.742Z",
        "customer": {
            "first_name": "Eduarda",
            "last_name": "Reis",
            "phone": "+55 (74) 8932-3383"
        },
        "price": 996,
        "amount": 6,
        "store": {
            "name": "Batista, Batista and Batista",
            "phone": "(21) 7305-0921"
        },
        "type": "IN"
    },
    {
        "date": "2059-11-05T10:35:57.291Z",
        "customer": {
            "first_name": "Larissa",
            "last_name": "Nogueira",
            "phone": "(47) 2028-0258"
        },
        "price": 2691,
        "amount": 8,
        "store": {
            "name": "Barros, Silva and Nogueira",
            "phone": "(94) 6664-8316"
        },
        "type": "IN"
    },
    {
        "date": "1993-03-27T05:10:09.938Z",
        "customer": {
            "first_name": "Liz",
            "last_name": "Pereira",
            "phone": "+55 (52) 2690-3736"
        },
        "price": 1651,
        "amount": 9,
        "store": {
            "name": "Costa Comércio",
            "phone": "+55 (65) 6786-6654"
        },
        "type": "IN"
    },
    {
        "date": "2084-07-05T03:56:36.652Z",
        "customer": {
            "first_name": "Aline",
            "last_name": "Albuquerque",
            "phone": "(93) 34243-2705"
        },
        "price": 3006,
        "amount": 10,
        "store": {
            "name": "Souza, Souza and Santos",
            "phone": "(84) 0551-1878"
        },
        "type": "OUT"
    },
    {
        "date": "2054-01-25T01:55:39.370Z",
        "customer": {
            "first_name": "Murilo",
            "last_name": "Franco",
            "phone": "(84) 37239-7481"
        },
        "price": 3976,
        "amount": 8,
        "store": {
            "name": "Costa Comércio",
            "phone": "(87) 03103-1684"
        },
        "type": "OUT"
    },
    {
        "date": "2032-04-15T20:29:47.775Z",
        "customer": {
            "first_name": "Davi Lucca",
            "last_name": "Carvalho",
            "phone": "+55 (98) 2553-9419"
        },
        "price": 1241,
        "amount": 6,
        "store": {
            "name": "Carvalho - Xavier",
            "phone": "(39) 56667-7588"
        },
        "type": "IN"
    },
    {
        "date": "2072-04-03T22:50:56.440Z",
        "customer": {
            "first_name": "Sílvia",
            "last_name": "Saraiva",
            "phone": "(53) 7084-4187"
        },
        "price": 1260,
        "amount": 1,
        "store": {
            "name": "Macedo, Moreira and Batista",
            "phone": "(38) 4001-4345"
        },
        "type": "OUT"
    },
    {
        "date": "2046-12-03T14:24:54.948Z",
        "customer": {
            "first_name": "Karla",
            "last_name": "Saraiva",
            "phone": "(76) 34461-5554"
        },
        "price": 2236,
        "amount": 2,
        "store": {
            "name": "Santos - Nogueira",
            "phone": "(80) 82087-3830"
        },
        "type": "IN"
    },
    {
        "date": "2050-10-08T03:47:42.933Z",
        "customer": {
            "first_name": "Sílvia",
            "last_name": "Carvalho",
            "phone": "(13) 1941-1733"
        },
        "price": 1242,
        "amount": 3,
        "store": {
            "name": "Carvalho - Santos",
            "phone": "(87) 55602-9319"
        },
        "type": "IN"
    },
    {
        "date": "2037-04-18T04:19:57.953Z",
        "customer": {
            "first_name": "Anthony",
            "last_name": "Silva",
            "phone": "+55 (66) 2660-9606"
        },
        "price": 3159,
        "amount": 3,
        "store": {
            "name": "Martins LTDA",
            "phone": "(23) 8164-9085"
        },
        "type": "IN"
    }
]

const init = () => {
    preencherSelect()
    preencherTabela(dados)
}

const preencherSelect = () => {
    let variavelSelect = '';

    const newArraySelect = [];

    dados.forEach((dados) => {
        let type;
        if(dados.type === 'OUT') type = 'Saída'
        if(dados.type === 'IN') type = 'Entrada'

        if(type === 'Saída' && !newArraySelect.includes(`<option class="opt" value="${dados.type}">${type}</option>`)){
            newArraySelect.push(`<option class="opt" value="${dados.type}">${type}</option>`);

        }
        else if(type === 'Entrada' && !newArraySelect.includes(`<option class="opt" value="${dados.type}">${type}</option>`)){
            newArraySelect.push(`<option class="opt" value="${dados.type}">${type}</option>`);
            
        }
        
    });
    variavelSelect += newArraySelect.toString()
    document.getElementById('select').innerHTML += variavelSelect;
};

const preencherTabela = (array) => {
    let variavelTabela = '';
    const tabela = document.getElementById('tabelaDeInformacoes')

    if (!array.length) {
        tabela.innerHTML = '<tr><td colspan="5" style="font-size: 18px; text-align: center;">nenhuma guia encontrada</td></tr>'
        return
    }
    
    array.forEach(element => {
        let realType
        if(element.type == "OUT"){
            realType = 'Saída'
        }
        else{
            realType = 'Entrada'
        }
        dataFormatada = new Date(element.date).toLocaleDateString('pt-BR');
        precoUnitarioFormatado = element.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
        precoTotalFormatado = ((+element.price)*(+element.amount)).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
        variavelTabela += ` 
        <tr>
            <td>${dataFormatada}</td>
            <td>${element.customer.first_name + " " + element.customer.last_name}</td>
            <td>${element.customer.phone}</td>
            <td>${element.store.name}</td>
            <td>${element.store.phone}</td>
            <td>${realType}</td>
            <td>${element.amount}</td>
            <td>${precoUnitarioFormatado}</td>
            <td>${precoTotalFormatado}</td>
        </tr>`
    });
    tabela.innerHTML = variavelTabela;
    financeInformations(dados)
};

const buscarNaTabela = () => {
    const select = document.getElementById("select")

    if (!select.value) {
        preencherTabela(dados)
        return
    }
    const selectFilter = dados.filter(element => {
        let valid = false

        if (select.value && element.type === select.value) {
            valid = true
        }
        return valid
    })
    preencherTabela(selectFilter)
    financeInformations(selectFilter)
}

const financeIN = document.getElementById('financeIN');
const financeOUT = document.getElementById('financeOUT');
const financeBalance = document.getElementById('financeBalance');

const financeInformations = (array) => {
    let totalFinanceIN = 0
    let totalFinanceOUT = 0
    let realType;
    array.forEach(element => {
        realType = element.type;
        if(realType === "IN"){
            totalFinanceIN += +element.price;
            realType = 'Entrada'
        }
        else if(realType === "OUT"){
            totalFinanceOUT += +element.price;
            realType = "Saída";
        }
        
    dateFormat = moment(element.date).format('DD/MM/YYYY');
    })
    const balanceAmount = totalFinanceIN - totalFinanceOUT;


    financeIN.innerHTML = `Total de entradas: ${(+totalFinanceIN).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`
    financeOUT.innerHTML = `Total de saídas: ${(+totalFinanceOUT).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`
    financeBalance.innerHTML = `Saldo: ${(+balanceAmount).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`
    

}

init()