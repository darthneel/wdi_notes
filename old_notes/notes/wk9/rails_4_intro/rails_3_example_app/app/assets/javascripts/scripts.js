function renderUsers(users){
		var $users_el = $('.users')
		_.each(users,function(u){
			var user = { 
				name: u.name,
				bio: u.bio,
				id: u.id
			}
			var source = $('#user_template').html()
			var template = Handlebars.compile(source);
			var html = template(user)
			$users_el.append(html)
		})
}

function getUsers(){

		$.getJSON('/users',function(data){
			users = data;
			renderUsers(users)
		});
}

function renderPage(){
	$('#body').empty()
	renderNav();
	renderUsersList();
	getUsers();

}

function renderUsersList(){
	var list_source = $('#users_list_template').html()
	var html = Handlebars.compile(list_source)
	$('#body').append(html)
}

function renderNav(){

	var nav_source = $('#nav_template').html()
	var html = Handlebars.compile(nav_source)
	$('#body').prepend(html)
	var $user_link = $('.users_link').eq(0);
	$user_link.on("click",renderPage);

}


$(function(){

	renderPage()

})