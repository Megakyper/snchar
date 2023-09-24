function count(div, num, cnt, k) {
    setTimeout(() => {
        if (cnt <= num) {
            div.innerHTML = `${cnt}`;
            count(div, num, cnt + 1)
        }
        div.classList.add('true')
    }, 1500 / num);
}
var i = 0;
window.addEventListener('scroll', () => {
    let c = document.getElementById('circles');
    let Y = window.innerHeight;
    let k = c.getBoundingClientRect().top
    if (k <= (7 * Y / 10)) {
        if (!document.getElementById('cnt1').classList.contains('true')) {
            count(document.getElementById('cnt1'), 6, 0)
            count(document.getElementById('cnt2'), 32, 0)
            count(document.getElementById('cnt3'), 11, 0)
            document.getElementById('cnt1').classList.add('load')
            document.getElementById('cnt2').classList.add('load')
            document.getElementById('cnt3').classList.add('load')
        }
    }
    let syl = document.getElementById('syl')
    let b = syl.getBoundingClientRect().bottom
    let u = syl.getBoundingClientRect().top;
    if (u < 2 * Y / 5 && b > (3 * Y / 5)) {
        let pl = document.getElementById("p");
        pl.style.transform = `translateY(${-u + 2 * Y / 5 - 20}px)`
        let r = document.getElementById('hr')
        r.style.width = `${b - u - 170}px`;
    }
})
document.addEventListener('DOMContentLoaded', function () {
    let btn = document.getElementById("btn");
    btn.onclick = function () {
        document.getElementById('btn-text-one').style.top = '-100%'
        document.getElementById('btn-text-two').style.top = '50%'
    };
});