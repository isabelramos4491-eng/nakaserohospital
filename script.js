document.addEventListener('DOMContentLoaded', () => {
  // Sticky header background transition
  const header = document.querySelector('header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.style.background = 'rgba(255, 255, 255, 0.95)';
      header.style.boxShadow = 'var(--soft-shadow)';
    } else {
      header.style.background = 'var(--glass-bg)';
      header.style.boxShadow = 'var(--soft-shadow)';
    }
  });

  // Parallax effect on Hero Blobs
  const blobs = document.querySelectorAll('.blob');
  window.addEventListener('mousemove', (e) => {
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;
    
    blobs.forEach((blob, index) => {
      const speed = (index + 1) * 20;
      const xPos = (window.innerWidth / 2 - e.pageX) / speed;
      const yPos = (window.innerHeight / 2 - e.pageY) / speed;
      blob.style.transform = `translate(${xPos}px, ${yPos}px)`;
    });
  });

  // Intersection Observer for scroll animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Apply initial hidden styles to cards for animation
  const animatedElements = document.querySelectorAll('.action-card, .why-item, .news-card, .care-info');
  
  animatedElements.forEach((el, index) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(40px)";
    el.style.transition = `all 0.6s ease ${index * 0.1}s`;
    observer.observe(el);
  });
});
