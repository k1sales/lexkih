document.addEventListener('DOMContentLoaded', () => {
    const content = document.querySelector('.content');
    setTimeout(() => {
        content.style.transition = "opacity 2s";
        content.style.opacity = 1;
    }, 500);
});
