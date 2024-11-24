
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


const playBtn = document.querySelector('.play-btn');
if (playBtn) {
    playBtn.addEventListener('click', () => {
        playBtn.style.transform = 'scale(0.95)';
        setTimeout(() => {
            playBtn.style.transform = 'scale(1)';
        }, 200);
    });
}




const successCounter = document.querySelector('.card.yellow h3');
if (successCounter) {
    const target = 700;
    let current = 0;
    
    const updateCounter = () => {
        if (current < target) {
            current += 5;
            successCounter.textContent = current + '+';
            setTimeout(updateCounter, 20);
        }
    };

    
    const observer = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
            updateCounter();
        }
    });
    
    observer.observe(successCounter);
}


const cards = document.querySelectorAll('.card');
if (cards.length > 0) {
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            cards.forEach(c => {
                if (c !== card) {
                    c.style.filter = 'blur(3px)'; 
                }
            });
        });

        card.addEventListener('mouseleave', () => {
            cards.forEach(c => {
                c.style.filter = 'none'; 
            });
        });
    });
}



const signUpBtn = document.querySelector('.sign-up');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > lastScroll && currentScroll > 100) {
        document.querySelector('header').style.transform = 'translateY(-100%)';
    } else {
        document.querySelector('header').style.transform = 'translateY(0)';
    }

    lastScroll = currentScroll;
});




const grayCard = document.querySelector('.card.gray');
if (grayCard) {
    const dots = grayCard.querySelectorAll('.dots i');

    const changeContent = (index) => {
        const titles = ['OUR CASE STUDIES', 'OUR CASE STUDIES 2'];

        grayCard.querySelector('h3').textContent = titles[index];

        dots.forEach((dot, i) => {
            if (i === index) {
                dot.style.backgroundColor = 'black'; 
            } else {
                dot.style.backgroundColor = 'transparent'; 
            }
        });
    };

    
    changeContent(0);

    
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            changeContent(index);
        });
    });
}


const initializeHeroCardDots = () => {
    const heroCard = document.querySelector('.hero-card');
    if (!heroCard) return;

    const dots = heroCard.querySelectorAll('.dots1 i');
    if (!dots.length) return;

    let currentIndex = 0;
    const contents = [
        {
            title: 'YOUR<br>BUSINESS<br>BOOST',
            image: 'istockphoto-1257039642-612x612-removebg-preview.png'
        },
        {
            title: 'GROW<br>YOUR<br>BUSINESS',
            image: 'toaddimage1 (1).png'
        }
    ];

    const updateContent = (index) => {
        const contentTitle = heroCard.querySelector('.card-content h2');
        const backgroundImage = heroCard.querySelector('.background-image img');

        if (!contentTitle || !backgroundImage) return;

        
        contentTitle.innerHTML = contents[index].title;
        backgroundImage.src = contents[index].image;

        
        dots.forEach((dot, i) => {
            if (i === index) {
                dot.classList.remove('ri-circle-line');
                dot.classList.add('ri-circle-fill');
            } else {
                dot.classList.remove('ri-circle-fill');
                dot.classList.add('ri-circle-line');
            }
        });
    };

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            if (currentIndex !== index) {
                currentIndex = index;
                updateContent(currentIndex);
            }
        });
    });

    const autoRotate = () => {
        setInterval(() => {
            currentIndex = (currentIndex + 1) % contents.length;
            updateContent(currentIndex);
        }, 5000);
    };

    
    dots[0].classList.remove('ri-circle-line');
    dots[0].classList.add('ri-circle-fill');
    updateContent(0);

    
    autoRotate();
};


const addStyles = () => {
    const style = document.createElement('style');
    style.textContent = `
        .dots1 {
            display: flex;
            gap: ;
            z-index: 10;
            justify-content: center;
        }

        .dots1 i {
            cursor: pointer;
            font-size: 1.2rem;
        }

        .dots1 .ri-circle-fill {
            color: var(--dark);
        }

        .dosts1 .ri-circle-line {
            color: var(--gray);
        }

        .hero-card {
            position: relative;
            text-align: center;
        }

        .hero-card .card-content h2 {
            font-size: 2rem;
            margin: 1rem 0;
        }

        .hero-card .background-image img {
            width: 100%;
            top:30px
            max-width: 500px;
            margin: 0 auto;
            display: block;
            position: relative;
        }
    `;
    document.head.appendChild(style);
};


document.addEventListener('DOMContentLoaded', () => {
    addStyles();
    initializeHeroCardDots();
});


