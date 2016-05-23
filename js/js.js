var cW = document.documentElement.clientWidth;
if(cW > 640) cW = 640;
document.documentElement.style.fontSize = cW*(100/320) + 'px';
window.onresize=function(){
	var cW = document.documentElement.clientWidth;
	if(cW > 640) cW = 640;
	document.documentElement.style.fontSize = cW*(100/320)+ 'px';
};
var oUl=document.getElementById("ul1");
var l=0;
oUl.addEventListener('touchstart',function(ev){	
		disX=ev.targetTouches[0].pageX-oUl.offsetLeft/2/100;
		document.addEventListener('touchmove',move,false)
		ev.preventDefault();
	function move(ev){
		l=(ev.targetTouches[0].pageX-disX)/2/100;
			console.log(l)
		if(l>0){
			l=0;
		}else if(l<-2.2){
			l=-2.2
		}
		oUl.style.left=l+'rem';
		document.addEventListener('touchend',end,false)
	}
	function end(){
		document.removeEventListener('touchmove',move,false);
		document.removeEventListener('touchend',end,false)
	}
},false);