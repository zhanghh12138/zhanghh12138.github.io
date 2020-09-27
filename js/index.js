var q;
a()
const app = new Vue({
	el:'.phub',
	data:{
		sr:q,
	},
})

layui.use('element', function(){
  var element = layui.element; //导航的hover效果、二级菜单等功能，需要依赖element模块
  
  //监听导航点击
  element.on('nav(demo)', function(elem){
    //console.log(elem)
    layer.msg(elem.text());
  });
});

const w = new Vue({
	el:'.layui-nav',
	data:{
		tab:['全部','实用工具','开发软件','图片处理','单机游戏','影音资源','其它','关于我们']
	}
})

function e() {
	layui.use('layer', function(){
	  var layer = layui.layer;
	  layer.alert('此功能正在开发中')
	});
} 