console.log('Hello');

const body = document.querySelector('body');


body.addEventListener('mouseover', function(e){
	console.log(window.innerWidth);
	console.log(window.innerHeight);
	console.log(e.PageY);
	console.log(e.pageX);

});
