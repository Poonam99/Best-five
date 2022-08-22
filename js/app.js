function listcount() {
    let numb = document.getElementById('player-list').childElementCount;
    console.log(numb)
    return numb;
}

function addnametolist(getelement) {
    const playlist = document.getElementById('player-list');
    getplayername = document.getElementById(getelement);
    playername = getplayername.innerText;
    const createlementinlist = document.createElement('li');
    createlementinlist.appendChild(document.createTextNode(playername));
    playlist.appendChild(createlementinlist);
}
function getElementValue(elementId) {
    const getperplayer = document.getElementById(elementId);
    const perplayerstring = getperplayer.value;
    const perplayer = parseInt(perplayerstring);
    return perplayer

}

document.getElementById('player-1').addEventListener('click', function () {

    if (listcount() > 4) {
        alert('cant')
    }
    else {
        addnametolist('naimer-1');
        document.getElementById('player-1').disabled = true;
    }
})
document.getElementById('player-2').addEventListener('click', function () {
    if (listcount() > 4) {
        alert('cant')
    }
    else {
        addnametolist('Luka-2');
        document.getElementById('player-2').disabled = true;
    }
})
document.getElementById('player-3').addEventListener('click', function () {
    if (listcount() > 4) {
        alert('cant')
    }
    else {
        addnametolist('Benzema-3');
        document.getElementById('player-3').disabled = true;
    }
})
document.getElementById('player-4').addEventListener('click', function () {
    if (listcount() > 4) {
        alert('cant')
    }
    else {
        addnametolist('Rudiger-4');
        document.getElementById('player-4').disabled = true;
    }
})
document.getElementById('player-5').addEventListener('click', function () {
    if (listcount() > 4) {
        alert('cant')
    }
    else {
        addnametolist('massi-5');
        document.getElementById('player-5').disabled = true;
    }
})
document.getElementById('player-6').addEventListener('click', function () {
    if (listcount() > 4) {
        alert('cant')
    }
    else {
        addnametolist('Ronaldo-6');
        document.getElementById('player-6').disabled = true;
    }
})

document.getElementById('calculate').addEventListener('click', function () {
    const val = listcount();
    let perplayer = getElementValue('per-player');
    if (isNaN(perplayer)) {
        alert('please enter a nnumber');
        return;

    }
    const getplayerexpences = document.getElementById('player-expences');
    const playerexpences = val * perplayer;
    getplayerexpences.value = playerexpences;
})

document.getElementById('total-calculate').addEventListener('click', function () {
    const val = listcount();
    let perplayer = getElementValue('per-player');
    let manager = getElementValue('manager');
    let coach = getElementValue('coach');
    if (isNaN(manager && coach)) {
        alert('please enter a number');
        return;

    }

    const playerexpences = val * perplayer;
    const totalExpences = playerexpences + manager + coach;
    const gettotalExpences = document.getElementById('total-expences');
    gettotalExpences.value = totalExpences;
})