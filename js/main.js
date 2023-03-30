
(function ($) {
	"use strict";

	var burgerMenu = function () {
		$('.burger').click(function (e) {
			$(window).scrollTop(0);
			if (!$('.burger').hasClass('active'))
				$('.burger').addClass('active');
			else
				$('.burger').removeClass('active');
		});
	}
	burgerMenu();

	var siteIstotope = function () {
		var $container = $('#portfolio-grid').isotope({
			itemSelector: '.item',
			isFitWidth: true
		});

		$(window).resize(function () {
			$container.isotope({
				columnWidth: '.col-sm-3'
			});
		});

		$container.isotope({ filter: '*' });

		$('#filters').on('click', 'a', function (e) {
			e.preventDefault();
			var filterValue = $(this).attr('data-filter');
			$container.isotope({ filter: filterValue });
			$('#filters a').removeClass('active');
			$(this).addClass('active');
		});
	}
	$(window).on('load', function () {
		siteIstotope();
	});


	var siteOwlCarousel = function () {
		$('.testimonial-carousel').owlCarousel({
			center: true,
			items: 1,
			loop: false,
			margin: 0,
			
			smartSpeed: 1000,
		});
	};
	siteOwlCarousel();


})(jQuery);

AOS.init({
	easing: 'ease',
	duration: 1000,
	once: true
});


var app = document.getElementById('appi');

var typewriter = new Typewriter(app, {
	loop: true
});

typewriter.typeString('and business objectives.')
	.pauseFor(2500)
	.deleteAll()
	.typeString('and product functionality.')
	.pauseFor(2500)
	.deleteAll()
	.typeString('and marketing strategies')
	.pauseFor(2500)
	.deleteAll()
	.start();



// Burger menu

function toggleMobileMenu(menu) {
	menu.classList.toggle('open');
}




function checkClickFunc() {
	var checkbox = document.getElementById('active');
	if (checkbox.checked == true) {
		var styles = 'html { overflow: hidden; } .custom-content{ overflow: hidden; position: relative; z-index: -1; }'
		var styleSheet = document.createElement("style")
		styleSheet.innerText = styles
		document.head.appendChild(styleSheet)

	} else {
		var styles = 'html { overflow: scroll; } .custom-content{z-index: 0}'
		var styleSheet = document.createElement("style")
		styleSheet.innerText = styles
		document.head.appendChild(styleSheet)
	}
}



function myFunction() {
	var x = document.getElementById("myTopnav");
	if (x.className === "topnav") {
		x.className += " responsive";
	} else {
		x.className = "topnav";
	}
}

function clearForm() {
    
    console.log("test su dasdas da 3") 
    document.getElementById("name").value = null;
    document.getElementById("email").value = null;
    document.getElementById("subject").value = null;
    document.getElementById("message").value = null;
  }

  function submitForm1() { 
    // Here you can add any additional validation or form processing logic before submitting the form
    //document.getElementById("form").submit();
    //clearForm();
    //console.log("111111111") 
    //form = document.getElementById('form') 
    //form.action = "forms/contact.php";
    //form.submit();
    
    
    //document.getElementById('name').setAttribute("value", "");
    //document.getElementById('email').setAttribute("value", "");
    //document.getElementById('subject').setAttribute("value", "");
    //document.getElementById('message').setAttribute("value", "");
    //document.getElementById("name").value = "";
    //document.getElementById("email").value = "";
    //document.getElementById("subject").value = "";
    //document.getElementById("message").value = "";
    
    console.log("2222222222") 
    //return false;
  }
 
 function submitForm() {
  var form = document.getElementById("form");

  // Submit the form using AJAX
  var xhr = new XMLHttpRequest();
  xhr.open("POST", form.action, true);
  xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");
  xhr.onreadystatechange = function() {
    if (xhr.readyState == 4 && xhr.status == 200) {
      // Parse the JSON response
      var response = JSON.parse(xhr.responseText);

      if (response.status === "success") {
        // Show success message
        var sentMessage = document.querySelector(".sent-message");
        sentMessage.style.display = "block";
        // Clear input fields
        form.reset();
      } else {
        // Show error message
        var errorMessage = document.querySelector(".error-message");
        errorMessage.innerHTML = response.message;
        errorMessage.style.display = "block";
      }
    }
  };
  xhr.send(new FormData(form));
}
 
 