function onEntry(entry) {
  entry.forEach(change => {
    if (change.isIntersecting) {
      change.target.classList.add('active');
    }
  });
}
let options = { threshold: [0.5] };
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll('.anim');
for (let elm of elements) {
  observer.observe(elm);
}

window.onload = function() {
  const mainImage = document.getElementById('main-image');
  mainImage.classList.add('fade-in');
  mainImage.style.opacity = '1';
};






