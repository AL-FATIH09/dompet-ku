// Fungsi untuk mengecek apakah user sudah login
function checkAuth() {
    const isLoggedIn = localStorage.getItem('dompetku_logged_in');
    
    // Jika berada di halaman utama tapi belum login, tendang ke login.html
    if (!isLoggedIn && window.location.pathname.includes('index.html')) {
        window.location.href = 'login.html';
    }
    // Jika sudah login tapi iseng buka halaman login/register, lempar ke index.html
    if (isLoggedIn && (window.location.pathname.includes('login.html') || window.location.pathname.includes('register.html'))) {
        window.location.href = 'index.html';
    }
}

// Fungsi untuk proses Logout
function logoutUser() {
    localStorage.removeItem('dompetku_logged_in');
    window.location.href = 'login.html';
}