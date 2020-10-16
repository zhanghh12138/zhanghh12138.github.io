function a () {
	var str = ['name.txt','zip.js']
	htmlobj=$.ajax({url:"zip/name.txt",async:false});
	q = htmlobj.responseText.split("\n");
	q.pop()
	for(var i = 0;i < str.length ;i++) {
		for(var m = 0;m < q.length;m++) {
			if(q[m].trim() == str[i].trim()) {
				q.splice(m,1)
				m--
			}
		}
	}
}