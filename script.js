document.addEventListener('DOMContentLoaded', (event) => {
  // Dynamic background (existing code)
  const backgroundAnimation = document.createElement('div');
  backgroundAnimation.classList.add('background-animation');
  document.body.appendChild(backgroundAnimation);

  function createBackgroundElement() {
    const element = document.createElement('div');
    element.style.position = 'absolute';
    element.style.width = `${Math.random() * 50 + 10}px`;
    element.style.height = element.style.width;
    element.style.left = `${Math.random() * 100}vw`;
    element.style.top = `${Math.random() * 100}vh`;
    element.style.background = `radial-gradient(circle, var(--primary-color), var(--secondary-color))`;
    element.style.borderRadius = '50%';
    backgroundAnimation.appendChild(element);

    const duration = Math.random() * 10 + 5;
    const xDistance = (Math.random() - 0.5) * 100;
    const yDistance = (Math.random() - 0.5) * 100;
    

    element.animate(
      [
        { transform: 'translate(0, 0) scale(1)', opacity: 0 },
        { opacity: 0.1, offset: 0.5 },
        { transform: `translate(${xDistance}vw, ${yDistance}vh) scale(0)`, opacity: 0 }
      ],
      {
        duration: duration * 1000,
        iterations: Infinity,
        direction: 'alternate',
        easing: 'ease-in-out'
      }
      
    );

    setTimeout(() => {
      element.remove();
      createBackgroundElement();
    }, duration * 2000);
  }

  if (window.innerWidth > 768) {
    for (let i = 0; i < 20; i++) {
      createBackgroundElement();
    }
  }

  // Typing effect for the page title
  const pageTitle = document.title;  // Get the page title from the <title> tag
  const welcomeElement = document.querySelector('header h1');

  if (welcomeElement && pageTitle) {
    let i = 0;

    function typeWriter() {
      if (i < pageTitle.length) {
        welcomeElement.innerHTML += pageTitle.charAt(i);
        i++;
        setTimeout(typeWriter, 100);
      }
    }

    typeWriter();
  }

   // Collapsible sections
   const collapsibles = document.querySelectorAll(".collapsible");

   collapsibles.forEach((collapsible) => {
     collapsible.addEventListener("click", function () {
       this.classList.toggle("active");
       const content = this.nextElementSibling;
       if (content.style.display === "block") {
         content.style.display = "none";
       } else {
         content.style.display = "block";
       }
     });
   });


  // Lazy load images (existing code)
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.classList.add('fade-in');
        imageObserver.unobserve(img);
      }
    });
  }, imageOptions);

  images.forEach(img => {
    imageObserver.observe(img);
  });

  // Initialize Feather icons
  feather.replace();
});


var ul = document.getElementById("navbar__list");
var link1 = document.createElement("a");
var Li1 = document.createElement("li").appendChild(document.createElement("a"));
var sec1 = ul.appendChild(Li1)
link1.innerHTML = "Section 1"
link1.href ="#section1"