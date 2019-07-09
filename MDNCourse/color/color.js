var color = document.querySelector('select');
var html = document.querySelector('.colors');

color.onchange = function () {
    var choice = color.value;
    switch (choice) {
        case 'white':
            updateColor('white', 'black');
            break;
        case 'deepskyblue':
            updateColor('deepskyblue', 'white');
            break;
        case 'aquamarine':
            updateColor('aquamarine', 'cadetblue');
            break;
        case 'pink':
            updateColor('pink', 'white');
            break;
        case 'dimgray':
            updateColor('dimgray', 'gold');
            break;
        default:
            break;
    }
}

function updateColor(bgColor, textColor) {
    html.style.backgroundColor = bgColor;
    html.style.color = textColor;
}