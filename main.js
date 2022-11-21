var checkbox_toggle = document.getElementById('checkbox');
var x = document.getElementsByClassName('text-basic-color');
var y = document.getElementsByClassName('content-main');
var z = document.getElementsByClassName('text-basic-color2');
var e = document.getElementsByClassName('text-basic-color3');
var d = document.getElementsByClassName('text-basic-color1');
var f = document.getElementsByClassName('text-basic-color4');
document.addEventListener("DOMContentLoaded", function (event) {
    window.addEventListener('scroll', function () {
        var pos_body = window.pageYOffset;
        // console.log(pos_body);
        if (pos_body >= 100) {
            document.getElementById('site-header').classList.add('header_fixed');
        }
        else {
            document.getElementById('site-header').classList.remove('header_fixed')
        }
    })
    checkbox_toggle.addEventListener('change', function () {
        document.body.classList.toggle('dark');
        if (checkbox_toggle.checked == true) {
            document.getElementById('courses').classList.add('dark1');
            document.getElementById('bg_sm').classList.add('dark1');
            document.getElementById('bg_sm_sb').classList.add('dark1');
            document.getElementById('decor_dropdown').classList.add('dark1');
            document.getElementById('site-header').classList.add('header_dark');
            document.getElementById('logo_name').classList.add('text_light');
        } else {
            document.getElementById('courses').classList.remove('dark1');
            document.getElementById('bg_sm').classList.remove('dark1');
            document.getElementById('bg_sm_sb').classList.remove('dark1');
            document.getElementById('decor_dropdown').classList.remove('dark1');
            document.getElementById('site-header').classList.remove('header_dark');
            document.getElementById('logo_name').classList.remove('text_light');
        }
        if (checkbox_toggle.checked == true) {
            for (var i = 0; i < x.length; i++) {
                x[i].classList.remove('text_dark');
                x[i].classList.add('text_light');
            }
            for (var i = 0; i < y.length; i++) {
                y[i].classList.add('dark_border');
            }
            for (var i = 0; i < z.length; i++) {
                z[i].classList.add('text_p');
            }
            for (var i = 0; i < e.length; i++) {
                e[i].classList.add('shadow_dark');
            }
            for (var i = 0; i < d.length; i++) {
                d[i].classList.add('dark');
            }
            for (var i = 0; i < f.length; i++) {
                f[i].classList.add('dark3');
            }

        }
        else {
            for (var i = 0; i < x.length; i++) {
                x[i].classList.remove('text_light');
                x[i].classList.add('text_dark');
            }
            for (var i = 0; i < y.length; i++) {
                y[i].classList.remove('dark_border');
            }
            for (var i = 0; i < z.length; i++) {
                z[i].classList.remove('text_p');
            }
            for (var i = 0; i < e.length; i++) {
                e[i].classList.remove('shadow_dark');
            }
            for (var i = 0; i < d.length; i++) {
                d[i].classList.remove('dark');
            }
            for (var i = 0; i < f.length; i++) {
                f[i].classList.remove('dark3');
            }
        }
    })
})

