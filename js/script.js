// Código para transformar o menu hambuguer em x ao fechar //

const menuHamburguer = document.querySelector('.menu-hamburguer')
menuHamburguer.addEventListener('click', () => {
    toggleMenu();
});

function toggleMenu() {
    const nav = document.querySelector('.nav-responsive')
    menuHamburguer.classList.toggle('change');

    if(menuHamburguer.classList.contains('change')) {
        nav.style.display = 'block';

    } else {
        nav.style.display = 'none'; 
    }
}



 // Validação e feedback do formulário
  const form = document.getElementById('contactForm');
  const formMessage = document.getElementById('formMessage');

  form.addEventListener('submit', function(event) {
    event.preventDefault();

    // Simples validação
    const nome = form.nome.value.trim();
    const email = form.email.value.trim();
    const mensagem = form.mensagem.value.trim();

    if (!nome || !email || !mensagem) {
      alert('Por favor, preencha todos os campos.');
      return;
    }

    // Validação básica de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert('Por favor, insira um email válido.');
      return;
    }

    // Simulação do envio de mensagem
    formMessage.textContent = 'Mensagem enviada com sucesso! Obrigado pelo contato, ' + nome + '.';
    formMessage.style.display = 'block';

    form.reset();
  });