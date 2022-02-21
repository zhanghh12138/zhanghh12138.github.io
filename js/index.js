//获取文件夹中的文件名
function gameName() {
	gameObj = $.ajax({url:"./game/name.txt",async:false}).responseText.split("\n").filter(s => $.trim(s).length > 0)
}
gameName()
function domeName() {
	domeObj = $.ajax({url:"./dome/name.txt",async:false}).responseText.split("\n").filter(s => $.trim(s).length > 0)
}
domeName()
function zipName() {
	zipObj = $.ajax({url:"./zip/name.txt",async:false}).responseText.split("\n").filter(s => $.trim(s).length > 0)
}
zipName()

layui.use('element', function(){
  var element = layui.element; //导航的hover效果、二级菜单等功能，需要依赖element模块
  
  //监听导航点击
  element.on('nav(demo)', function(elem){
    //console.log(elem)
    layer.msg(elem.text());
  });
});
const w = new Vue({
	el:'.abody',
	data:{
		zipName:zipObj,
		domeName:domeObj,
		gameName:gameObj,
		tab:['全部','样例','游戏','压缩包']
	},
	methods:{
		nam(e) {
			console.log(e)
			if(e == "全部") {
				domeName()
				gameName()
				zipName()
				this.domeName = domeObj
				this.gameName = gameObj
				this.zipName = zipObj
			} else if(e == "样例") {
				domeName()
				this.domeName = domeObj
				this.gameName = []
				this.zipName = []
			} else if(e == "游戏") {
				gameName()
				this.domeName = []
				this.gameName = gameObj
				this.zipName = []
			} else if(e == "压缩包") {
				zipName()
				this.domeName = []
				this.gameName = []
				this.zipName = zipObj
			}
		}
	}
})
//未开放模块弹窗
function pop() {
	layui.use('layer', function(){
	  var layer = layui.layer;
	  layer.alert('此功能正在开发中')
	});
} 

// // ajax请求
// $("#ajaxBtn").click(function(){
// 	$.ajax({
// 		url:"http://localhost:8080/json/ajaxServlet",
// 		//调用servlet方法
// 		// data:"action=jQueryAjax",			
// 		data:{action:"jQueryAjax"},
// 		type:"GET",
// 		success:function (data) {
// 			// alert("服务器返回的数据是：" + data);
// 			// var jsonObj = JSON.parse(data);
// 			$("#msg").html(" ajax 编号：" + data.id + " , 姓名：" + data.name);
// 		},
// 		//返回数据的格式
// 		dataType : "json"
// 	});
// });