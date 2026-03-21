// Login Logic
const loginForm = document.getElementById('login-form');
const loginScreen = document.getElementById('login-screen');
const workspace = document.getElementById('workspace');

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    // Animasi transisi
    loginScreen.style.opacity = '0';
    setTimeout(() => {
        loginScreen.classList.add('hidden');
        workspace.classList.remove('hidden');
    }, 500);
});

// Editor Logic
const editor = document.getElementById('main-editor');
const wordCountDisplay = document.getElementById('word-count');

editor.addEventListener('input', () => {
    const text = editor.value.trim();
    const words = text ? text.split(/\s+/).length : 0;
    wordCountDisplay.innerText = words;
    
    // Auto-save ke LocalStorage
    localStorage.setItem('currentDraft', text);
});

// Simulasi AI Ghostwriter
function generateDraft() {
    const pov = document.getElementById('pov-select').value;
    editor.value += `\n\n[Sistem AI sedang merancang adegan dalam ${pov}...]\n`;
    
    // Simulasi respons delay
    setTimeout(() => {
        const mockResponse = "Angin malam berdesir membawa aroma hujan yang belum tumpah. Aku berdiri di tepian balkon, menatap lampu-lampu kota yang tampak seperti berlian tercecer di atas beludru hitam. 'Semua ini akan berakhir,' bisikku pada kesunyian.";
        editor.value += mockResponse;
    }, 1500);
}

// Load data lama jika ada
window.onload = () => {
    const saved = localStorage.getItem('currentDraft');
    if(saved) editor.value = saved;
}
