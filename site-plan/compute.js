document.addEventListener("DOMContentLoaded", function() {
    const stockData = {
        "Intel i7": 12,
        "Intel i9": 5,
        "AMD Ryzen 7": 8,
        "AMD Ryzen 9": 2,
        "NVIDIA RTX 3060": 15,
        "NVIDIA RTX 4080": 3,
        "AMD RX 6700 XT": 7,
        "AMD RX 7900 XTX": 1
    };

    function updateDropdown(selectId, options) {
        const selectElement = document.getElementById(selectId);
        selectElement.innerHTML = ""; // Clear the dropdown before adding new options

        options.forEach(option => {
            const stock = stockData[option];
            const optionElement = document.createElement("option");
            optionElement.value = option;
            optionElement.textContent = `${option} (Stock: ${stock})`;
            selectElement.appendChild(optionElement);
        });
    }

    // Update the CPU and GPU dropdowns based on the available stock
    updateDropdown("cpu", ["Intel i7", "Intel i9", "AMD Ryzen 7", "AMD Ryzen 9"]);
    updateDropdown("gpu", ["NVIDIA RTX 3060", "NVIDIA RTX 4080", "AMD RX 6700 XT", "AMD RX 7900 XTX"]);
});
