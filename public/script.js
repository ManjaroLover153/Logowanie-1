document.getElementById('login-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const username = e.target.username.value;
    const password = e.target.password.value;

    if (username && password) {
        alert('Zalogowano pomyślnie!');
        // W tym miejscu można dodać logikę logowania (np. sprawdzenie danych użytkownika)
        // Można przekierować na inną stronę:
        // window.location.href = '/dashboard';
    } else {
        alert('Proszę wypełnić wszystkie pola');
    }
});
