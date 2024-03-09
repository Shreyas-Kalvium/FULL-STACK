const toggleSidebarBtn = document.querySelector('.toggle-sidebar');
const sidebar = document.getElementById('sidebar');

toggleSidebarBtn.addEventListener('click', () => {
    sidebar.classList.toggle('active');
});
