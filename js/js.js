document.onreadystatechange=function(){
  if(document.readyState=="complete"){
       $(".loading").fadeOut();
}
}


function iqy()
{
    var so=document.getElementById("so").value;
	if(so==""||so==null)
	{
		alert("请输入影片名")
	}
	else{
	 open("http://so.iqiyi.com/so/q_"+so);
	}
}

function yk()
{
    var so=document.getElementById("so").value;
	if(so==""||so==null)
	{
		alert("请输入影片名")
	}
	else{
	 open("http://www.soku.com/search_video/q_"+so);
	}

}




function tx()
{
    var so=document.getElementById("so").value;
	if(so==""||so==null)
	{
		alert("请输入影片名")
	}
	else{
	 open("https://v.qq.com/x/search/?q="+so);
	}
}



function mr()
{
var url=document.getElementById("url").value;
var u="http://jk.zskjvip.cn/?url=";
document.getElementById("player").src=u+url;
}

function api1()
{
var url=document.getElementById("url").value;
var u="/api1.php?url=";
document.getElementById("player").src=u+url;
}

function api2()
{
var url=document.getElementById("url").value;
var u="/api2.php?url=";
document.getElementById("player").src=u+url;
}

function api3()
{
var url=document.getElementById("url").value;
var u="/api2.php?url=";
document.getElementById("player").src=u+url;
}

function api4()
{
var url=document.getElementById("url").value;
var u="/api4.php?url=";
document.getElementById("player").src=u+url;
}

function api5()
{
var url=document.getElementById("url").value;
var u="/api5.php?url=";
document.getElementById("player").src=u+url;
}
