$('.carousel.home-slider').carousel({
    cycle: true,
    interval: 5000
});



jQuery("#carousel").owlCarousel({
    autoplay: true,
    rewind: true,
    /* use rewind if you don't want loop */
    margin: 20,
    /*
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    */
    responsiveClass: true,
    autoHeight: true,
    autoplayTimeout: 7000,
    smartSpeed: 800,
    nav: true,
    responsive: {
        0: {
            items: 2
        },

        600: {
            items: 3
        },

        1024: {
            items: 4
        },

        1366: {
            items: 5
        }
    }
});


function openCity(evt, cityName) {
    console.log(evt);
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the link that opened the tab
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}


function showTab(tabIndex) {
    const tabs = document.querySelectorAll('.nav-link');

    tabs.forEach(tab => {
        tab.classList.remove('active');
    });

    tabs[tabIndex].classList.add('active');
}

// Show the first tab by default
showTab(0);

$('.first .tabcontent:first').show();
$('.second .tabcontent:first').show();
$('.third .tabcontent:first').show();



$(document).ready(function() {
    $(".Solutions").hover(function() {
        $("#London").css("display", "block");
        $(".two").css("display", "none");
    });
    $(".Services").hover(function() {
        $("#MOBILE").css("display", "block");
        $(".one").css("display", "none");
    });
    $(".Company").hover(function() {
        $("#About").css("display", "block");
        $(".three").css("display", "none");
    })
})
