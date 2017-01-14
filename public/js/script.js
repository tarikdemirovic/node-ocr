window.onload=function(){
    var copyTextareaBtn = document.querySelector('.btn-copy');

	copyTextareaBtn.addEventListener('click', function(event) {
	  var copyTextarea = document.querySelector('#results');
	  copyTextarea.select();

	  try {
	    var successful = document.execCommand('copy');
	    var msg = successful ? 'successful' : 'unsuccessful';
	    console.log('Copying text command was ' + msg);
	  } catch (err) {
	    console.log('Oops, unable to copy');
	  }
	});
}
