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
        addnametolist('naimer-2');
        document.getElementById('player-2').disabled = true;
    }
})
document.getElementById('player-3').addEventListener('click', function () {
    if (listcount() > 4) {
        alert('cant')
    }
    else {
        addnametolist('naimer-3');
        document.getElementById('player-3').disabled = true;
    }
})
document.getElementById('player-4').addEventListener('click', function () {
    if (listcount() > 4) {
        alert('cant')
    }
    else {
        addnametolist('naimer-4');
        document.getElementById('player-4').disabled = true;
    }
})
document.getElementById('player-5').addEventListener('click', function () {
    if (listcount() > 4) {
        alert('cant')
    }
    else {
        addnametolist('naimer-5');
        document.getElementById('player-5').disabled = true;
    }
})
document.getElementById('player-6').addEventListener('click', function () {
    if (listcount() > 4) {
        alert('cant')
    }
    else {
        addnametolist('naimer-6');
        document.getElementById('player-6').disabled = true;
    }
})