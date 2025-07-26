document.addEventListener('DOMContentLoaded', function () {
    let clickCount = 0;
    const logo = document.getElementById('logo');
    const clickCounterText = document.getElementById('clickCounterText');
    const filesContainer = document.getElementById('filesContainer');

   logo.classList.add('rotate-animation');
    setTimeout(() => {
        logo.classList.remove('rotate-animation');
    }, 1000);

    function revealFile(href, text, filename = null, newText) {
        // Add animation class
        logo.classList.add('rotate-animation');

        setTimeout(() => {
            logo.classList.remove('rotate-animation');

            const newLink = createLink(href, text, filename);
            filesContainer.appendChild(newLink);

            setTimeout(() => {
                newLink.classList.add('show');
            }, 10);

            // Update text content here to sync with animation end
            if (newText) {
                clickCounterText.textContent = newText;
            }
        }, 1000); // animation duration
    }

    logo.addEventListener('click', function () {
        clickCount++;

        if (clickCount === 1) {
            revealFile("letter.pdf", "📄 Take the letter", "letter.pdf", "Appuie sur moi deux fois encore 😉");
        } else if (clickCount === 2) {
            revealFile("voice.mp3", "🎤 Take the voice", "voice.mp3", "Appuie sur moi encore une fois 😉");
        } else if (clickCount === 3) {
            revealFile("video.mp4", "🎬 Take the video", "video.mp4", "Voici tes fichiers !");
        } else if (clickCount > 6) {
            clickCounterText.textContent = "💖 Surprise! Je t'aime 💖";
            filesContainer.innerHTML = "";
            showHearts();
        } else {
            // For this last text, no animation, so just update instantly
            clickCounterText.textContent = "Au revoir mon amour";
            filesContainer.innerHTML = ""; // Clear all files
        }
    });

    function createLink(href, text, filename = null) {
        const fileLinkDiv = document.createElement('div');
        fileLinkDiv.classList.add('file-link');

        const anchor = document.createElement('a');
        anchor.href = href;
        anchor.textContent = text;
        anchor.download = filename || true;
        anchor.target = "_blank";

        fileLinkDiv.appendChild(anchor);
        return fileLinkDiv;
    }
});


// Add this function at the end of your script
function showHearts() {
    for (let i = 0; i < 10; i++) {
        const heart = document.createElement('div');
        heart.textContent = '💖';
        heart.style.position = 'fixed';
        heart.style.left = Math.random() * 90 + 'vw';
        heart.style.top = '100vh';
        heart.style.fontSize = (Math.random() * 30 + 30) + 'px';
        heart.style.opacity = 0.8;
        heart.style.transition = 'top 2s linear, opacity 2s linear';
        document.body.appendChild(heart);
        setTimeout(() => {
            heart.style.top = Math.random() * 40 + 'vh';
            heart.style.opacity = 0;
        }, 100);
        setTimeout(() => {
            heart.remove();
        }, 2200);
    }
}