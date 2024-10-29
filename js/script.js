document.addEventListener('DOMContentLoaded', () => {

  document.getElementById('copyBtn')?.addEventListener('click', (e) => {
    e.preventDefault();

    const email = 'dnperefils@gmail.com';

    navigator.clipboard.writeText(email).then(() => {
      alert('Adresse email copiée: ' + email);

      const mailtoLink = `https://mail.google.com/mail/u/0/#inbox?compose=new`;
      window.open(mailtoLink)
    }).catch((err) => {
      console.error('Erreur lors de la copie: ', err);
    });
  });
});

$(function () {
  $('nav a').on('click', function (e) {
    e.preventDefault();
    const targetId = $(this).attr('href');

    if (targetId && $(targetId).length) {
      const targetOffset = $(targetId).offset();

      if (targetOffset) {
        $('html, body').animate({
          scrollTop: targetOffset.top
        }, 1000);
      }
    }
  });
});