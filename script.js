// Функція, яка викликається при натисканні на кнопку
function showDetails(professionName) {
    // В реальному проекті тут міг би бути перехід на іншу сторінку або відкриття модального вікна
    alert(`Цікавий вибір!\n\nПрофесія "${professionName}" потребуватиме міцних знань у сфері інформаційних технологій. Можливо, варто почати поглиблювати знання з алгоритмів уже зараз?`);
}

// Додаємо плавний ефект появи карток при завантаженні сторінки
document.addEventListener("DOMContentLoaded", () => {
    // Знаходимо всі елементи з класом .card
    const cards = document.querySelectorAll('.card');
    
    // Перебираємо кожну картку
    cards.forEach((card, index) => {
        // Початковий стан: прозорі та трохи опущені вниз
        card.style.opacity = "0";
        card.style.transform = "translateY(30px)";
        
        // Встановлюємо затримку анімації (кожна наступна картка з'являється трохи пізніше)
        card.style.transition = `all 0.6s cubic-bezier(0.4, 0, 0.2, 1) ${index * 0.15}s`;
        
        // Через мілісекунду запускаємо анімацію
        setTimeout(() => {
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";
        }, 50);
    });
});