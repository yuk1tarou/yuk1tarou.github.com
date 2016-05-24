window.onresize=function(){
	document.documentElement.style.fontSize = document.documentElement.clientWidth*(100/320)+'px';
	var oUl=document.getElementById("ul1");
	var l=0;
	var rem=parseFloat(document.documentElement.style.fontSize);
	oUl.addEventListener('touchstart',function(ev){	
		var disX=ev.targetTouches[0].pageX/rem-l;
		document.addEventListener('touchmove',move,false);
		ev.preventDefault();
		if(l>0){
			l=0;
		}else if(l<-2.2){
			l=-2.2;
		}
		function move(ev){
			l=ev.targetTouches[0].pageX/rem-disX;
			oUl.style.webkitTransform='translate('+l+'rem,0)';
		}
		function end(){
			document.removeEventListener('touchmove',move,false);
			document.removeEventListener('touchend',end,false);
		}
			document.addEventListener('touchend',end,false);
	},false);
	
};