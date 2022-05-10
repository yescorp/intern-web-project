var letter_add_timer = 0;
var letter_remove_timer = 0;
var letter_add_interval;
var letter_remove_interval;
var delay;
var timer_animation_interval;
var deg = 0;

$(document).ready(function (){

    text_animation($("#text-animation span"), "легко", 600);
    timer_animation_interval = setInterval(application_remaining_time, 1000, new Date(2021, 5, 11, 10, 35, 50, 0));
    
    $(window).blur(function(e) {
        clearInterval(letter_add_interval);
        clearInterval(letter_remove_interval);
        clearTimeout(delay);
        $("#text-animation span").text("|");
        letter_add_timer = 0;
        letter_remove_timer = 0;
    
    });
    
    $(window).focus(function(e) {
        text_animation($("#text-animation span"), "легко", 600);    
    });

    $("#hamburger").click(function(){
        $("header").hide();
        $("#hamburger-container").css("visibility", "visible");
        $("#block").css("visibility", "visible");
        
        /*
        $("#hamburger-container div").animate({
            right: '0px'    
        }, {
            step: function(now, fx){
                console.log(now);
                $(this).css("transform", "scew("+deg+ "deg, 0deg)");
                deg--;
            }, duration: 300
        },300, 'linear', function(){
            $(this).css("transorm", "scew(0, 0)");
        });
        */

        $("#hamburger-container div").css("animation", "hamburger-animation");
        $("#hamburger-container div").css("animation-duration", "0.4s");
        $("#hamburger-container div").css("right", "0");
    });

    $("#close-hamburger").click(function(){
        $("#hamburger-container").css("visibility", "hidden");
        $("#hamburger-container").css("visibility", "visible");
        
        $("#hamburger-container div").css("animation", "hamburger-animation-reverse")
        $("#hamburger-container div").css("animation-duration", "0.3s");
        $("#hamburger-container div").css("right", "-600px");

        /*
        let right = 0;
        let skew = 0;
        var hamburger_interval = setInterval(function(){
            
        }, 300/20);
        */
        
        setTimeout(function(){
            $("header").show();
            $("#hamburger-container").css("visibility", "hidden");
        }, 200);
    });
    
    var x, i, j, l, ll, selElmnt, a, b, c;
    /* Look for any elements with the class "custom-select": */
    x = document.getElementsByClassName("custom-select");
    l = x.length;
    for (i = 0; i < l; i++) {
    selElmnt = x[i].getElementsByTagName("select")[0];
    ll = selElmnt.length;
    /* For each element, create a new DIV that will act as the selected item: */
    a = document.createElement("DIV");
    a.setAttribute("class", "select-selected");
    a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
    x[i].appendChild(a);
    /* For each element, create a new DIV that will contain the option list: */
    b = document.createElement("DIV");
    b.setAttribute("class", "select-items select-hide");
    for (j = 1; j < ll; j++) {
        /* For each option in the original select element,
        create a new DIV that will act as an option item: */
        c = document.createElement("DIV");
        c.innerHTML = selElmnt.options[j].innerHTML;
        c.addEventListener("click", function(e) {
            /* When an item is clicked, update the original select box,
            and the selected item: */
            var y, i, k, s, h, sl, yl;
            s = this.parentNode.parentNode.getElementsByTagName("select")[0];
            sl = s.length;
            h = this.parentNode.previousSibling;
            for (i = 0; i < sl; i++) {
            if (s.options[i].innerHTML == this.innerHTML) {
                s.selectedIndex = i;
                h.innerHTML = this.innerHTML;
                y = this.parentNode.getElementsByClassName("same-as-selected");
                yl = y.length;
                for (k = 0; k < yl; k++) {
                y[k].removeAttribute("class");
                }
                this.setAttribute("class", "same-as-selected");
                break;
            }
            }
            h.click();
        });
        b.appendChild(c);
    }
    x[i].appendChild(b);
    a.addEventListener("click", function(e) {
        /* When the select box is clicked, close any other select boxes,
        and open/close the current select box: */
        e.stopPropagation();
        closeAllSelect(this);
        this.nextSibling.classList.toggle("select-hide");
        this.classList.toggle("select-arrow-active");
    });
    }

    function closeAllSelect(elmnt) {
    /* A function that will close all select boxes in the document,
    except the current select box: */
    var x, y, i, xl, yl, arrNo = [];
    x = document.getElementsByClassName("select-items");
    y = document.getElementsByClassName("select-selected");
    xl = x.length;
    yl = y.length;
    for (i = 0; i < yl; i++) {
        if (elmnt == y[i]) {
        arrNo.push(i)
        } else {
        y[i].classList.remove("select-arrow-active");
        }
    }
    for (i = 0; i < xl; i++) {
        if (arrNo.indexOf(i)) {
        x[i].classList.add("select-hide");
        }
    }
    }

    /* If the user clicks anywhere outside the select box,
    then close all select boxes: */
    document.addEventListener("click", closeAllSelect);


    $("#leave-application").click(function(){
        $("#application").css("visibility", "visible");

        $("#application").css("animation", "application-animation");
        $("#application").css("animation-duration", "0.5s");
        $("#application").css("right", "0");
    });

    $("#first > button").click(function(){
        console.log("FREE CONSULTATION");
        $("#application").css("visibility", "visible");

        $("#application").css("animation", "application-animation");
        $("#application").css("animation-duration", "0.5s");
        $("#application").css("right", "0");
    });

    $("#application-close").click(function(){
        $("#application").css("visibility", "hidden");
        $("#application").css("visibility", "visible");
        $("#application").css("animation", "application-animation-reverse");
        $("#application").css("animation-duration", "0.5s");
        $("#application").css("right", "-100%");

        setTimeout(function(){
            $("#application").css("visibility", "hidden");
        }, 500);
    });

    $(document).on('click', '.join-course', function(){
        
        console.log("FREE CONSULTATION");
        $("#application").css("visibility", "visible");

        $("#application").css("animation", "application-animation");
        $("#application").css("animation-duration", "0.5s");
        $("#application").css("right", "0");
    });
    
    $("#leave-application-timer").click(function(){
        
        console.log("FREE CONSULTATION");
        $("#application").css("visibility", "visible");

        $("#application").css("animation", "application-animation");
        $("#application").css("animation-duration", "0.5s");
        $("#application").css("right", "0");
    });
});

function application_remaining_time(time){
    let hours = time.getHours();
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();

    time.setSeconds(seconds - 1);

    $("#hours").text(hours + "");
    $("#minutes").text(minutes + "");
    $("#seconds").text(seconds + "");
}

function text_animation(textfield, text, duration){
    letter_add_interval = setInterval(add_letter, duration/text.length, textfield, text, text.length);
}

function add_letter(textfield, text, letters_count) {
    let temp = textfield.text();
    console.log(temp);
    temp = temp.slice(0, temp.length - 1);
    temp += text[letter_add_timer];
    textfield.text(temp + "|");
    letter_add_timer++;

    if (letter_add_timer >= letters_count){
        clearInterval(letter_add_interval);
        letter_add_timer = 0;
        delay = setTimeout(function () {
            letter_remove_interval = setInterval(remove_letter, 40, textfield, text, text.length);
        }, 1300);
    }
}

function remove_letter(textfield, text, letters_count){
    let temp = textfield.text();
    temp = temp.slice(0, temp.length - 2);
    temp += "|";
    letter_remove_timer++;

    textfield.text(temp);

    if (letter_remove_timer >= letters_count){
        letter_remove_timer = 0;
        clearInterval(letter_remove_interval);
        
        if (text=="легко"){
            text_animation(textfield, "быстро", 600);
        } else if(text=="быстро") {
            text_animation(textfield, "эффективно", 800);
        } else if(text=="эффективно") {
            text_animation(textfield, "используя новейшие технологии", 2000);
        }else if(text=="используя новейшие технологии") {
            text_animation(textfield, "легко", 600);
        }
    }
}