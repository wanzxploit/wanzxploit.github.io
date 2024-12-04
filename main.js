let isDarkTheme = localStorage.getItem('theme') === 'dark'; // Memuat tema dari localStorage

// Mengatur tema saat halaman dimuat
document.addEventListener("DOMContentLoaded", function() {
    toggleThemeDisplay(); // Menyesuaikan tampilan berdasarkan tema yang tersimpan
});

// Fungsi untuk menampilkan tema berdasarkan status isDarkTheme
function toggleThemeDisplay() {
    const body = document.body;
    const header = document.querySelector('.header');
    const footer = document.getElementById('footer');
    const slideMenu = document.getElementById('slideMenu');
    const tabContents = document.querySelectorAll('.tab-content');
    const cards = document.querySelectorAll('.card');
    const gameCards = document.querySelectorAll('.game-card');
    const toolButtons = document.querySelectorAll('.tool-button');

    if (isDarkTheme) {
        body.setAttribute('data-theme', 'dark');
        header.setAttribute('data-theme', 'dark');
        footer.setAttribute('data-theme', 'dark');
        slideMenu.setAttribute('data-theme', 'dark');

        tabContents.forEach(tab => tab.setAttribute('data-theme', 'dark'));
        cards.forEach(card => card.setAttribute('data-theme', 'dark'));
        gameCards.forEach(gameCard => gameCard.setAttribute('data-theme', 'dark'));
        toolButtons.forEach(button => button.setAttribute('data-theme', 'dark'));
    } else {
        body.setAttribute('data-theme', 'light');
        header.setAttribute('data-theme', 'light');
        footer.setAttribute('data-theme', 'light');
        slideMenu.setAttribute('data-theme', 'light');

        tabContents.forEach(tab => tab.setAttribute('data-theme', 'light'));
        cards.forEach(card => card.setAttribute('data-theme', 'light'));
        gameCards.forEach(gameCard => gameCard.setAttribute('data-theme', 'light'));
        toolButtons.forEach(button => button.setAttribute('data-theme', 'light'));
    }
}

// Fungsi untuk toggle menu
function toggleMenu() {
    const slideMenu = document.getElementById('slideMenu');
    if (slideMenu.style.display === 'block') {
        slideMenu.style.left = '-250px';
        setTimeout(() => slideMenu.style.display = 'none', 300);
    } else {
        slideMenu.style.display = 'block';
        setTimeout(() => slideMenu.style.left = '0', 10);
    }
}

// Fungsi untuk toggle tema
function toggleTheme() {
    isDarkTheme = !isDarkTheme; // Toggle status tema
    localStorage.setItem('theme', isDarkTheme ? 'dark' : 'light'); // Simpan status tema ke localStorage
    toggleThemeDisplay(); // Update tampilan berdasarkan tema baru
}

// Fungsi untuk membuka pencarian
function openSearch() {
    // Misalnya mengarahkan ke halaman search
    window.location.href = 'search.html';
}

// Menambahkan event listener untuk klik di luar menu
document.addEventListener('click', function(event) {
    const slideMenu = document.getElementById('slideMenu');
    const menuToggle = document.querySelector('.menu-toggle');

    if (slideMenu.style.display === 'block' && !slideMenu.contains(event.target) && !menuToggle.contains(event.target)) {
        slideMenu.style.left = '-250px';
        setTimeout(() => slideMenu.style.display = 'none', 300);
    }
});

// Fungsi untuk menampilkan tab
function showTab(tabName) {
    const tabs = document.querySelectorAll('.tab-content');
    tabs.forEach(tab => tab.classList.remove('active'));
    document.getElementById(tabName).classList.add('active');
}

// Pastikan slide menu berubah warna di halaman settings
function updateSlideMenuTheme() {
    const slideMenu = document.getElementById('slideMenu');
    if (slideMenu) {
        slideMenu.setAttribute('data-theme', document.body.getAttribute('data-theme'));
    }
}

// Fungsi untuk memperbarui tema pada settings container
function updateSettingsTheme() {
    const sections = document.querySelectorAll('.settings-section, .settings-section-title, .settings-item');
    const theme = document.body.getAttribute('data-theme');
    sections.forEach(section => {
        section.setAttribute('data-theme', theme);
    });
}

// Fungsi tambahan untuk menghandle tema di berbagai halaman
function ensureThemeConsistency() {
    const body = document.body;
    const currentTheme = localStorage.getItem('theme') || 'light';
    body.setAttribute('data-theme', currentTheme);
    
    // Update elemen-elemen kunci
    const themeDependent = [
        '.header', 
        '.game-link', 
        '.blog-link', 
        '#footer', 
        '#slideMenu', 
        '.tab-content', 
        '.card', 
        '.game-card', 
        '.tool-button'
    ];

    themeDependent.forEach(selector => {
        const elements = document.querySelectorAll(selector);
        elements.forEach(el => el.setAttribute('data-theme', currentTheme));
    });

    // Update icon tema jika ada
    const themeIcon = document.getElementById('themeIcon');
    if (themeIcon) {
        themeIcon.classList.toggle('fa-sun', currentTheme === 'light');
        themeIcon.classList.toggle('fa-moon', currentTheme === 'dark');
    }
}

// Jalankan saat halaman dimuat
document.addEventListener('DOMContentLoaded', () => {
    ensureThemeConsistency();
    updateSlideMenuTheme();
    
    // Tambahkan event listener untuk tombol pencarian
    const searchToggle = document.querySelector('.search-toggle');
    if (searchToggle) {
        searchToggle.addEventListener('click', openSearch);
    }
});
function goBack() {
    window.history.back();
}

        function copyCode(button) {
            const codeBlock = button.nextElementSibling;
            const code = codeBlock.textContent.trim();
            
            navigator.clipboard.writeText(code).then(() => {
                button.innerHTML = '<i class="fas fa-check"></i>';
                setTimeout(() => {
                    button.innerHTML = '<i class="fas fa-copy"></i>';
                }, 2000);
            });
        }

        function ensureThemeConsistency() {
            const currentTheme = localStorage.getItem('theme') || 'light';
            document.body.setAttribute('data-theme', currentTheme);
            
            const themeDependent = [
                '.header', 
                '.code-snippet',
                '.warning-box'
            ];

            themeDependent.forEach(selector => {
                const elements = document.querySelectorAll(selector);
                elements.forEach(el => el.setAttribute('data-theme', currentTheme));
            });
        }

        document.addEventListener('DOMContentLoaded', ensureThemeConsistency);

        // Optional: Tambahkan event listener untuk perubahan tema
        window.addEventListener('themeChange', ensureThemeConsistency);
        // Fungsi pencarian konten
function searchContent() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const activeTab = document.querySelector('.tab-content.active');
    const searchableItems = activeTab.querySelectorAll('[data-search-tags]');

    searchableItems.forEach(item => {
        const searchTags = item.getAttribute('data-search-tags').toLowerCase();
        if (searchTags.includes(searchInput)) {
            item.classList.remove('hidden');
        } else {
            item.classList.add('hidden');
        }
    });
}

// ... fungsi-fungsi sebelumnya tetap sama ...

// Tambahan: Reset pencarian saat ganti tab
function showTab(tabName) {
    const tabs = document.querySelectorAll('.tab-content');
    tabs.forEach(tab => tab.classList.remove('active'));
    document.getElementById(tabName).classList.add('active');
    
    // Reset input pencarian
    document.getElementById('searchInput').value = '';
    
    // Tampilkan semua item
    const searchableItems = document.querySelectorAll('[data-search-tags]');
    searchableItems.forEach(item => {
        item.classList.remove('hidden');
    });
}
// Tambahkan di bagian akhir script Anda
document.addEventListener('DOMContentLoaded', function() {
    // Pilih semua card blog
    const blogCards = document.querySelectorAll('.card, .game-card');
    
    blogCards.forEach(card => {
        // Tambahkan event listener pada setiap card
        card.addEventListener('click', function(event) {
            // Cari link di dalam card
            const cardLink = this.querySelector('.blog-link, .game-link');
            
            // Pastikan klik tidak terjadi pada link itu sendiri untuk menghindari double trigger
            if (cardLink && !event.target.closest('a')) {
                // Buka link di tab baru
                window.open(cardLink.href, '_blank');
            }
        });

        // Ubah cursor agar menandakan card bisa diklik
        card.style.cursor = 'pointer';
    });
});