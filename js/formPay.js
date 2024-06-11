document.getElementById('submitFormPay').addEventListener('click', function () {

    document.querySelectorAll('.error').forEach(function (el) {
        el.style.display = 'none';
    });

    let isValid = true;
    const cardNumber = document.getElementById('cardNumber').value.replace(/\s+/g, '');
    if (cardNumber.length !== 16) {
        document.getElementById('cardNumberError').style.display = 'block';
        isValid = false;
    }


    const monthCard = document.getElementById('monthCard').value;
    if (monthCard === "") {
        document.getElementById('monthCardError').style.display = 'block';
        isValid = false;
    }


    const yearCard = document.getElementById('yearCard').value;
    if (yearCard === "") {
        document.getElementById('yearCardError').style.display = 'block';
        isValid = false;
    }


    const cryptogramme = document.getElementById('cryptogramme').value;
    if (cryptogramme.length !== 3 || isNaN(cryptogramme)) {
        document.getElementById('cryptogrammeError').style.display = 'block';
        isValid = false;
    }


    if (isValid) {
        document.getElementById('part-4').style.display = 'none';
        document.getElementById('part-5').style.display = 'block';


        setTimeout(function () {
            document.getElementById('part-5').style.display = 'none';
            document.getElementById('part-1').style.display = 'block';
            document.getElementById('container-info-p2').style.display = 'none';
            document.getElementById('buyTicket').style.display = 'block';
            document.getElementById('view-ticket').style.display = 'block';


        }, 5000);
    }
});

document.getElementById('cardNumber').addEventListener('input', function (e) {
    let value = e.target.value.replace(/\s+/g, '');
    if (value.length > 16) {
        value = value.slice(0, 16);
    }
    e.target.value = value.replace(/(.{4})/g, '$1 ').trim();
});



