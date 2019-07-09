var list = document.querySelector('.product ul');
var totalBox = document.querySelector('.product p');
var total = 0;
var products = ['Underpants:6.99', 'Socks:5.99', 'T-shirt:14.99', 'Trousers:31.99', 'Shoes:23.99'];
list.innerHTML = '';
totalBox.textContent = '';

for (let i = 0; i < products.length; i++) {
    const subArray = products[i].split(':');
    const name = subArray[0];
    const price = Number(subArray[1]);
    const item = name + ' - ¥ ' + price;
    total += price;
    var listItem = document.createElement('li');
    listItem.textContent = item;
    list.appendChild(listItem);
}

totalBox.textContent = '合计: ¥' + total.toFixed(2);