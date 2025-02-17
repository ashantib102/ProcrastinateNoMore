let points = 0; // Initialize points variable

// Load saved entry if available 
window.onload = function() {
    const savedEntry = localStorage.getItem('journalEntry');
    if (savedEntry) {
        document.getElementById('entry').value = savedEntry;
        document.getElementById('savedEntryDisplay').innerText = savedEntry;
    }
    updatePointsDisplay(); // Ensure points display is updated when page loads
};

// Save journal entry to local storage
function saveEntry() {
    const entry = document.getElementById('entry').value;
    localStorage.setItem('journalEntry', entry);
    document.getElementById('savedEntryDisplay').innerText = entry;  // Display saved entry next to the form
    alert('Journal entry saved!');
    
    // Count words and award points
    const wordCount = countWords(entry);
    points += Math.floor(wordCount / 10) * 2; // Award 2 points for every 10 words
    updatePointsDisplay(); // Update the points display
};

// Clear saved entry when the page is unloaded (e.g., user leaves the page)
window.onbeforeunload = function() {
    localStorage.removeItem('journalEntry');
};

// Count the number of words in the journal entry
function countWords(entry) {
    // Split the entry into words using spaces, then filter out any empty words
    const words = entry.trim().split(/\s+/).filter(word => word.length > 0);
    return words.length;
}

// Update the points display in the navbar
function updatePointsDisplay() {
    document.getElementById('pointsDisplay').innerText = `Points: ${points}`;
}
