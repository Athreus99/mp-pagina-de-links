document.addEventListener('DOMContentLoaded', () => {
  const links = [
    {
      title: 'Meu Portfólio',
      url: 'https://github.com/Athreus99?tab=projects'
    },
    {
      title: 'Instagram',
      url: 'https://www.instagram.com/matheusgouvea99/'
    },
    {
      title: 'WhatsApp',
      url: 'whatsapp.com/send/?phone=5553984567670&text&type=phone_number&app_absent=0'
    },
    {
      title: 'Facebook',
      url: 'https://www.facebook.com/matheus.gouvea.351/'
    }
  ];

  const list = document.getElementById('links');
  if (list) {
    list.innerHTML = '';
  }

  links.forEach(link => {
    const li = document.createElement('li');
    li.classList.add('app', 'item');
    const a = document.createElement('a');
    a.href = link.url;
    a.textContent = link.title;
    a.classList.add('app', 'link');
    li.appendChild(a);
    list.appendChild(li);
  });
  
});
