const products = {
    "A":{
        type: "A",
        value: 270
    },
    "B":{
        type: "B",
        value: 340
    },
    "C":{
        type: "C",
        value: 390
    },
}

const coins = [100, 50, 10]

const selectProduct = prompt(`Select product:\nA.$${products.A.value}\nB.$${products.B.value}\nC.$${products.C.value}\n`)
const money = prompt("pay: ")

if (money < products[selectProduct].value){
    alert("you need more money")
}else{
    let valueReturn = money - products[selectProduct].value
    if (valueReturn > 0){
        let coins_100 = valueReturn%100
        let coins_50 = valueReturn%50 
        let coins_10 = valueReturn%10
        alert(`El cambio es de ${coins_100} monedas de 100, ${coins_50} monedas de 50 y ${coins_10} monedas de 10.`)
    }else{
        alert("Complete tanks")
    }
}


