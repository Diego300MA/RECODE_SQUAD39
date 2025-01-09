// Exemplo de script simples para interação
document.addEventListener('DOMContentLoaded', function () {
    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        card.addEventListener('click', () => {
            alert('Você clicou em uma contribuição histórica!');
        });
    });
});