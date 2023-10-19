let n1, n2
let resultado
alert("-----divisão-----")
n1 = prompt("Digite o numerador....:")
n2 = prompt("Digite o denominador...:")
resultado =  Number(n1) / Number(n2)
if(n2 == "0"){

    alert("Não é possível dividir por zero.")
}
else{
    resultado =  Number(n1) / Number(n2)

alert(`${n1} dividido ${n2} é  ${resultado} `)

}
