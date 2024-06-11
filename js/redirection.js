// Fonction de redirection de la page welcome vers la page Title
function redirectionVersMyTiles() {
    setTimeout(function () {
        window.location.href = 'my-titles.html';
    }, 3000);
}
// Redirection vers la page acheter des titres
// à l'ecoute du click sur buyTicket dans la partie 1
document.getElementById('buyTicket').addEventListener('click', function () {
    document.getElementById('part-1').style.display = 'none';
    document.getElementById('part-2').style.display = 'block';
});
// à l'ecoute du click sur buy dans la partie 2 redirection vers la partie 3
document.getElementById('buy').addEventListener('click', function () {
    document.getElementById('part-2').style.display = 'none';
    document.getElementById('part-3').style.display = 'block';
});
// à l'ecoute du click sur buy dans la partie 3 redirection vers la partie 4
//à condition que le chekbox soit coché sinon blocage dans la partie 3 
document.getElementById('pay').addEventListener('click', function (event) {

    if (!document.getElementById('checkbox-condition-buy').checked) {

        event.preventDefault();
        alert("Vous devez accepter les conditions générales de vente pour continuer.");
    } else {

        document.getElementById('part-3').style.display = 'none';
        document.getElementById('part-4').style.display = 'block';
    }
});
// à l'ecoute du click sur buy dans la partie 1 redirection vers la partie 6
//à condition que le chekbox soit coché sinon blocage dans la partie 1 
document.getElementById('utiliser').addEventListener('click', function (event) {

    if (!document.getElementById('checkbox-condition-utliser').checked) {

        event.preventDefault();
        alert("Vous devez accepter les conditions générales de vente pour continuer.");
    } else {

        document.getElementById('part-1').style.display = 'none';
        document.getElementById('part-6').style.display = 'block';

        let duration = 60 * 60;
        let display = document.getElementById('chrono');
        startCountdown(duration, display);
    }

});
// à l'ecoute du click sur button-correspondance dans la partie 6 redirection vers la partie 7
document.getElementById('conditionCorrespondant').addEventListener('click', function () {
    document.getElementById('part-6').style.display = 'none';
    document.getElementById('part-7').style.display = 'block';

});
// à l'ecoute du click sur button-controle dans la partie 6 redirection vers la partie 8
document.getElementById('button-controle').addEventListener('click', function () {
    document.getElementById('part-6').style.display = 'none';
    document.getElementById('part-8').style.display = 'block';

});

// Redirection vers la page acheter des titres
// à l'ecoute du click sur buyTicket2 dans la partie 1 redirection vers la partie 2
document.getElementById('buyTicket2').addEventListener('click', function () {
    document.getElementById('part-1').style.display = 'none';
    document.getElementById('part-2').style.display = 'block';
});


// Fonction pour démarrer le compte à rebours dans la partie 6 au click du button utiliser dans la partie 1
function startCountdown(duration, display) {
    let timer = duration, hours, minutes, seconds;
    setInterval(function () {
        hours = parseInt(timer / 3600, 10);
        minutes = parseInt((timer % 3600) / 60, 10);
        seconds = parseInt(timer % 60, 10);

        hours = hours < 10 ? "0" + hours : hours;
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = hours + ":" + minutes + ":" + seconds;

        if (--timer < 0) {
            timer = 0;
        }
    }, 1000);
}


document.getElementById('croixPage2').addEventListener('click', function () {
    document.getElementById('part-2').style.display = 'none';
    document.getElementById('part-1').style.display = 'block';
});

document.getElementById('retourPage3').addEventListener('click', function () {
    document.getElementById('part-3').style.display = 'none';
    document.getElementById('part-2').style.display = 'block';
});

document.getElementById('retourPage4').addEventListener('click', function () {
    document.getElementById('part-4').style.display = 'none';
    document.getElementById('part-3').style.display = 'block';
});


document.getElementById('retourPage6').addEventListener('click', function () {
    document.getElementById('part-6').style.display = 'none';
    document.getElementById('part-1').style.display = 'block';


});

document.getElementById('retourPage7').addEventListener('click', function () {
    document.getElementById('part-7').style.display = 'none';
    document.getElementById('part-6').style.display = 'block';
});

document.getElementById('retourPage8').addEventListener('click', function () {
    document.getElementById('part-8').style.display = 'none';
    document.getElementById('part-6').style.display = 'block';
});




















