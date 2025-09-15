// Este arquivo pode ser usado para adicionar interatividade
// Por exemplo, uma rolagem suave para as seções

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Adicione aqui outros efeitos, como animações ao rolar a página ou ao passar o mouse.s