/*--- Avanquest WebEasy Motion Script ---*/


function OnWeLoad()
{

	Img11={max:1,pos:0};
	Img11[0]=new Image();Img11[0].src='./images/b-norm2.gif';
	Img11[1]=new Image();Img11[1].src='./images/b-norm.gif';	IDP.my=(window.parent.frames.length && parent.MyFrm)?parent.MyFrm:window;
	IDP[1]=(V5)?'document.getElementById(\'e11\').src':(IE)?'e11.src':'document.e11.src';
	isOvr=1;
}


/*--- EndOfFile ---*/
