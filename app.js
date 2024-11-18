const express = require('express');
const path = require('path');
const app = express();

// Middleware do parsowania danych POST
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serwowanie plików statycznych
app.use(express.static(path.join(__dirname, 'public')));

// Strona logowania
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Przykładowa obsługa POST po zalogowaniu
app.post('/', (req, res) => {
    const { username, password } = req.body;
    // Tutaj można dodać logikę weryfikacji użytkownika
    if (username === 'admin' && password === 'admin') {
        res.send('Zalogowano pomyślnie!');
    } else {
        res.send('Błędne dane logowania');
    }
});

app.listen(3000, () => {
    console.log('Serwer działa na porcie 3000');
});
