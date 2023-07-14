(function() {
    function incrementNumber(node,nb) {
  
      let sectionNumbers = document.querySelector('.sectionNumbers');   
      let sectionCounter = 0;
      let numbers = document.querySelector("."+node);
  
      let n = nb;
      let cpt = 0; 
      let delay = 1000; 
      let delta = Math.ceil((delay * 15000) / n);
  
      function countdownNumbers() {
        numbers.innerHTML = ++cpt;
        if( cpt < n ) { 
          setTimeout(countdownNumbers, numbers);
        }
      }
  
      document.addEventListener('scroll', function() {
        sectionCounter++;
        setTimeout(1000);        
        if(sectionCounter == 1) {
          setTimeout(countdownNumbers, numbers);
        }
      }), {passive:true};
    }
    setTimeout(function(){ 
      incrementNumber("number1", 19);
      incrementNumber("number2", 100);
      incrementNumber("number3", 12);
    }, 2000);
  })();
  
  function switchButton() {
    const buttonBackground = document.querySelector('.switch-background');
    const button = document.querySelector('.switch');
    buttonBackground.addEventListener('click', () => {    
      button.classList.toggle('right');
      ChangeSlide(1);
      buttonBackground.classList.toggle('blue');
    }); 
  }
  
  var slide = new Array("img/produit.png", "img/service.png");
  var numero = 0;
  
  function ChangeSlide(sens) {
      numero = numero + sens;
      if (numero < 0)
          numero = slide.length - 1;
      if (numero > slide.length - 1)
          numero = 0;
      document.getElementById("slide").src = slide[numero];
  }