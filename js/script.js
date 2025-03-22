document.getElementById('squareForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const sideLength = parseFloat(document.getElementById('sideLength').value);

    if (isNaN(sideLength) || sideLength <= 0) {
        alert('Masukkan panjang sisi yang valid!');
        return;
    }

    const area = sideLength * sideLength;
    const perimeter = 4 * sideLength;

    document.getElementById('areaResult').textContent = `Luas Persegi: ${area} cm²`;
    document.getElementById('perimeterResult').textContent = `Keliling Persegi: ${perimeter} cm`;

    document.getElementById('results').classList.remove('hidden');
});
