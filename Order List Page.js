$(document).ready(function () {
    if (localStorage.getItem('userLoginStatus') !== 'true') {
        location.assign('./index.html')
    }
    const logoutButton = document.getElementById('logout-button');
    logoutButton.onclick = function (e) {
        e.preventDefault();
        localStorage.setItem('userLoginStatus', false)
        location.assign('./index.html')
    }
});

var tBody = document.getElementById("table-body")
var count = document.getElementById("count")
var updatedCount = count.innerText
console.log(updatedCount)
$.get("https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/orders", function (response) {
        var data = response
        console.log(data)
        for (var i = 0; i < data.length; i++) {
            tBody.innerHTML += `
        <tr class="table-row" id="${data[i].orderStatus + i}">
                                    <td class="secondary-text">${data[i].id}</td>
                                    <td class="primary-text">${data[i].customerName}</td>
                                    <td class="primary-text">${data[i].orderDate} <br><span class="secondary-text">${data[i].orderTime}</span></td>
                                    <td class="secondary-text">$${data[i].amount}</td>
                                    <td class="primary-text">${data[i].orderStatus}</td>
                                </tr>`
        }
    })


    var status1 = true
    var status2 = true
    var status3 = true
    var status4 = true

    function clicked(status) {
        console.log(status)
        if (status == "New") {
            if (status1 == true) {
                var element1 = document.getElementById(status + 1)
                var element2 = document.getElementById(status + 2)
                var element3 = document.getElementById(status + 8)
                element1.style.display = "none"
                element2.style.display = "none"
                element3.style.display = "none"
                status1 = false
                count.innerText = count.innerText - 3
                updatedCount = count.innerText
            } else {
                var element1 = document.getElementById(status + 1)
                var element2 = document.getElementById(status + 2)
                var element3 = document.getElementById(status + 8)
                element1.style.display = "table-row"
                element2.style.display = "table-row"
                element3.style.display = "table-row"
                status1 = true
                count.innerText = parseInt(updatedCount) + 3
                updatedCount = count.innerText

            }
        }
        if (status == "Delivered") {
            if (status2 == true) {
                var element4 = document.getElementById(status + 0)
                var element5 = document.getElementById(status + 3)
                var element6 = document.getElementById(status + 4)
                element4.style.display = "none"
                element5.style.display = "none"
                element6.style.display = "none"
                status2 = false
                count.innerText = count.innerText - 3
                updatedCount = count.innerText
            } else {
                var element4 = document.getElementById(status + 0)
                var element5 = document.getElementById(status + 3)
                var element6 = document.getElementById(status + 4)
                element4.style.display = "table-row"
                element5.style.display = "table-row"
                element6.style.display = "table-row"
                status2 = true
                count.innerText = parseInt(updatedCount) + 3
                updatedCount = count.innerText
            }
        }
        if (status == "Packed") {
            if (status3 == true) {
                var element7 = document.getElementById(status + 6)
                var element8 = document.getElementById(status + 9)
                element7.style.display = "none"
                element8.style.display = "none"
                status3 = false
                console.log(status3)
                count.innerText = count.innerText - 2
                updatedCount = count.innerText
            } else {
                var element7 = document.getElementById(status + 6)
                var element8 = document.getElementById(status + 9)
                element7.style.display = "table-row"
                element8.style.display = "table-row"
                status3 = true
                count.innerText = parseInt(updatedCount) + 2
                updatedCount = count.innerText
            }
        }
        if (status == "InTransit") {
            if (status4 == true) {
                var element9 = document.getElementById(status + 5)
                var element10 = document.getElementById(status + 7)
                var element11 = document.getElementById(status + 10)
                element9.style.display = "none"
                element10.style.display = "none"
                element11.style.display = "none"
                status4 = false
                count.innerText = count.innerText - 3
                updatedCount = count.innerText
            } else {
                var element9 = document.getElementById(status + 5)
                var element10 = document.getElementById(status + 7)
                var element11 = document.getElementById(status + 10)
                element9.style.display = "table-row"
                element10.style.display = "table-row"
                element11.style.display = "table-row"
                status4 = true
                count.innerText = parseInt(updatedCount) + 3
                updatedCount = count.innerText
            }
        }
    }
