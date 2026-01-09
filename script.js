// Fake ESP8266 API URL
const ESP_FAKE_URL = "https://mocki.io/v1/fb538cde-a90e-417b-b271-882c976757fc";

function motorOn() {
    alert("SIMULATION: Motor ON");
    document.getElementById("status").innerText = "ON";
}

function motorOff() {
    alert("SIMULATION: Motor OFF");
    document.getElementById("status").innerText = "OFF";
}

function increaseLoad() {
    alert("SIMULATION: Load Increased");
}

function decreaseLoad() {
    alert("SIMULATION: Load Decreased");
}

// Fetch fake sensor data every 1 second
setInterval(() => {
    fetch(ESP_FAKE_URL)
        .then(res => res.json())
        .then(data => {
            document.getElementById("voltage").innerText = data.voltage;
            document.getElementById("current").innerText = data.current;
            document.getElementById("temperature").innerText = data.temperature;
            document.getElementById("load").innerText = data.load;
        })
        .catch(err => console.error("Fake ESP error:", err));
}, 1000);

