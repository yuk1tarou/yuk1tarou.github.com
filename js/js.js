<<<<<<< HEAD
var cW = document.documentElement.clientWidth;
if(cW > 640) cW = 640;
document.documentElement.style.fontSize = cW*(100/320) + 'px';
window.onresize=function(){
	var cW = document.documentElement.clientWidth;
	if(cW > 640) cW = 640;
	document.documentElement.style.fontSize = cW*(100/320)+ 'px';
	
};
=======
window.onresize=function(){	
	document.documentElement.style.fontSize=document.documentElement.clientWidth*(100/320)+'px';
>>>>>>> f855cda958ad1de95844356fbd408026fcf77c9e
	var oUl=document.getElementById("ul1");
	var l=0;
	var rem=parseFloat(document.documentElement.style.fontSize);
	oUl.addEventListener('touchstart',function(ev){	
<<<<<<< HEAD
		var disX=ev.targetTouches[0].pageX/rem-l;
		document.addEventListener('touchmove',move,false);
		ev.preventDefault();
		function move(ev){
			console.log(l)
			l=ev.targetTouches[0].pageX/rem-disX;
		if(l>0){
			l=0;
		}else if(l<-2.7){
			l=-2.7;
		}
			oUl.style.webkitTransform='translate('+l+'rem,0)';
		}
=======
			var disX=ev.targetTouches[0].pageX/2/rem-l;
			document.addEventListener('touchmove',move,false)
			ev.preventDefault();
		function move(ev){
			l=ev.targetTouches[0].pageX/2/rem-disX;
			if(l>0){
				l=0;
			}else if(l<-2.2){
				l=-2.2
			}
			oUl.style.webkitTransform='translate('+l+'rem,0)';
		}
		document.addEventListener('touchend',end,false);
>>>>>>> f855cda958ad1de95844356fbd408026fcf77c9e
		function end(){
			document.removeEventListener('touchmove',move,false);
			document.removeEventListener('touchend',end,false);
		}
<<<<<<< HEAD
			document.addEventListener('touchend',end,false);
	},false);
=======
	},false);
};
>>>>>>> f855cda958ad1de95844356fbd408026fcf77c9e
