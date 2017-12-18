window.onload = function () {
    // navbar
    /*
    TweenLite.from(
        document.getElementById("myNavbar"), //element
        1, //duration
        {
            // tween parameters
            y: -500,
            delay: 0.6,
            ease: Power4.easeOut,
        });
    */

    var val_y = 500;
    var val_delay = 0.2;
    var val_delay_add = 0.2;
    var val_ease = Power4.easeOut;
    var val_opacity = 0;

    TweenLite.from(
        document.getElementById("body"),
        1,
        {
            backgroundColor: "#ffffff",
        });

    // cardmovie
    TweenLite.from(
        document.getElementById("section1"), //element
        1, //duration
        {
            // tween parameters
            y: val_y,
            delay: val_delay,
            ease: val_ease,
            opacity: val_opacity
        });

    val_delay += val_delay_add;

    TweenLite.from(
        document.getElementById("section2"), //element
        1, //duration
        {
            // tween parameters
            y: val_y,
            delay: val_delay,
            ease: val_ease,
            opacity: val_opacity
        });

    val_delay += val_delay_add;

    TweenLite.from(
        document.getElementById("section3"), //element
        1, //duration
        {
            // tween parameters
            y: val_y,
            delay: val_delay,
            ease: val_ease,
            opacity: val_opacity
        });

    val_delay += val_delay_add;

    TweenLite.from(
        document.getElementById("footer"), //element
        1, //duration
        {
            // tween parameters
            y: val_y,
            delay: val_delay,
            ease: val_ease,
            opacity: val_opacity
        });
}

/* sectionList1.scrollLeft = 450; */

function goLeft(sSection)
{
    section = document.getElementById(sSection);

    TweenLite.to(
        section,
        1,
        {
            scrollLeft: section.scrollLeft-450,
            ease: Power4.easeOut
        }
    );
}

function goRight(sSection)
{
    section = document.getElementById(sSection);

    TweenLite.to(
        section,
        1,
        {
            scrollLeft: section.scrollLeft+450,
            ease: Power4.easeOut
        }
    );
}