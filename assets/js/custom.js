$(window).scroll(function () {
  var scroll = $(window).scrollTop();
  if (scroll >= 100) {
      $("body.page-home").removeClass("showHello");
      $("body.page-home .intro-content").addClass("come");
  } else {
      $("body.page-home").addClass("showHello");
      $("body.page-home .intro-content").removeClass("come");
  }
});
$(window).scroll(function () {
  var wheight = $(window).height() + 500;
  var scroll = $(window).scrollTop();
  if (scroll >= wheight) {
      $("body.page-home .banner-container").css("opacity", "0");
      $("body.page-home .stripes").addClass("in");
  } else {
      $("body.page-home .banner-container").css("opacity", "1");
      $("body.page-home .stripes").removeClass("in");
  }
});
$(window).scroll(function () {
  var scroll = $(window).scrollTop();
  if (scroll >= 100) {
      $(".navbar").addClass("at-top");
  } else {
      $(".navbar").removeClass("at-top");
  }
});
$(document).on("click", 'a.scrollSlow[href^="#"]', function (event) {
  event.preventDefault();
  $("html, body").animate({ scrollTop: $($.attr(this, "href")).offset().top }, 1000);
});
jQuery(".carousel").carousel({ interval: 6000, pause: "false" });
var lastId,
  topMenu = $(".inpage-menu"),
  topMenuHeight = topMenu.outerHeight(),
  menuItems = topMenu.find("a"),
  scrollItems = menuItems.map(function () {
      var item = $($(this).attr("href"));
      if (item.length) {
          return item;
      }
  });
menuItems.click(function (e) {
  var href = $(this).attr("href"),
      offsetTop = href === "#" ? 0 : $(href).offset().top - topMenuHeight + 1;
  $("html, body").stop().animate({ scrollTop: offsetTop }, "500");
  e.preventDefault();
});
$(window).scroll(function () {
  var fromTop = $(this).scrollTop() + topMenuHeight + 130;
  var cur = scrollItems.map(function () {
      if ($(this).offset().top < fromTop) return this;
  });
  cur = cur[cur.length - 1];
  var id = cur && cur.length ? cur[0].id : "";
  if (lastId !== id) {
      lastId = id;
      menuItems
          .parent()
          .removeClass("active")
          .end()
          .filter("[href='#" + id + "']")
          .parent()
          .addClass("active");
  }
});

$(".sm-scroll").click(function (e) {
  e.preventDefault();

  var target = $($(this).attr("href"));

  if (target.length) {
      var scrollTo = target.offset().top - 160;

      $("body, html").animate({ scrollTop: scrollTo + "px" }, 800);
  }
});

(function ($) {
  $(".accordion-wrapper > li:eq(0) a.ac-title").addClass("active").next().slideDown();

  $(".accordion-wrapper a.ac-title").click(function (j) {
      var dropDown = $(this).closest("li").find(".ac-content");

      $(this).closest(".accordion-wrapper").find(".ac-content").not(dropDown).slideUp();

      if ($(this).hasClass("active")) {
          $(this).removeClass("active");
      } else {
          $(this).closest(".accordion-wrapper").find("a.active").removeClass("active");

          $(this).addClass("active");
      }

      dropDown.stop(false, true).slideToggle();

      j.preventDefault();
  });
})(jQuery);

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
  const tabs = document.querySelectorAll(".nav-link");

  tabs.forEach((tab) => {
      tab.classList.remove("active");
  });

  tabs[tabIndex].classList.add("active");
}

// Show the first tab by default
showTab(0);

$(".first .tabcontent:first").show();
$(".second .tabcontent:first").show();
$(".third .tabcontent:first").show();

// function ShowTabMenu(){
//  var c =  $(this).attr('data-id');
//  document.getElementById(c).style.display = "block";
//   $('.'+c+' .tabcontent:first').show();

// }

// const hoverableElements = document.querySelectorAll('.mehulzala');

// hoverableElements.forEach(function (element) {
//   element.addEventListener('mouseover', ShowTabMenu);
// });

$(document).ready(function () {
  $(".Solutions").hover(function () {
      $("#London").css("display", "block");
      $(".two").css("display", "none");
  });
  $(".Services").hover(function () {
      $("#MOBILE").css("display", "block");
      $(".one").css("display", "none");
  });
  $(".Company").hover(function () {
      $("#About").css("display", "block");
      $(".three").css("display", "none");
  });
});

//document.getElementsByClassName('servicesDropdown').addEventListener('mouseover', openCity);
