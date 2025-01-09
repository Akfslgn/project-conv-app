// Bootstrap’s CSS and JS Import
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';

import { celsiousToFahrenheit } from './convert.js';
import { fahrenheitToCelsius } from './convert.js';
//DOM Elements
const form = document.getElementById('converter-form');
const tempValue = document.getElementById('tempValue');
const tempType = document.getElementById('tempType');
const result = document.getElementById('result');

 const C2F = 'c2f';
//Event Listeners
form.addEventListener('submit', (event) => {
  event.preventDefault();

  const curentTempValue = tempValue.value;
  const conversionType = tempType.value;

 let output = '';
 //toFixed(2) to round to 2 decimal places
 
  if(conversionType === C2F) {
    const fahrenheit = celsiousToFahrenheit(curentTempValue).toFixed(1);
    output = `${curentTempValue}°C = ${fahrenheit}°F`;
  } else {
    const celsius = fahrenheitToCelsius(curentTempValue).toFixed(1);
    output = `${curentTempValue}°F = ${celsius}°C`;
  }

  

  result.textContent = output;
  
});
