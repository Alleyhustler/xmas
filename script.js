// JavaScript to simulate hacker typing effect
document.getElementById("hacker-input").addEventListener("keydown", function(event) {
    event.preventDefault(); // Prevent actual typing

    const hackerText = `
        For XMAS...
        I want
        100 SOL
        $XMAS TO 10M MCAP
        DUBAI FLIGHT
        BUGATTI
        A PET
        
        Terminating session...
    `;

    let currentText = this.value;
    let newText = currentText + hackerText.substring(currentText.length, currentText.length + 3);
    this.value = newText;  // Display simulated typing
});

// Function to toggle audio play/pause
function toggleAudio() {
    const audio = document.getElementById("audio");
    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }
}
