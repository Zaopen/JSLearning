// 筛选句子
var list = document.querySelector('.christmas ul');
var greetings = ['Happy Birthday!',
    'Merry Christmas my love.',
    'A happy Christmas to all the family.',
    'You\'re all I want for Christmas.',
    'Get well soon.'];
var selectButton = document.querySelector('.select');
var resetSelect = document.querySelector('.resetSelect');

function selectParagraph() {
    list.innerHTML = '';
    for (var i = 0; i < greetings.length; i++) {
        if (greetings[i].indexOf('Christmas') !== -1) {
            var newList = document.createElement('li');
            newList.textContent = greetings[i];
            list.appendChild(newList);
        }
    }
}

function resetParagraph() {
    list.innerHTML = '';
    for (var i = 0; i < greetings.length; i++) {
        var newList = document.createElement('li');
        newList.textContent = greetings[i];
        list.appendChild(newList);
    }
}

selectButton.addEventListener('click', selectParagraph);
resetSelect.addEventListener('click', resetParagraph);

// 单词首字母大写
var listUpper = document.querySelector('.city ul');
var cities = ['lonDon', 'ManCHESTer', 'BiRmiNGHAM', 'liVERpoOL'];
var upperButton = document.querySelector('.upper');
var resetUpper = document.querySelector('.resetUpper');

function upper() {
    listUpper.innerHTML = '';
    for (var i = 0; i < cities.length; i++) {
        var lower = cities[i].toLowerCase();
        var first = lower.slice(0, 1);
        var upper = lower.replace(first, first.toUpperCase());
        var newList = document.createElement('li');
        newList.textContent = upper;
        listUpper.appendChild(newList);
    }
}

function resetCity() {
    listUpper.innerHTML = '';
    for (var i = 0; i < cities.length; i++) {
        var newList = document.createElement('li');
        newList.textContent = cities[i];
        listUpper.appendChild(newList);
    }
}

upperButton.addEventListener('click', upper);
resetUpper.addEventListener('click', resetCity);

// 站点整理
var listRemake = document.querySelector('.station ul');
var stations = ['MAN675847583748sjt567654;Manchester Piccadilly',
    'GNF576746573fhdg4737dh4;Greenfield',
    'LIV5hg65hd737456236dch46dg4;Liverpool Lime Street',
    'SYB4f65hf75f736463;Stalybridge',
    'HUD5767ghtyfyr4536dh45dg45dg3;Huddersfield'];
var makeButton = document.querySelector('.make');
var resetStation = document.querySelector('.resetMake');

function makeStation() {
    listRemake.innerHTML = '';
    for (var i = 0; i < stations.length; i++) {
        var abb = stations[i].slice(0,3);
        var name = stations[i].slice(stations[i].indexOf(';') + 1);
        var abb = abb + ': ' + name;
        var newList = document.createElement('li');
        newList.textContent = abb;
        listRemake.appendChild(newList);
    }
}

function resetMake() {
    listRemake.innerHTML = '';
    for (var i = 0; i < stations.length; i++) {
        var newList = document.createElement('li');
        newList.textContent = stations[i];
        listRemake.appendChild(newList);
    }
}

makeButton.addEventListener('click', makeStation);
resetStation.addEventListener('click', resetMake);