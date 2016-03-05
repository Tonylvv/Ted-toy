// 基本动画库--珠峰培训 2014年5月3号
function move(ele,attr,target,fnCallback){
	clearInterval(ele[attr+"timer"]);
	function _move(){//闭包方法
		var cur=css(ele,attr);//当前位置
		var nSpeed=(target-cur)/10;
		nSpeed=nSpeed>0?Math.ceil(nSpeed):Math.floor(nSpeed);
		css(ele,attr,cur+nSpeed);
		if(nSpeed===0){
			clearInterval(ele[attr+"timer"]);	
			ele[attr+"timer"]=null;
			if(typeof fnCallback=="function"){
				fnCallback.call(ele);
				//用call去执行fnCallback，则可以让fnCallback在运行的时候，里面的this关键字指向当前运动的这个元素	
			}
			//ele.style.backgroundColor="green";
		}
	}
	ele[attr+"timer"]=window.setInterval(_move,20);	
}

function css(ele,attr,val){//如果传两个参数，则是取值。三个参数，则赋值
	if(typeof val=="undefined"){
		try{
			return parseFloat(window.getComputedStyle(ele,null)[attr]);
		}catch(e){
			return parseFloat(ele.currentStyle[attr]);
		}
	}else if(typeof val=="number"){
		if(attr=="opacity"){
			ele.style.opacity=val;
			ele.style.filter="alpha(opacity="+val*100+")";
		}else{
			ele.style[attr]=val+"px";
		}
	}	
}