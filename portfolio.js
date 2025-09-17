const resources = fetch('resources.json')
     .then(response => response.json())
     .catch(error => console.error('Error loading resources:', error));
const portfolio = resources.portfolio;
document.getElementById('title').innerText = portfolio.title;
document.getElementById('description').innerText = portfolio.description;