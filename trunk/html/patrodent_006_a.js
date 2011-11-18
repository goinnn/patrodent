/*--- Avanquest WebEasy Motion Script ---*/


function OnWeLoad()
{

	Img16={max:1,pos:0};
	Img16[0]=new Image();Img16[0].src='b-norm2.gif';
	Img16[1]=new Image();Img16[1].src='b-norm.gif';	IDP.my=(window.parent.frames.length && parent.MyFrm)?parent.MyFrm:window;
	IDP[1]=(V5)?'document.getElementById(\'e16\').src':(IE)?'e16.src':'document.e16.src';
	isOvr=1;
}


/*--- EndOfFile ---*/
