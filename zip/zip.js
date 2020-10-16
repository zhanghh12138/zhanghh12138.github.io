function a () {
	htmlobj=$.ajax({url:"zip/name.txt",async:false});
	q = htmlobj.responseText.split("\n");
}