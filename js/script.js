function changerClasse()
{
  var ele = document.getElementsByClassName('red-dot');
for (var i = 0; i < ele.length; i++ ) {
    ele[i].style.display = "none";
}

document.getElementById('label-notif').innerHTML = '0';
document.getElementById('notif-1').className = 'notif';
document.getElementById('notif-2').className = 'notif';
document.getElementById('notif-3').className = 'notif';
document.getElementById('notif-4').className = 'notif';
document.getElementById('notif-5').className = 'notif';
document.getElementById('notif-6').className = 'notif';
}
