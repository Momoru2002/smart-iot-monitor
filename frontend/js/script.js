const ctx = document.getElementById('iotChart');

const chart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: [],
        datasets: [{
            label: 'Temperature',
            data: [],
            borderColor: 'cyan'
        }]
    }
});

async function fetchData() {

    const response = await fetch('http://127.0.0.1:5000/api/sensors');

    const data = await response.json();

    document.getElementById('temp').innerText =
        data.temperature + '°C';

    document.getElementById('hum').innerText =
        data.humidity + '%';

    document.getElementById('energy').innerText =
        data.energy + 'W';

    document.getElementById('air').innerText =
        data.air_quality;

    const time = new Date().toLocaleTimeString();

    chart.data.labels.push(time);
    chart.data.datasets[0].data.push(data.temperature);

    if(chart.data.labels.length > 10){
        chart.data.labels.shift();
        chart.data.datasets[0].data.shift();
    }

    chart.update();
}

setInterval(fetchData, 2000);

fetchData();
