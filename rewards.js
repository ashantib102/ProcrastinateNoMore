document.addEventListener('DOMContentLoaded', function() {
    var coins = 0;
    var coinDisplay = document.getElementById('coinDisplay');
    var timerButton = document.getElementById('timerButton');
    var journalButton = document.getElementById('journalButton');

    // Event listener for timer button
    timerButton.addEventListener('click', function() {
        coins += 10;  // Award 10 coins for using the timer
        updateDisplay();
    });

    // Event listener for journal button
    journalButton.addEventListener('click', function() {
        coins += 5;  // Award 5 coins for writing in the journal
        updateDisplay();
    });

    // Function to update the coin display
    function updateDisplay() {
        coinDisplay.textContent = 'Coins: ' + coins;
    }
});
