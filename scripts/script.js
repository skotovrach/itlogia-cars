document.getElementById('main-action').onClick = function() {
    document.getElementById('cars').scrollIntoView(true)
};

document.addEventListener("DOMContentLoaded", function () {
    let layer = document.querySelector('.price-img');
document.addEventListener('mousemove', (event) => {
        layer.style.transform = 'translate3d(' + ((event.clientX * 0.1) / 1) + 'px,' + ((event.clientY * 0.2) / 5) + 'px,0px)';
});

    const elem = document.querySelector(".main");
document.addEventListener('scroll', () => {
        elem.style.backgroundPositionX = '0' + (0.2 * window.pageYOffset) + 'px';
})
});