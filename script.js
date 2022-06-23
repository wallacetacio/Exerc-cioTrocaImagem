let trocaDeImagem = document.getElementById('img');
const btnTroca = document.getElementById('trocar');
const imagens = ['16_27_01_45_file.jpeg','bolsonaro-trump.jpg','download.jpg','cheerleaders_saopaulo.jpg'];
let vezes = -1;

btnTroca.addEventListener('click',(event) => {
    event.preventDefault();
    vezes++;
    if(vezes === 4){
        vezes = 0;
    }
    proximaImagem();
    });
    
    function proximaImagem() {
        trocaDeImagem.innerHTML = `
        <img class='imagem${vezes}' src="${imagens[vezes]}" alt="imgaem1">
        `;
    }
     
       
    