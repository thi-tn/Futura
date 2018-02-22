
//create alphabet array
function genCharArray(charA, charZ) {
    var a = [], i = charA.charCodeAt(0), j = charZ.charCodeAt(0);
    for (; i <= j; ++i) {
        a.push(String.fromCharCode(i));
    }
    return a;
}
var chars = genCharArray('a', 'z');
chars.push('1','2', '3', '4', '5', '6', '7', '8', '9', '0');

//geometric filter arrays
var circle = ['a', 'b', 'c', 'd', 'e', 'g', 'o', 'p', 'q', '3', '5', '8', '6', '9'];
var rect = ['f', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'r', 's', 't', 'u', 'z', '1', '0'];
var triangle = ['k', 'v', 'w', 'x', 'y', 'z', '4', '7'];

//section filters
var home = ['f', 'u', 't', 'u', 'r', 'a'];
var irradiation = ['a', 'b', 'd', 'g', 'h', 'm', 'n', 'p', 'q', 'r'];
var visualBal = ['a', 'n'];
var horVer = ['h', 'e']

var charMap = [[chars, 'chars'], [circle, 'circle'], [rect, 'rect'], [triangle, 'triangle'], [home, 'home']];
//var compare = [[irradiation, 'irradiation'], [visualBal, 'visualBal'], [horVer, 'horVer']];


for (i = 0; i < chars.length; i++) {
	$('#grid').append('<div class="col-3 char text-center" ' + 'id="' + i + '">' + chars[i] + "</div>" );
	var dataGr = "";
	for (x=0; x < charMap.length; x++) {
		if ($.inArray(chars[i], charMap[x][0]) != -1) {
			$('#' + i).addClass(charMap[x][1]);
			if (dataGr != "") {
				dataGr += (', "' + charMap[x][1] + '"');
			} else {
				dataGr = ('"' + charMap[x][1] + '"');
			}
		}	
	}
	$('#' + i).attr('data-groups', '[' + dataGr + ']');

}

$(document).ready(function(){
  // Add smooth scrolling to all links
  $('.modal').show();
  $('.modal button').click(function() {
    $('.modal').hide();
  });
  $("a").on('click', function(event) {
   
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
         console.log('smooth');
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });

  
  //animate comparisions	
	var compareId;
   $('.compare').click(function() {
		var compareSection = $(this).attr('target-section');
		compareId = $(this).attr('target-section');
		$('.compare-section').not($('#' + compareSection)).hide(1000);
		$('#' + compareSection).toggle(1000);
		console.log('#' + compareSection);
	});
	$('.filter-options li').not($('.compare')).click(function() {
		if($('.compare-section').is(":visible")) {
			$('.compare-section').hide(1000);
		}		
	});
	if (window.matchMedia('(max-width: 768px)').matches) {
    var origHeight = $('#nav-text').height();
    $('#nav-text').css('height', origHeight + $('.description:visible').height());
    $('.filter-options li').click(function() {
    var desIndex = $('.filter-options li').index(this) - 1;
    console.log(desIndex);
    $('#nav-text').css('height', origHeight + $('.description').eq(desIndex).height());
  });
  }

   $('.filter-options li').click(function() {
    var desIndex = $('.filter-options li').index(this) - 1;
    console.log(desIndex);
    $('.description').animate({opacity: '0'});
    $('.description').eq(desIndex).animate({opacity: '1'});
  });

  $('.filter-options li').not('#home').click(function() {
    $('#cover').hide('slow');
  })

  $('#scroll-btn').click(function() {
     $('#cover').hide('slow');
  });
  $('#home').click(function() {
    $('#cover').show('slow');
  })

});

