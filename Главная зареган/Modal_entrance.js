function opena() {
    document.getElementById('bg_fon').style.display = 'flex';
    document.getElementById('modal-authorization').style.display = 'flex';
}
function сlose_modal_entrance() {
    document.getElementById('bg_fon').style.display = 'none';
    document.getElementById('modal-authorization').style.display = 'none';
}
function removee() {
    document.getElementById('modal-authorization').style.display = 'none';
    document.getElementById('bg_fon_reg').style.display = 'flex';
    document.getElementById('registration').style.display = 'flex';
}
function сlose_modal_entrance_2() {
    document.getElementById('bg_fon_reg').style.display = 'none';
    document.getElementById('registration').style.display = 'none';
}
function checkLogin() {
    var login = document.getElementById("modal-authorization-input_email").value;
    var password = document.getElementById("modal-authorization-input_passwor").value;

    if (login === "admin" && password === "root") {// тут крч какие данные вести если заходит админ 
        window.location.href = "../Услуги_зареган/index.html"// а тут ссылка на эту страницу  админа
    } else {
        window.location.href = "../Rent and personal account/indexRent.html";
    }
}
