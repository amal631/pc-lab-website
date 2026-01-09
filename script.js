const API_URL = "https://69609af4e7aa517cb7967f75.mockapi.io/data/1";

function updateColors(value, id) {
    const element = document.getElementById(id);
    if (value > 80) {
        element.style.color = "red";
    } else if (value > 50) {
        element.style.color = "orange";
    } else {
        element.style.color = "green";
    }
}

async function updateData() {
    const res = await fetch(API_URL);
    const data = await res.json();

    document.getElementById("voltage").textContent = data.voltage + " V";
    document.getElementById("current").textContent = data.current + " A";
    document.getElementById("temperature").textContent = data.temperature + " °C";
    document.getElementById("load").textContent = data.load + " W";

    updateColors(data.voltage, "voltage");
    updateColors(data.current, "current");
    updateColors(data.temperature, "temperature");
    updateColors(data.load, "load");
}

setInterval(updateData, 1500);

// Motor controls
function motorOn() {
    document.getElementById("motorStatus").textContent = "ON";
    document.getElementById("motorStatus").style.color = "green";
}

function motorOff() {
    document.getElementById("motorStatus").textContent = "OFF";
    document.getElementById("motorStatus").style.color = "red";
}

function increaseLoad() {
    alert("Increase Load command sent!");
}

function decreaseLoad() {
    alert("Decrease Load command sent!");
}
