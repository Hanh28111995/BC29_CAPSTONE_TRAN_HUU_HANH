$(document).ready(function() {
    $(window).scroll(function(event) {
       var pos_body = $('html,body').scrollTop();
    //    console.log(pos_body);
       if(pos_body>=100){
        document.getElementById('site-header').classList.add('header_fixed');
       }
       else {
        document.getElementById('site-header').classList.remove('header_fixed')
       }
    });
 
 });


var checkbox_toggle = document.getElementById('checkbox');
var x = document.getElementsByClassName('hanh');
var y = document.getElementsByClassName('content-main');
var z = document.getElementsByClassName('hanh2');
{
    checkbox_toggle.addEventListener('change', function () {
        document.body.classList.toggle('dark');
        if (checkbox_toggle.checked == true) {
            document.getElementById('courses').classList.add('dark1');
            document.getElementById('bg_sm').classList.add('dark2');
            document.getElementById('bg_sm1').classList.add('dark4');
            document.getElementById('bg_sm2').classList.add('dark4');
            document.getElementById('bg_sm3').classList.add('dark4');
            document.getElementById('bg_sm4').classList.add('dark4');
            document.getElementById('bg_sm_sb').classList.add('dark2');
            document.getElementById('decor_dropdown').classList.add('dark2');
            document.getElementById('bg_icon1').classList.add('dark3');
            document.getElementById('bg_icon2').classList.add('dark3');
            document.getElementById('bg_icon3').classList.add('dark3');
            document.getElementById('site-header').classList.add('header_dark');
            document.getElementById('logo_name').classList.add('text_light');
        } else {
            document.getElementById('courses').classList.remove('dark1');
            document.getElementById('bg_sm').classList.remove('dark2');
            document.getElementById('bg_sm1').classList.remove('dark4');
            document.getElementById('bg_sm2').classList.remove('dark4');
            document.getElementById('bg_sm3').classList.remove('dark4');
            document.getElementById('bg_sm4').classList.remove('dark4');
            document.getElementById('bg_sm_sb').classList.remove('dark2');
            document.getElementById('decor_dropdown').classList.remove('dark2');
            document.getElementById('bg_icon1').classList.remove('dark3');
            document.getElementById('bg_icon2').classList.remove('dark3');
            document.getElementById('bg_icon3').classList.remove('dark3');
            document.getElementById('site-header').classList.remove('header_dark');
            document.getElementById('logo_name').classList.remove('text_light');
        }
        if (checkbox_toggle.checked == true) {   
            for (var i = 0; i < x.length; i++) {
                x[i].classList.remove('text_dark');
                x[i].classList.add('text_light');
            }
            for (var i = 0; i < y.length; i++) {
                y[i].classList.add('hanh1');
            }
            for (var i = 0; i < z.length; i++) {
                z[i].classList.add('text_p');
            }
           
        }
        else {
            for (var i = 0; i < x.length; i++) {
                x[i].classList.remove('text_light');
                x[i].classList.add('text_dark');
            }
            for (var i = 0; i < y.length; i++) {
                y[i].classList.remove('hanh1');
            }
            for (var i = 0; i < z.length; i++) {
                z[i].classList.remove('text_p');
            }
        }
    })
}

