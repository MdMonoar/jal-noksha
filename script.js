// back to top button function

const _back_to_top = document.querySelector('._back_to_top');

window.onscroll = function() {scrollFunction()};
function scrollFunction() {
if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    _back_to_top.style.bottom = "6vh";
} else {
    _back_to_top.style.bottom = "-30px";
}

}
_back_to_top.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });
})