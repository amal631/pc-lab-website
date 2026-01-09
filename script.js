// CHANGE THIS TO YOUR ESP8266 IP ADDRESS
const ESP_IP = "http://192.168.1.50";  // example, replace with real IP

function motorOn() {
    fetch(`${ESP_IP}/motor/on`)
        .then(() => document.getElementById("status").innerText = "ON");
}

function motorOff() {
    fetch(`${ESP_IP}/motor/off`)
        .then(() => document.getElementById("status").innerText = "OFF");
}

function increaseLoad() {
    fetch(`${ESP_IP}/load/inc`);
}

function decreaseLoad() {
    fetch(`${ESP_IP}/load/dec`);
}

// FETCH SENSOR DATA EVERY 1 SECOND
setInterval(() => {
    fetch(`${ESP_IP}/data`)
        .then(res => res.json())
        .then(data => {
            document.getElementById("voltage").innerText = data.voltage;
            document.getElementById("current").innerText = data.current;
            document.getElementById("temperature").innerText = data.temperature;
            document.getElementById("load").innerText = data.load;
        })
        .catch(err => console.log("ESP Offline:", err));
}, 1000);
