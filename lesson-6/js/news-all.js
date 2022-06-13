window.addEventListener('load', function (e) {
	let height = this.innerHeight;
	this.scroll({top: height, behavior: 'smooth'});
});