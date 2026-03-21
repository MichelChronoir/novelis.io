// Navigasi Antar Layar
const loginForm = document.getElementById('login-form');
const loginScreen = document.getElementById('login-screen');
const workspace = document.getElementById('workspace');
const editor = document.getElementById('main-editor');

// 1. Logika Login (Sederhana untuk GitHub Pages)
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('user-email').value;
    
    // Simpan status login
    localStorage.setItem('isLoggedIn', 'true');
    localStorage.setItem('userEmail', email);
    
    showWorkspace();
});

function showWorkspace() {
    loginScreen.classList.add('hidden');
    workspace.classList.remove('hidden');
    loadSavedData();
}

// 2. Statistik Kata
editor.addEventListener('input', () => {
    const text = editor.value.trim();
    const words = text ? text.split(/\s+/).length : 0;
    document.getElementById('word-count').innerText = words;
    document.getElementById('char-count').innerText = text.length;
    
    // Tampilkan asisten jika mengetik banyak
    const assistant = document.getElementById('ai-assistant');
    if (words > 5) assistant.classList.remove('hidden');
    
    // Auto-save
    localStorage.setItem('current_novel_content', text);
});

// 3. Simulasi Fitur AI
function runAIAction(type) {
    const btn = event.target;
    const originalText = btn.innerText;
    btn.innerText = "Sedang Berpikir...";
    btn.disabled = true;

    setTimeout(() => {
        let aiResult = "";
        const currentContent = editor.value;

        if(type === 'generate') {
            aiResult = "\n\n[DRAFT AI]: Langit di atas kota Jakarta tampak lebih gelap dari biasanya. Guntur bersahutan di kejauhan, seolah memberi peringatan tentang sesuatu yang besar yang akan segera terjadi...";
            editor.value += aiResult;
        } else if(type === 'improve') {
            alert("Fitur AI Editor: Memperbaiki tata bahasa...");
            // Logika rewrite di sini
        }

        btn.innerText = originalText;
        btn.disabled = false;
        lucide.createIcons();
    }, 2000);
}

// 4. Logout
function logout() {
    localStorage.clear();
    location.reload();
}

// 5. Cek Session saat Load
window.onload = () => {
    if(localStorage.getItem('isLoggedIn') === 'true') {
        showWorkspace();
    }
};
