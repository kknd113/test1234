$(document).ready(function() {

	$("#Login").click(function(e) {

		var data = {
			username: $("#username").val(),
			password: $("#password").val(),
		};

		$.ajax({
			type: "POST",
			url: "/users/login",
			data: JSON.stringify(data),
			contentType: "application/json",
			dataType: "json",
		}).done(function(data) {
			console.log(data);
			if (data.errCode >= 0) {
				window.location.href = data.redirect;
			} 
		}).fail(function(data) {
			alert("fail to login");
		});
	});


});