// contact

	$(document).ready(function(){
		$("#ContactForm").submit(function(){
		$("#submitf").value='Please wait...';
		
		$.post("send.php?send=comments", $("#ContactForm").serialize(),
		function(data){
			if(data.frm_check == 'error'){ 
			
					$("#message_post").html("<div class='errorMessage'>ERROR: " + data.msg + "</div>"); 
					document.ContactForm.submitf.value='Resend >>';
					document.ContactForm.submitf.disabled=false;
			} else {
				$("#message_post").html("<div class='successMessage'>Your message has been sent successfully!</div>"); 
				$("#submitf").value='Send >>';
				}
		}, "json");
		
		return false;
		
		});
	});

// flexslider

	$(window).load(function() {
			$('#first-slider').flexslider({
				animation: 'fade',
				controlsContainer: '#first-slider',
				directionNav: false,
			});
			 
			$('#second-slider').flexslider({
				animation: 'fade',
				controlsContainer: '#second-slider',
				controlNav: false,
				slideshow: false
			});
		});

// navigation
	
	$(document).ready(function(){
		selectnav('nav', {
				label: 'MENU',
			});
	});

// nice scroll

	$(document).ready(function() {
			$("html").niceScroll();
	});

// sticky

	$(document).ready(function() {
		$('header').waypoint('sticky');
	});

// active page

	$(document).ready(function() {
		$('#nav').onePageNav({
			easing: 'easeInOutCirc',
			scrollSpeed: 1800
		});
	});

// quote rotator

	$(document).ready(function() {
		$('ul#quotes').quote_rotator({
			rotation_speed: 6000
		});
	});

// colorbox

	$(document).ready(function(){
		$('.group1').colorbox({maxWidth:'95%', maxHeight:'95%', rel:'group1'});
		$(".vimeo").live('click', function(e){
			$(this).colorbox({href: $(this).attr('href'), iframe:true, innerWidth:640, innerHeight:480, open:true});
			e.preventDefault();
			return false;
		});
		$(".iframe").live('click', function(e){
			$(this).colorbox({href: $(this).attr('href'), iframe:true, width:"80%", height:"80%", open:true});
			e.preventDefault();
			return false;
		});
	});

	var resizeTimer;
		$(window).resize(function(){
			if (resizeTimer) clearTimeout(resizeTimer);
			resizeTimer = setTimeout(function() {
			if ($('#cboxOverlay').is(':visible')) {
				$.colorbox.load(true);
				}
			}, 300)
		});

// quick sand

$(document).ready(function() {

	// get the action filter option item on page load
	var $filterType = $('#filter li.active a').attr('class');
	
	// get and assign the ourHolder element to the
	// $holder varible for use later
	var $holder = $('ul.ourHolder');

	// clone all items within the pre-assigned $holder element
	var $data = $holder.clone();

	// attempt to call Quicksand when a filter option
	// item is clicked
	$('#filter li a').click(function(e) {
		// reset the active class on all the buttons
		$('#filter li').removeClass('active');
		
		// assign the class of the clicked filter option
		// element to our $filterType variable
		var $filterType = $(this).attr('class');
		$(this).parent().addClass('active');
		
		if ($filterType == 'all') {
			// assign all li items to the $filteredData var when
			// the 'All' filter option is clicked
			var $filteredData = $data.find('li');
		} 
		else {
			// find all li elements that have our required $filterType
			// values for the data-type element
			var $filteredData = $data.find('li[data-type=' + $filterType + ']');
		}
		
		// call quicksand and assign transition parameters
		$holder.quicksand($filteredData, {
			duration: 800,
			easing: 'easeInOutQuad'
		});
		return false;
	});
});