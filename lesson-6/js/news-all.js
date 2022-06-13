window.addEventListener('load', function (e) {
	let height = this.screen.height;
	this.scroll({top: height, behavior: 'smooth'});
});