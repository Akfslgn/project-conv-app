const switcher = document.getElementById('flexSwitchCheckDefault');
switcher.addEventListener('change', () => {
    if(switcher.checked) {
        document.documentElement.setAttribute('data-bs-theme', 'dark');
    } else {
        document.documentElement.setAttribute('data-bs-theme', 'light');
    }
})

