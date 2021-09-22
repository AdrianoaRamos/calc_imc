const calcular= document.getElementById('calcular');

function imc () {
    const nome= document.getElementById('nome').value;
    const altura= document.getElementById('altura').value;
    const peso= document.getElementById('peso').value;
    const resultado= document.getElementById('resultado');

    if(nome !== '' && altura !== ''  && peso !== ''){
        
        const valorImc = (peso /(altura * altura)).toFixed(2);

        let classificação = "";

        if(valorImc < 18.5){
            classificação = 'abaixo do peso'
        }else if(valorImc <25){
            classificação = 'peso ideal, parabéns!!!'
        }else if(valorImc <30){
        classificação = 'levemente acima do peso'
        }else if(valorImc <35){
            classificação = 'com obesidade grau I'
        }else if(valorImc <40){
            classificação = 'com obesidade grau II'
        }else{
            classificação = 'com obesidade grau III. Cuidado!!!'
        }

        resultado.textContent = `${nome} seu IMC é ${valorImc}, você está ${classificação}`;
        


    }else{
        resultado.textContent = 'Preencha todos os campos!!!';
    }

}

calcular.addEventListener('click', imc);