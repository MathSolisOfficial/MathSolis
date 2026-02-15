const banner = document.getElementById('bannerImg');
const bannerTop = banner.offsetTop;
const bannerHeight = banner.offsetHeight;

window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    
    const windowCenter = scrollY + window.innerHeight / 2;
    const bannerCenter = bannerTop + bannerHeight / 2;
    
    let progress = (windowCenter - bannerCenter) / bannerHeight;
    progress = Math.max(Math.min(progress, 1), -1);
    
    // Минимальный scale = 0.88, максимальный = 0.92 (теперь увеличивается слабее)
    const scale = 0.88 + (0.92 - 0.88) * (1 - Math.abs(progress));
    
    banner.style.transform = `scale(${scale})`;
});


const hero = document.getElementById('heroImg');
const heroTop = hero.offsetTop;
const heroHeight = hero.offsetHeight;

window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;

    const windowCenter = scrollY + window.innerHeight / 2;
    const heroCenter = heroTop + heroHeight / 2;

    let progress = (windowCenter - heroCenter) / heroHeight;
    progress = Math.max(Math.min(progress, 1), -1);

    // Минимальный scale = 0.95 (чуть меньше текущего), максимум = 1.0 (по умолчанию)
    const scale = 0.95 + (1.0 - 0.95) * (1 - Math.abs(progress));

    hero.style.transform = `scale(${scale})`;
});

const purposeSection = document.querySelector('.purpose');
const purposeText = document.querySelector('.purpose-text');
const purposeImage = document.querySelector('.purpose-image');

window.addEventListener('scroll', () => {
    const rect = purposeSection.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    /*
      Анимация начинается РАНЬШЕ:
      когда 2 контейнер почти по центру экрана
    */
    if (rect.top < windowHeight * 0.75) {
        purposeText.classList.add('show');
        purposeImage.classList.add('show');
    } else {
        purposeText.classList.remove('show');
        purposeImage.classList.remove('show');
    }
});


const scrollBtn = document.querySelector('.scroll-footer');

scrollBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const footer = document.querySelector('#footer');
    footer.scrollIntoView({ behavior: 'smooth' });
});



const scrollTopBtn = document.getElementById('scrollTop');
const heroContainer = document.querySelector('.hero'); // твой hero контейнер

window.addEventListener('scroll', () => {
    const heroHeight = heroContainer.offsetHeight;

    // Кнопка появляется, когда прокрутили хотя бы 70% hero
    if (window.scrollY > heroHeight * 0.7) {
        scrollTopBtn.classList.add('show');
    } else {
        scrollTopBtn.classList.remove('show');
    }
});

// плавный скролл вверх при клике
scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
