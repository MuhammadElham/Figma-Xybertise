let menuIcon = document.querySelector(".menu-icon");
let menuElements = document.querySelector(".menu_elements");

menuIcon.addEventListener("click", () => {
  menuIcon.classList.toggle("move"); // Optional: To animate the icon
  menuElements.classList.toggle("active"); // Toggle menu visibility
});
// slider loop
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.loopslider').forEach(slider => {
      const direction = slider.getAttribute('rel'); // 'loopleft' or 'loopright'
      const ulElement = slider.querySelector('ul');

      const listItems = ulElement.querySelectorAll('li');
      const listWidth = listItems[0].offsetWidth;
      const listCount = listItems.length;

      // Clone the list for continuous loop
      const clonedUl = ulElement.cloneNode(true);
      const findWrap = slider.querySelector('.loopslider_wrap');

      if (direction === 'loopleft') {
          findWrap.appendChild(clonedUl);
      } else if (direction === 'loopright') {
          findWrap.insertBefore(clonedUl, ulElement);
      }
  });
});
// Smooth Scrolling
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.nav_links').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
          e.preventDefault(); // Prevent default anchor click behavior
          const targetId = this.getAttribute('href'); // Get the target ID
          const targetElement = document.querySelector(targetId); // Get the target element
          window.scrollTo({
              top: targetElement.offsetTop, // Scroll to the top of the target element
              behavior: 'smooth' // Smooth scrolling behavior
          });
      });
  });
});

