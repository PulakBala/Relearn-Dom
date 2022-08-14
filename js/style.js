const sections = document.querySelectorAll('section');
for(const section of sections) {
    section.style.border = '2px solid steelblue';
    section.style.marginBottom = '15px';
    section.style.borderRadius = '10px';
    section.style.backgroundColor = 'black';
    section.style.fontSize = '23px';
}
const placesContainer = document.getElementById('places-container');
placesContainer.classList.add('text-center');