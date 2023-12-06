var banners =
  ["os melhores do brasil","qualidade de prço baixo!"]; 
var bannersAtual= 0;

function trocarBanner(){
    bannersAtual = (bannersAtual + 1) % 2;
    document.querySelector('h2#mesagem').textContent = banners[bannersAtual];
}

  setInterval(trocarBanner, 2000);