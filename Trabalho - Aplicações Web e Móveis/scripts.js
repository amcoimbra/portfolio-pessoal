// scripts.js

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o envio real do formulário

    // Exibe uma mensagem de agradecimento
    alert('Obrigado por entrar em contato! Em breve, retornarei sua mensagem.');

    // Aqui poderia ser implementado o envio do formulário via API ou outras integrações
    this.reset(); // Reseta o formulário após o envio
});
