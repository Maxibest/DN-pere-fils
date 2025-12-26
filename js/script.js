document.addEventListener('DOMContentLoaded', () => {
 
  const navbarToggle = document.querySelector('[data-collapse-toggle="navbar-default"]');
  const navbarMenu = document.getElementById('navbar-default');

  if (navbarToggle && navbarMenu) {
    navbarToggle.addEventListener('click', () => {
      const isExpanded = navbarToggle.getAttribute('aria-expanded') === 'true';
      navbarToggle.setAttribute('aria-expanded', !isExpanded);
      navbarMenu.classList.toggle('hidden');
    });

 
    const navLinks = navbarMenu.querySelectorAll('a');
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        if (window.innerWidth < 768) {
          navbarMenu.classList.add('hidden');
          navbarToggle.setAttribute('aria-expanded', 'false');
        }
      });
    });
  }

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