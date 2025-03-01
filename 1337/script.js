const outputDiv = document.getElementById('output');
let previousContent = '';

function showIPInfo() {
    fetch('https://api.ipgeolocation.io/ipgeo?apiKey=e000e8e354ef4e70a69f01698bad26c2')
        .then(response => response.json())
        .then(data => {
            const ip = data.ip;
            const isp = data.isp;
            const country = data.country_name;
            const region = data.region_name;
            const city = data.city;
            const latitude = data.latitude;
            const longitude = data.longitude;

            let html = `
                <div class="ip">${ip}</div>
                <div class="info">
                    ISP: ${isp}<br>
                    Land: ${country}<br>
                    Region: ${region}<br>
                    Stadt: ${city}<br>
                    Breitengrad: ${latitude}<br>
                    Längengrad: ${longitude}<br>
                    <br>
                    <span style="color: #ccc;">enkeltrick.nl</span><br>
                    <span style="color: #ccc;">enkeltrick.nl</span><br>
                    <span style="color: #ccc;">enkeltrick.nl</span>
                </div>
            `;

            previousContent += html + '<br><br>';
            outputDiv.innerHTML = previousContent;

            const ipElement = document.querySelector('.ip');
            const ipText = ipElement.textContent;
            ipElement.textContent = '';
            typeWriter(ipText, ipElement, 0);

            const infoElement = document.querySelector('.info');
            const infoTextFull = infoElement.innerHTML;
            infoElement.innerHTML = '';
            typeWriterInfo(infoTextFull, infoElement, 0);

            setTimeout(() => {
                showIPInfo();
            }, 5000);
        });
}

function typeWriter(text, element, i) {
    if (i < text.length) {
        element.textContent += text[i];
        setTimeout(() => typeWriter(text, element, i + 1), 50);
    }
}

function typeWriterInfo(text, element, i) {
    if (i < text.length) {
        element.innerHTML += text[i];
        setTimeout(() => typeWriterInfo(text, element, i + 1), 20);
    }
}

showIPInfo();
