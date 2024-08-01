function showLoveMessage() {
    const messages = [
        "Aku mencintaimu lebih dari apa yang kamu bayangkan.",
        "Setiap hari bersamamu adalah hadiah yang tak ternilai.",
        "Kamu adalah segalanya bagiku.",
        "Aku beruntung memilikimu dalam hidupku.",
        "Cinta kita adalah cerita yang paling indah."
    ];

    const messageElement = document.getElementById('love-message');
    const randomIndex = Math.floor(Math.random() * messages.length);
    messageElement.textContent = messages[randomIndex];
}
