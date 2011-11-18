/*--- Avanquest WebEasy Motion Script ---*/


function OnWeLoad()
{

	Img12={max:1,pos:0};
	Img12[0]=new Image();Img12[0].src='b-norm2.gif';
	Img12[1]=new Image();Img12[1].src='b-norm.gif';	IDP.my=(window.parent.frames.length && parent.MyFrm)?parent.MyFrm:window;
	IDP[1]=(V5)?'document.getElementById(\'e12\').src':(IE)?'e12.src':'document.e12.src';
	isOvr=1;
}


/*--- EndOfFile ---*/
