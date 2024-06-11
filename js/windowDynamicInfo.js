//Au clcik sur infoCard1 apparition du windowInofo1
//Et apparition de la partie sombre CloseClik
document.getElementById('infoCard1').addEventListener('click', function() {
    document.getElementById('windowInfo1').style.display = 'block';
    document.getElementById('CloseClick').style.display = 'block';
});
//Au click sur la parie sombre CloseClick fermeture du windowInfo1
document.getElementById('CloseClick').addEventListener('click', function() {
    document.getElementById('windowInfo1').style.display = 'none';
    document.getElementById('CloseClick').style.display = 'none';
});
//Au click sur infoCard2 apparition du windowInofo2
//Et apparition de la partie sombre CloseClik2
document.getElementById('infoCard2').addEventListener('click', function() {
    document.getElementById('windowInfo2').style.display = 'block';
    document.getElementById('CloseClick2').style.display = 'block';
});
//Au click sur la parie sombre CloseClick2 fermeture du windowInfo2
document.getElementById('CloseClick2').addEventListener('click', function() {
    document.getElementById('windowInfo2').style.display = 'none';
    document.getElementById('CloseClick2').style.display = 'none';
});
//Au click sur clickUtilisateur apparition du window-usage-ticket et du button buyTicket2
//Et apparition de la partie sombre CloseClik3
document.getElementById('clickUtilisation').addEventListener('click', function() {
    document.getElementById('window-usage-ticket').style.display = 'block';
    document.getElementById('CloseClick3').style.display = 'block';
    document.getElementById('buyTicket2').style.display = 'none';
});
//Au click sur la parie sombre CloseClick3 fermeture du window-usage-ticket
document.getElementById('CloseClick3').addEventListener('click', function() {
    document.getElementById('window-usage-ticket').style.display = 'none';
    document.getElementById('CloseClick3').style.display = 'none';
});



