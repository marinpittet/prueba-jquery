$(document).ready(function(){
	$("#form").on('submit', function(event) {
		event.preventDefault();

		var post_it = $('#post').val();
		var blog = $("aside.col-md-7");
		
		blog.append(
			'<div class="col-md-11">'
				+'<div class="post_in w3-animate-right">'
					+'<div class="noti-head">'
						+'<a class="user-pic">'
							+'<img class="pic" src="images/desafio-latam.jpg">'
						+'</a>'
						+'<ul class="buttons">'
							+'<li class="but">'
								+'<span class="erase glyphicon glyphicon-trash">'
							    +'</span>'
							+'</li>'
							+'<li class="but">'
								+'<span class="like glyphicon glyphicon-thumbs-up">'
									+'<span>'
										+'<span class="t">'
										+ 0
										+'</span>'
									+'</span>'
							    +'</span>'
							+'</li>'
						+'</ul>'
					+'</div>'
					+'<div class="separador">'
					+'</div>'		
					+'<p class="notes">'
						+ post_it
					+'</p>'
				+'</div>'
			+'</div>'
		);

		$("#post").val('');
	});

	$("aside.col-md-7").on('click','.erase', function(){
			$(this).css("background-color", "rgba(255, 0, 0,.7)");
			$(this).parents("div.post_in").fadeOut(500);
	})

	$("aside.col-md-7").on('click',".like", function(e){
		//console.log(e.target)
		$(this).css("background-color", "#ff029d");
		$(this).children().addClass("notification");

	    $(this).find('.t').addClass("noti-text");

		var counter = parseInt( $(this).find('.noti-text').text() );
		
		counter++;
		$(this).find('.noti-text').text(counter);
	})
		
});

