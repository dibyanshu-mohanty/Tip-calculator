document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('select');
    var instances = M.FormSelect.init(elems, options);
});
var tipDoc = document.getElementById("tips")
var guestDoc = document.getElementById("guests")
var resultDoc = document.getElementById("finalResult")
var alertDoc = document.getElementById("alerts")

document.getElementById("calculateBtn").onclick = function () {
    var totalValue = tipDoc.value
    var guestValue = guestDoc.value
    var selectField = document.getElementById('options');
    var selectedOption = selectField.options.selectedIndex;
    var selectedValue = selectField.options[selectedOption];
    if (totalValue === "" || guestValue === "" || selectedValue.innerHTML == "Choose the Service Type") {
        alert("Please Fill in all Details")
    } else {
        if (selectedValue.value == "5") {
            var tip = calculateTip(selectedValue.value, totalValue, guestValue)
            resultDoc.innerHTML = "<i class='fas fa-money-bill-wave'></i> Tip/Person is: ₹" + tip;
            alertDoc.style.visibility = "visible"
            resetValue()
        } else if (selectedValue.value == "10") {
            var tip = calculateTip(selectedValue.value, totalValue, guestValue)
            resultDoc.innerHTML = "<i class='fas fa-money-bill-wave'></i> Tip/Person is: ₹" + tip;
            alertDoc.style.visibility = "visible"
            resetValue()
        } else {
            var tip = calculateTip(selectedValue.value, totalValue, guestValue)
            resultDoc.innerHTML = "<i class='fas fa-money-bill-wave'></i> Tip/Person is: ₹" + tip;
            alertDoc.style.visibility = "visible"
            resetValue()
        }
    }
}

function calculateTip(service, total, guest) {
    if (service == "5") {
        var result = Math.round((total / guest) * 0.05)
        return (result)
    } else if (service == "10") {
        var result = Math.round((total / guest) * 0.10)
        return (result)
    } else {
        var result = Math.round((total / guest) * 0.15)
        return (result)
    }
}

function resetValue() {
    tipDoc.value = ""
    guestDoc.value = ""
}

