document.getElementById('imc-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const height = parseFloat(document.getElementById('height').value);
    const weight = parseFloat(document.getElementById('weight').value);

    if (height > 0 && weight > 0) {
        const imc = weight / (height * height);
        let classification = '';

        if (imc < 18.5) {
            classification = 'Abaixo do peso';
        } else if (imc >= 18.5 && imc < 24.9) {
            classification = 'Peso normal';
        } else if (imc >= 25 && imc < 29.9) {
            classification = 'Sobrepeso';
        } else {
            classification = 'Obesidade';
        }

        document.getElementById('result').innerHTML = `<p>Seu IMC é ${imc.toFixed(2)} (${classification})</p>`;
    } else {
        document.getElementById('result').innerHTML = `<p>Por favor, insira valores válidos.</p>`;
    }
});
