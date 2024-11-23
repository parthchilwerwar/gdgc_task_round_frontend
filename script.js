
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
