// Fungsi mengecek status login di setiap halaman dashboard
function checkAuth() {
  if (localStorage.getItem('dompetku_logged_in') !== 'true') {
    window.location.href = 'login.html';
  }
}

// Fungsi login user
function loginUser(username, password) {
  // Ambil data user terdaftar dari localStorage
  const storedUser = JSON.parse(localStorage.getItem('dompetku_user'));

  if (!storedUser) {
    alert('Akun tidak ditemukan! Silakan register terlebih dahulu.');
    return false;
  }

  if (storedUser.username === username && storedUser.password === password) {
    localStorage.setItem('dompetku_logged_in', 'true');
    
    // --- SUDAH DIUBAH KE INDEX.HTML DI SINI ---
    window.location.href = 'index.html'; 
    
    return true;
  } else {
    alert('Username atau password salah!');
    return false;
  }
}

// Fungsi register user baru
function registerUser(username, password) {
  if (!username || !password) {
    alert('Username dan password tidak boleh kosong!');
    return false;
  }
  
  const userData = { username: username, password: password };
  localStorage.setItem('dompetku_user', JSON.stringify(userData));
  alert('Registrasi Berhasil! Silakan masuk.');
  window.location.href = 'login.html'; // Arahkan ke halaman login
  return true;
}

// Fungsi logout user
function logoutUser() {
  localStorage.removeItem('dompetku_logged_in');
  window.location.href = 'login.html';
}
