function submitAnswers() {
    // Собираем ответы
    const birthday = localStorage.getItem('birthday') || document.getElementById('birthday')?.value;
    const favoriteColor = localStorage.getItem('favoriteColor') || document.getElementById('favoriteColor')?.value;
    const favoriteFlowers = document.getElementById('favoriteFlowers')?.value;

    // Сохраняем ответы в localStorage (для переходов между страницами)
    if (birthday) localStorage.setItem('birthday', birthday);
    if (favoriteColor) localStorage.setItem('favoriteColor', favoriteColor);

    // Создаем сообщение с ответами
    const message = `Ответы пользователя:
    - День рождения: ${birthday}
    - Любимый цвет: ${favoriteColor}
    - Любимые цветы: ${favoriteFlowers}`;

    // Ваш токен бота Telegram и ID чата
    const botToken = '7127261486:AAGeUA36yn2M2XWistw77kPANuy16w6w3ss';
    const chatId = '6641294569';

    // Отправляем данные в Telegram
    const url = `https://api.telegram.org/bot${botToken}/sendMessage`;

    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            chat_id: chatId,
            text: message,
        }),
    })
    .then(response => {
        if (response.ok) {
            alert("Ответы успешно отправлены!");
            localStorage.clear();
        } else {
            alert("Ошибка при отправке ответов.");
        }
    })
    .catch(error => {
        console.error('Ошибка:', error);
        alert("Ошибка при отправке ответов.");
    });
}
