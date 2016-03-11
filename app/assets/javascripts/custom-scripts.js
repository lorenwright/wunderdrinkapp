// Create tabs for product information in purchase section
$(function() {
	$('#purchase-info').tabs();
});

// Scroll to anchor links
$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top - 150
        }, 1000);
        return false;
      }
    }
  });
});

// Create Sticky Nav after scroll
$(function(){
    $(window).scroll(function() {
        if ($(this).scrollTop() >= 250) {
			$('.nav').slideDown('slow');
			$('.nav').addClass('stickytop');
        }
        else {
            $('.nav').removeClass('stickytop');
        }
    });
});

// Video Modal
$(function() {
	$('#video').dialog({
		autoOpen: false,
		show: {
			effect: "fade",
			duration: 600
		},
		hide: {
			effect: "fade",
			duration: 600
		},
		height: 470,
		width: 750,
		modal: true,
		resizable: false,
		draggable: false,
		open: function(){
            $('.ui-widget-overlay').bind('click',function(){
                $('#video').dialog('close');
            });
        }
	});
 
    $( '#open-video' ).click(function() {
		$('#video').dialog('open');
    });
});

// Order Form
$(function() {
	$('#order').dialog({
		autoOpen: false,
		show: {
			effect: "fade",
			duration: 600
		},
		hide: {
			effect: "fade",
			duration: 600
		},
		height: 600,
		width: 900,
		modal: true,
		resizable: false,
		draggable: false,
		open: function(){
            $('.ui-widget-overlay').bind('click',function(){
                $('#order').dialog('close');
            });
        }
	});
 
    $( '#open-order' ).click(function() {
		$('#order').dialog('open');
    });
});

// Make form an accordion
$(function(){
	$('#form-accordion').accordion({
		collapsible: true,
		heightStyle: 'content'
	});
	
	$('#form-accordion button').click(function(e) {
        e.preventDefault();
        var delta = ($(this).is('.next') ? 1 : -1);
        $('#form-accordion').accordion('option', 'active', (
             $('#form-accordion').accordion('option','active') + delta  ));
    });
});

//Test
function calculateTotal (select) {
            var selectedOption = select.options[select.selectedIndex];
			document.getElementById('item-quantity').innerHTML = selectedOption.value;
            document.getElementById('totalPrice').innerHTML = "$" + selectedOption.value * 200;
        }