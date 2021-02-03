var but1 = document.querySelector('#id1')
var src = ['https://www.twitch.tv/razzergti',
    'https://yandex.by']
function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min) + min)
}

but1.addEventListener('click', function () {
    window.location.href = src[getRandom(0, 2)]
})
var but2 = document.querySelector('#id2')
but2.onclick = function changeBackgroundColor() {
    document.body.style.background = "#ffff00"
}