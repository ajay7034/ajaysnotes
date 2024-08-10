document.addEventListener('DOMContentLoaded', () => {
    const notepad = document.getElementById('notepad');
    const saveButton = document.getElementById('saveButton');
    const timestampElement = document.getElementById('timestamp');
    const darkModeToggle = document.getElementById('darkModeToggle');
    const savedNotes = localStorage.getItem('notes');
    const savedTimestamp = localStorage.getItem('timestamp');
    const darkMode = localStorage.getItem('darkMode') === 'true';

    if (savedNotes) {
        notepad.value = savedNotes;
    }

    if (savedTimestamp) {
        timestampElement.textContent = `Last saved: ${savedTimestamp}`;
    }

    if (darkMode) {
        document.body.classList.add('dark-mode');
        notepad.classList.add('dark-mode');
        darkModeToggle.checked = true;
    }

    notepad.addEventListener('input', () => {
        localStorage.setItem('notes', notepad.value);
    });

    saveButton.addEventListener('click', () => {
        const blob = new Blob([notepad.value], { type: 'text/plain' });
        const anchor = document.createElement('a');
        anchor.download = 'notes.txt';
        anchor.href = window.URL.createObjectURL(blob);
        anchor.target = '_blank';
        anchor.style.display = 'none';
        document.body.appendChild(anchor);
        anchor.click();
        document.body.removeChild(anchor);

        const timestamp = new Date().toLocaleString();
        localStorage.setItem('timestamp', timestamp);
        timestampElement.textContent = `Last saved: ${timestamp}`;
    });

    darkModeToggle.addEventListener('change', () => {
        document.body.classList.toggle('dark-mode');
        notepad.classList.toggle('dark-mode');
        localStorage.setItem('darkMode', darkModeToggle.checked);
    });
});
