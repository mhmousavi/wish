document.addEventListener('DOMContentLoaded', function () {
    let clickCount = 0;
    const logo = document.getElementById('logo');
    const clickCounterText = document.getElementById('clickCounterText');
    const filesContainer = document.getElementById('filesContainer');

    // Function to create and append a link, with animation
    function revealFile(href, text, filename = null) { // Added filename parameter
        // Add animation class
        logo.classList.add('rotate-animation');

        // Wait for the animation to complete (2000ms = 2 seconds)
        setTimeout(() => {
            // Remove animation class after it completes, so it can be re-applied on next click
            logo.classList.remove('rotate-animation');

            const newLink = createLink(href, text, filename); // Pass filename to createLink
            filesContainer.appendChild(newLink);
            // Use a slight delay to ensure CSS transition works for display property
            setTimeout(() => {
                newLink.classList.add('show');
            }, 10);
        }, 2000); // 2 seconds delay
    }

    logo.addEventListener('click', function () {
        clickCount++;

        if (clickCount === 1) {
            clickCounterText.textContent = "Press me 2 more times";
            revealFile("letter.pdf", "Download PDF File", "letter.pdf");
        } else if (clickCount === 2) {
            clickCounterText.textContent = "Press me 1 more time";
            revealFile("voice.mp3", "Download MP3 File", "voice.mp3");
        } else if (clickCount === 3) {
            clickCounterText.textContent = "Here are your files!";
            revealFile("video.mp4", "Download MP4 File", "video.mp4");
        } else {
            clickCounterText.textContent = "All files revealed!";
        }
    });

    function createLink(href, text, filename = null) {
        const fileLinkDiv = document.createElement('div');
        fileLinkDiv.classList.add('file-link');

        const anchor = document.createElement('a');
        anchor.href = href;
        anchor.textContent = text;
        anchor.download = filename || true; // Use filename if provided, otherwise just true
        anchor.target = "_blank"; // This will open the link in a new tab

        fileLinkDiv.appendChild(anchor);
        return fileLinkDiv;
    }
});