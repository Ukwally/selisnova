function showmenu(){
    document.getElementById('menu-list').classList.toggle('hidden-menu');
    document.getElementById('close-menu').classList.toggle('hidden')
    document.getElementById('open-menu').classList.toggle('hidden')
}

document.addEventListener('DOMContentLoaded', () => {
    "use strict";

  const selectHeader = document.querySelector('#header');
  if (selectHeader) {
    document.addEventListener('scroll', () => {
      window.scrollY > 100 ? selectHeader.classList.add('sticked') : selectHeader.classList.remove('sticked');
      window.scrollY > 100 ? document.getElementById('menu-list').style="top:86px" : document.getElementById('menu-list').style="top:130";
      window.scrollY > 100 ? document.getElementById('top').classList.add('visible') : document.getElementById('top').classList.remove('visible');
    });
  }
});

function extender(valor){  
    if (valor === '1'){
        document.getElementById('faq1').classList.toggle('scrollOn');
        document.getElementById('chevron').classList.toggle('trasY');
    }else if(valor === '2'){
        document.getElementById('faq2').classList.toggle('scrollOn');
        document.getElementById('chevron').classList.toggle('trasY');
    }else if(valor === '3'){
        document.getElementById('faq3').classList.toggle('scrollOn');
        document.getElementById('chevron').classList.toggle('trasY');
    }else if (valor === '4'){
        document.getElementById('faq4').classList.toggle('scrollOn');
        document.getElementById('chevron').classList.toggle('trasY');
    }else if (valor === '5'){
        document.getElementById('faq5').classList.toggle('scrollOn');
        document.getElementById('chevron').classList.toggle('trasY');
    }else if(valor === '6'){
        document.getElementById('faq6').classList.toggle('scrollOn');
        document.getElementById('chevron').classList.toggle('trasY');
    }else if (valor === '7'){
        document.getElementById('faq7').classList.toggle('scrollOn');
        document.getElementById('chevron').classList.toggle('trasY');
    }
}


// para adicionar animação qunado o evento vor scroll
window.addEventListener('scroll', function() {
    const boxes = document.querySelectorAll('.animado');
    
    // Verifica se o elemento está visível na tela
    boxes.forEach(function(box) {
        const boxPosition = box.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.5;  // O fator 1.5 vai fazer o efeito acontecer antes de estar no centro total
        
        // Se o topo do elemento estiver dentro da janela de visualização
        if (boxPosition < screenPosition) {
            box.classList.add('visible');
        }
    });
});

//Para adicionar animação ao banner-text quando a pagina for carregada
window.addEventListener('DOMContentLoaded', function() {
    const bannertext = document.querySelector('#banner-text');
    if (bannertext) {
        bannertext.classList.add('visible');
    }
});



/*

// script.js
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section');
    const serviceCards = document.querySelectorAll('.servico-card');
    const detailCards = document.querySelectorAll('.detalhe-card');
    const aboutContent = document.querySelectorAll('.about-body-content-text-set');

    // Função para verificar se o elemento está visível
    function checkVisibility(element) {
        const rect = element.getBoundingClientRect();
        return rect.top <= window.innerHeight * 0.75; // Quando o topo do elemento estiver 75% dentro da tela
    }

    sections.forEach(function(section) {
        if (checkVisibility(section)) {
            section.classList.add('visible');
        }
    });

    serviceCards.forEach(function(card) {
        if (checkVisibility(card)) {
            card.classList.add('visible');
        }
    });

    detailCards.forEach(function(card) {
        if (checkVisibility(card)) {
            card.classList.add('visible');
        }
    });

    aboutContent.forEach(function(content) {
        if (checkVisibility(content)) {
            content.classList.add('visible');
        }
    });
});


*/



