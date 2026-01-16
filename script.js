// Basic carousel simulation
const testimonials = document.querySelectorAll('.testimonial');
let i = 0;
setInterval(() => {
  testimonials.forEach((t, index) => t.style.display = index === i ? 'block' : 'none');
  i = (i + 1) % testimonials.length;
}, 4000);
