/*--- Avanquest WebEasy Motion Script ---*/


function OnWeLoad()
{

	Img10={max:1,pos:0};
	Img10[0]=new Image();Img10[0].src='./images/b-norm2.gif';
	Img10[1]=new Image();Img10[1].src='./images/b-norm.gif';	IDP.my=(window.parent.frames.length && parent.MyFrm)?parent.MyFrm:window;
	IDP[1]=(V5)?'document.getElementById(\'e10\').src':(IE)?'e10.src':'document.e10.src';
	isOvr=1;
}


/*--- EndOfFile ---*/
