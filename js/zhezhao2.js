var imgcontainer=document.getElementById("content").getElementsByClassName("div");
console.log(imgcontainer);

for(var i=0;i<imgcontainer.length;i++){
	imgcontainer[i].onmouseover=showmask();
}

function showmask(){
	for(var i=0;i<imgcontainer.length;i++){
		if(imgcontainer[i]==this){
			imgcontainer[i].getElementsByTagName("a").className="mask";
			
		}else{
			imgcontainer[i].getElementsByTagName("a").className="";
		}
	}
}
