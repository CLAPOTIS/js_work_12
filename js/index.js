var grade_star=document.getElementsByClassName("grade_star");
var grade=document.getElementsByClassName("grade")[0];
var tip=document.getElementsByClassName("tip")[0];
var level=document.getElementsByClassName("level")[0];
var isclick=false;
var clickNum=0;
var arr=['很差','较差','还行','推荐','力荐'];
grade.onmouseover=function(){
	addClass(tip,"tip_add");
}
grade.onmouseout=function(){
	if(!isclick){
		tip.className="tip";
	}
	if(clickNum){
		addClass(tip,"tip_add");
	}
}
for(var i=0;i<grade_star.length;i++){
	grade_star[i].setAttribute("index",i);
	grade_star[i].onmouseover=function(){
		lighten(0);
		var num=Number(this.getAttribute("index"))+1;
		lighten(num);
		level.firstChild.nodeValue=arr[num-1];
		addClass(level,"level_add");
	}
	grade_star[i].onclick=function(){
		clickNum=Number(this.getAttribute("index"))+1;
		lighten(clickNum);
		isclick=true;
	}
	grade_star[i].onmouseout=function(){
		if(!isclick){
			lighten(0);
			level.className="level";
		}
		if(clickNum){
			lighten(clickNum);
			level.firstChild.nodeValue=arr[clickNum-1];
			addClass(level,"level_add");
		}
	}
}

//点亮num颗星星
function lighten(num){
	if(num==0){
		for(var i=0;i<grade_star.length;i++){
			grade_star[i].className="grade_star";
		}
	}else if(num<3){
		for(var i=0;i<num;i++){
			addClass(grade_star[i],"grade_star_1");
		}
		isclick=false;
	}else{
		for(var i=0;i<num;i++){
			addClass(grade_star[i],"grade_star_2");
		}
		isclick=false;
	}
	
}

//添加类
function addClass(element,value){
	if(!element.className){
		element.className=value;
	}else{
		element.className=element.className.concat(" "+value);
	}
}