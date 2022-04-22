  let right = document.querySelectorAll('#right'); 
  let left = document.querySelectorAll('#left'); 
  let p = document.querySelector('p'); 
  let amount2 = document.getElementById('amount2'); 
  let amount1 = document.getElementById('amount1'); 
  let button = document.querySelectorAll('button') 
  
  let cur = "AZN"; 
  let currency = "RUB" ; 
  
  right.forEach(event => { 
      event.addEventListener('click', function(){ 
          cur = this.innerText 
          getvalue() 
      })  
  }); 
  
  left.forEach(event => { 
      event.addEventListener('click', function(){ 
          currency = this.innerText 
          getvalue() 
      })  
  }); 
  
  amount1.addEventListener("keyup", function(){
      getvalue()
  })

  function different(){
      amount1.addEventListener("keyup", function(){
          amount2.value = amount1.value * out
      })
  };
  function equal(){
    amount1.addEventListener("keyup", function(){
        amount2.value = amount1.value
    })
  };

  const getvalue = async () => { 
      let out; 
      await fetch(`https://api.exchangerate.host/latest?base=${currency}&symbols=${cur}`) 
      .then(response => response.json()) 
      .then((data) => { 
          out = Object.values(data.rates)[0] 
          console.log(data) 
      }) 
      if ((cur == 'RUB') && (currency == 'RUB')) { 
          amount2.value = amount1.value 
          equal()
      } 
      if ((cur == 'RUB') && (currency == 'EUR')) { 
          amount2.value = amount1.value * out 
          different()
      } 
      if ((cur == 'RUB') && (currency == 'USD')) { 
          amount2.value = amount1.value * out 
          different()
      } 
      if ((cur == 'RUB') && (currency == 'AZN')) { 
          amount2.value = amount1.value * out 
          different()
      } 
      else if ((cur == 'USD') && (currency == 'USD')) { 
          amount2.value = amount1.value 
          equal()
      } 
      else if ((cur == 'USD') && (currency == 'EUR')) { 
          amount2.value = amount1.value * out 
          different()
      } 
      else if ((cur == 'USD') && (currency == 'RUB')) { 
          amount2.value = amount1.value * out 
          different()
      } 
      else if ((cur == 'USD') && (currency == 'AZN')) { 
          amount2.value = amount1.value * out 
          different()
      } 
      else if ((cur == 'EUR') && (currency == 'EUR')) { 
          amount2.value = amount1.value 
          equal()
      } 
      else if ((cur == 'EUR') && (currency == 'USD')) { 
          amount2.value = amount1.value * out 
          different()
      } 
      else if ((cur == 'EUR') && (currency == 'RUB')) { 
          amount2.value = amount1.value * out 
          different()
      } 
      else if ((cur == 'EUR') && (currency == 'AZN')) { 
          amount2.value = amount1.value * out 
          different()
      } 
      else if ((cur == 'AZN') && (currency == 'AZN')) { 
          amount2.value = amount1.value 
          equal()
      } 
      else if ((cur == 'AZN') && (currency == 'EUR')) { 
          amount2.value = amount1.value * out 
          different()
      } 
      else if ((cur == 'AZN') && (currency == 'RUB')) { 
          amount2.value = amount1.value * out
          different()
      } 
      else if ((cur == 'AZN') && (currency == 'USD')) { 
          amount2.value = amount1.value * out 
          different()
      } 
  } 
  
  right.forEach((event) => { 
      event.addEventListener('click', function() { 
          right.forEach((event) => { 
              event.classList.remove('active') 
              this.classList.add('active') 
          }) 
      }) 
  }) 
  
  left.forEach((event) => { 
      event.addEventListener('click', function() { 
          left.forEach((event) => { 
              event.classList.remove('active') 
              this.classList.add('active') 
          }) 
      }) 
  })