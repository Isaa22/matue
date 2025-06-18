document.addEventListener('DOMContentLoaded', function() {
    // Menu Mobile
    const menuToggle = document.getElementById('menuToggle');
    const nav = document.querySelector('.nav');
    
    menuToggle.addEventListener('click', function() {
        nav.classList.toggle('active');
        this.querySelector('i').classList.toggle('fa-times');
        this.querySelector('i').classList.toggle('fa-bars');
    });
    
    // Fechar menu ao clicar em um link
    const navLinks = document.querySelectorAll('.nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            nav.classList.remove('active');
            menuToggle.querySelector('i').classList.remove('fa-times');
            menuToggle.querySelector('i').classList.add('fa-bars');
        });
    });
    
    // Scroll suave para links internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Header scroll effect
    const header = document.querySelector('.header');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
    
    // Formulário de contato
    const formContato = document.getElementById('formContato');
    if (formContato) {
        formContato.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const nome = document.getElementById('nome').value;
            const email = document.getElementById('email').value;
            const mensagem = document.getElementById('mensagem').value;
            
            // Aqui você pode adicionar a lógica para enviar o formulário
            console.log('Formulário enviado:', { nome, email, mensagem });
            
            // Exibir mensagem de sucesso
            alert('Mensagem enviada com sucesso! Em breve entraremos em contato.');
            
            // Limpar formulário
            formContato.reset();
        });
    }
    
    // Newsletter
    const newsletterForm = document.getElementById('newsletterForm');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const email = this.querySelector('input[type="email"]').value;
            
            // Aqui você pode adicionar a lógica para assinar a newsletter
            console.log('Newsletter assinado:', email);
            
            // Exibir mensagem de sucesso
            alert('Obrigado por assinar nossa newsletter!');
            
            // Limpar formulário
            this.reset();
        });
    }
    
    // Animação ao rolar a página
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.timeline-item, .album, .sobre-content > div');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            
            if (elementPosition < screenPosition) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    };
    
    // Definir estado inicial para elementos animados
    const timelineItems = document.querySelectorAll('.timeline-item');
    const albums = document.querySelectorAll('.album');
    const sobreDivs = document.querySelectorAll('.sobre-content > div');
    
    timelineItems.forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(30px)';
        item.style.transition = 'all 0.5s ease';
    });
    
    albums.forEach(album => {
        album.style.opacity = '0';
        album.style.transform = 'translateY(30px)';
        album.style.transition = 'all 0.5s ease';
    });
    
    sobreDivs.forEach(div => {
        div.style.opacity = '0';
        div.style.transform = 'translateY(30px)';
        div.style.transition = 'all 0.5s ease';
    });
    
    // Disparar animação quando a página carrega e ao rolar
    window.addEventListener('load', animateOnScroll);
    window.addEventListener('scroll', animateOnScroll);
});
