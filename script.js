cfunction greet(name) {
  console.log('Hello,' + name + '!')
  
  }
  
  greet()
  
  function calculateSum(a, b) {
      console.log(a + b)
  
  }
  calculateSum(1, 2)
  
  function outerFunction() {
  let x = 10;
  
  function innerFunction() {
      console.log(x);
  }
  innerFunction();
  }
  outerFunction();
  
  function outerFunctionTwo() {
      let x = 10;
      
      function innerFunctionTwo() {
          console.log(x);
      }
     return innerFunctionTwo();
      }
      let closure = outerFunctionTwo();
      closure();
  
      const button = document.querySelector('#myButton');
  
      function handleClick() {
          console.log('Button clicked!');
      }
      button.addEventListener('click', handleclick);
  
      function handleClickStopPropagation() {
          console.log('Button clicked!');
      }
      button.addEventListener('click', handleclickStopPropagation);
  
      function createNewElement() {
          const newElement = document.createElement('div');
         
          newElement.className = 'myClass';
          newElement.innerHTML = 'New Element';
         
            
          parentElement.appendChild(newElement);
  
          const myClass = document.getElementById('myClass');
  
          myClass.addEventListener("mouseover", event => {
              event.target.style.backgroundcolor = "red";
              event.target.textContent = "GO!"
  
          });
  
      
     
  
  
  
          
          
      }
  
  
          
  
      