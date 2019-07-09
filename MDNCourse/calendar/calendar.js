var select = document.querySelector('select');
var list = document.querySelector('ul');
var h1 = document.querySelector('h1');

select.onchange = function () {
    var choice = select.value;
    var year = new Date().getFullYear();
    var days = 31;
    if (choice == '4月' || choice == '6月' || choice == '9月' || choice == '11月') {
        days = 30;
    } else if (choice == '2月') {
        if (year % 4 == 0 && year % 100 !== 0) {
            days = 28;
        } else if (year % 400 == 0 || year % 3200 == 0 || year % 172800 == 0) {
            days = 28;
        } else {
            days = 27;
        }
    }
    createCalendar(days, choice);
}

function createCalendar(days, choice) {
    list.innerHTML = '';
    h1.textContent = choice;
    for (let i = 1; i <= days; i++) {
        var listItem = document.createElement('li');
        listItem.textContent = i;
        list.appendChild(listItem);
    }
}

createCalendar(31, "1月");