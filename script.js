window.onload = () => {
    let button = document.querySelector("#btn");

     button.addEventListener("click", calculateBMI);
};

function calculateBMI() {
     let feet = parseInt(document.querySelector("#feet").value);
    let inches = parseInt(document.querySelector("#inches").value);
    let weightLbs = parseFloat(document.querySelector("#weight").value);
    let result = document.querySelector("#result");

     if (isNaN(feet) || feet < 0)
        result.innerHTML = "Provide a valid height in feet!";
    else if (isNaN(inches) || inches < 0 || inches >= 12)
        result.innerHTML = "Provide a valid height in inches (0-11)!";
    else if (isNaN(weightLbs) || weightLbs <= 0)
        result.innerHTML = "Provide a valid weight in lbs!";
    else {
         let heightInCm = (feet * 30.48) + (inches * 2.54);

         let weightKg = weightLbs * 0.453592;

         let bmi = (weightKg / ((heightInCm * heightInCm) / 10000)).toFixed(2);

         if (bmi < 18.6) 
            result.innerHTML = `Under Weight : <span>${bmi}</span>`;
        else if (bmi >= 18.6 && bmi < 24.9)
            result.innerHTML = `Normal : <span>${bmi}</span>`;
        else 
            result.innerHTML = `Over Weight : <span>${bmi}</span>`;
    }
}
