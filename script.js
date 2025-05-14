// Toggle Read More functionality
const buttons = document.querySelectorAll('.read-more-btn');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const extraContent = button.nextElementSibling;
    extraContent.classList.toggle('hidden');
    button.textContent = extraContent.classList.contains('hidden') ? 'Read More' : 'Show Less';
  });
});
