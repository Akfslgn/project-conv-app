
export function celsiousToFahrenheit(celsius) {
    const c = Number(celsius);
    return (c * 9/5) + 32;
}

export function fahrenheitToCelsius(fahrenheit) {
    const f = Number(fahrenheit);
    return (f - 32) * 5/9;
}




