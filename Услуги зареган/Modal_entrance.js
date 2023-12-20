function opena() {
    document.getElementById('bg_fon').style.display = 'flex';
    document.getElementById('modal-authorization').style.display = 'flex';
}
function сlose_modal_entrance(){
    document.getElementById('bg_fon').style.display = 'none';
    document.getElementById('modal-authorization').style.display = 'none';
}
 function removee(){
    document.getElementById('modal-authorization').style.display = 'none';
    document.getElementById('bg_fon_reg').style.display = 'flex';
    document.getElementById('registration').style.display = 'flex';
 }
 function сlose_modal_entrance_2(){
    document.getElementById('bg_fon_reg').style.display = 'none';
    document.getElementById('registration').style.display = 'none';
}
function openservices(){
    document.getElementById('modal-services').style.display = 'flex';
    document.getElementById('modal-services-container').style.display = 'flex';
}
function сlose_modal_entrance_3(){
    document.getElementById('modal-services').style.display = 'none';
    document.getElementById('modal-services-container').style.display = 'none';
}