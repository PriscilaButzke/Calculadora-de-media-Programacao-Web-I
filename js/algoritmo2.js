var 
    nome,n1,n2,media,faltas,presença,freq,res;

    nome= prompt("Informe seu nome: ")
    n1= Number.parseFloat (prompt("Informe a 1° nota: "))
    n2= Number.parseFloat (prompt("Informe a 2° nota: "))
    qth=Number.parseFloat(prompt("Informe a quantidade de aulas da disciplina: "))
    faltas= Number.parseFloat(prompt("Informe quantas faltas você teve: "))
    freq= ((qth - faltas)/qth) * 100

    media =(n1 + n2 )/2
    if(media>= 0 && media<=10){
        if(media>=6 && freq>=75){
            res = "Aprovado(a), parabéns!"
        }else{
            res=" Reprovado(a)!"
        }
        document.write( `Requisitos para aprovação:<br> 
        Nota final: igual ou maior que 6 <br> 
        Frequência: igual ou maior que 75% <br> 
        <br> 
        Olá ${nome} suas notas foram: <br> 
        Nota 1: ${n1}<br>
        Nota 2: ${n2}<br> 
        Média final: ${media.toFixed(2)} <br> 
        Quantidade de aulas da disciplina: ${qth}<br> 
        Número de faltas: ${faltas}<br> 
        Frequência: ${freq}% <br>
        Resultado do semestre: ${res}` );

    } else {
        res= "Notas digitadas inválidas, digite novamente"  
        document.write(res);  
    }