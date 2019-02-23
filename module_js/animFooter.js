var mySplitText = new SplitText("#animFoot");
TweenMax.staggerFrom(mySplitText.chars, 0.5, {
	opacity:0,
	rotation: -180, 
	y: -100,
	ease: Back.easeOut
}, 0.02);