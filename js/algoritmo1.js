/* Calculadora de média */
var 
    nome,n1,n2,n3,n4,media,res;

    nome= prompt("Informe seu nome: ")
    n1= Number.parseFloat (prompt("Informe a 1° nota: "))
    n2= Number (prompt("Informe a 2° nota: "))
    n3= Number (prompt("Informe a 3° nota: "))
    n4= Number (prompt("Informe a 4° nota: "))
    media =(n1 + n2 + n3 + n4)/4
    if(media>= 0 && media<=10){
        if(media>=7){
            res = "Aprovado(a), parabéns!"
        }else{
            res=" Reprovado(a)!"
        }
        document.write( `Olá ${nome} suas notas do ano foram <br> 
        Nota 1: ${n1}<br>
        Nota 2: ${n2}<br> 
        Nota 3:${n3}<br>
        Nota 4: ${n4}<br>
        Média final: ${media.toFixed(2)} <br> 
        Resultado do semestre: ${res}` );

    } else {
        res= "Notas digitadas inválidas, digite novamente"  
        document.write(res);  
    }
     /*to.fixed formata os campos depois da virgula*/ 