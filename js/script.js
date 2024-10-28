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
