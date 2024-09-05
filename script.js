// Function to toggle the display of the dropdown content
function toggleDropdown(hobbyId) {
    var content = document.getElementById(hobbyId);
    var button = content.previousElementSibling; // Select the button before the content

    if (content.style.display === "block") {
        content.style.display = "none";
        button.classList.remove('active'); // Remove the active class when closed
    } else {
        content.style.display = "block";
        button.classList.add('active'); // Add the active class when opened
    }
}

function copyEmailToClipboard() {
    const email = 'your-email@example.com'; // Replace with your email address
    navigator.clipboard.writeText(email).then(() => {
        alert('Email address copied to clipboard!');
    }, () => {
        alert('Failed to copy email address.');
    });
}

// Function to play background music on user interaction
function playMusic() {
    var audio = document.getElementById('background-music');
    audio.play();
}

// Function to pause background music
function pauseMusic() {
    var audio = document.getElementById('background-music');
    audio.pause();
}

// Play music when the page loads
window.onload = function() {
    document.body.addEventListener('click', playMusic, { once: true });
};
