
const $bar = document.querySelector('#bar');
const $nav = document.querySelector('#nav');
$bar.addEventListener('click', () => {
    $nav.classList.toggle('invisible');
    $nav.classList.toggle('flex');
    $nav.classList.toggle('h-auto');
    $nav.classList.toggle('opacity-0');
});
