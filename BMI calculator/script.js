const form = document.querySelector('form');

form.addEventListener('submit', function(e){
    e.preventDefault();
    
    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#results');
    
    if((height === '') || (height < 0) || (isNaN(height))){
        //NaN !== NaN
        alert("Please provide a valid height");
        
    } else if (weight === '' || weight < 0 || isNaN(weight)){
        alert("Please provide a valid weight");
    } else {
    //calculate BMI
    const bmi = (weight / ((height*height)/10000)).toFixed(2);
    //display the results
    results.innerHTML = `<span>${bmi}</span>`
    }
    
    
});

//notes
//NaN !== NaN, use the isNaN() function
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/isNaN

