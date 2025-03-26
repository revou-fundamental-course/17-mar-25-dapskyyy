// Persegi
document.getElementById('squareForm').addEventListener('submit', function (event) {
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

    // Tampilkan hasil perhitungan
    document.getElementById('squareResults').classList.remove('hidden');
});

// Reset hasil saat tombol reset ditekan
document.getElementById('squareForm').addEventListener('reset', function () {
    document.getElementById('squareResults').classList.add('hidden');
});

// Persegi Panjang
document.getElementById('rectangleForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const length = parseFloat(document.getElementById('length').value);
    const width = parseFloat(document.getElementById('width').value);

    if (isNaN(length) || length <= 0 || isNaN(width) || width <= 0) {
        alert('Masukkan panjang dan lebar yang valid!');
        return;
    }

    const rectArea = length * width;
    const rectPerimeter = 2 * (length + width);

    document.getElementById('rectAreaResult').textContent = `Luas Persegi Panjang: ${rectArea} cm²`;
    document.getElementById('rectPerimeterResult').textContent = `Keliling Persegi Panjang: ${rectPerimeter} cm`;

    // Tampilkan hasil perhitungan
    document.getElementById('rectangleResults').classList.remove('hidden');
});

// Reset hasil saat tombol reset ditekan
document.getElementById('rectangleForm').addEventListener('reset', function () {
    document.getElementById('rectangleResults').classList.add('hidden');
});
