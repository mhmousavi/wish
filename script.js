document.addEventListener('DOMContentLoaded', function () {
    let clickCount = 0;
    const logo = document.getElementById('logo');
    const clickCounterText = document.getElementById('clickCounterText');
    const filesContainer = document.getElementById('filesContainer');

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
        }, 2000); // animation duration
    }

    logo.addEventListener('click', function () {
        clickCount++;

        if (clickCount === 1) {
            revealFile("letter.pdf", "Download the letter", "letter.pdf", "Appuie sur moi deux fois encore 😉");
        } else if (clickCount === 2) {
            revealFile("voice.mp3", "Download the voice", "voice.mp3", "Appuie sur moi encore une fois 😉");
        } else if (clickCount === 3) {
            revealFile("video.mp4", "Download the video", "video.mp4", "Voici tes fichiers !");
        } else {
            // For this last text, no animation, so just update instantly
            clickCounterText.textContent = "Au revoir mon amour";
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
