document.addEventListener('DOMContentLoaded', () => {
    fetch('profileData.json')
      .then(response => response.json())
      .then(data => {
        document.getElementById('avatar').src = data.avatar;
        document.getElementById('name').innerHTML = `${data.name.split(' ')[0]} <span>${data.name.split(' ').slice(-1)}</span>`;
        document.getElementById('description').textContent = data.description;
  
        const linksContainer = document.getElementById('links');
        data.links.forEach(link => {
          const a = document.createElement('a');
          a.href = link.href;
          a.textContent = link.text;
          a.target = "_blank";
          linksContainer.appendChild(a);
        });
  
        const socialLinksContainer = document.getElementById('social-links');
        data.socialLinks.forEach(socialLink => {
          const a = document.createElement('a');
          a.href = socialLink.href;
          a.target = "_blank";
          
          const img = document.createElement('img');
          img.src = socialLink.icon;
          img.alt = socialLink.name;
  
          a.appendChild(img);
          socialLinksContainer.appendChild(a);
        });
      })
      .catch(error => console.error('Erro ao carregar o arquivo JSON:', error));
  });
  