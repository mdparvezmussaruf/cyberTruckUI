const btn = document.querySelector('.cyber-btn');
if (btn) {
    setInterval(() => {
        btn.style.boxShadow = '0 0 20px rgba(0, 212, 255, 0.8)';
        setTimeout(() => {
            btn.style.boxShadow = 'none';
        }, 1000);
    }, 2000);
}
