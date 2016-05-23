var cW = document.documentElement.clientWidth;
if(cW > 640) cW = 640;
document.documentElement.style.fontSize = cW*(100/320) + 'px';
window.onresize=function(){
	var cW = document.documentElement.clientWidth;
	if(cW > 640) cW = 640;
	document.documentElement.style.fontSize = cW*(100/320)+ 'px';
};
var oUl=document.getElementById("ul1");
function move(ev){
	var l=(ev.targetTouches[0].pageX-disX)/2/100;
		console.log(l)
	if(l>0){
		l=0;
	}
	oUl.style.left=l+'rem';
	document.addEventListener('touchend',end,false)
}
function end(){
	document.removeEventListener('touchmove',move,false);
	document.removeEventListener('touchend',end,false)
}
oUl.addEventListener('touchstart',function(ev){	
		disX=ev.targetTouches[0].pageX-oUl.offsetLeft;
		document.addEventListener('touchmove',move,false)
		ev.preventDefault();
},false);