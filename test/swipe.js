var touchstartFlag = false;

var v, i;

var prevX, prevY;

var distanceX, distanceY;

var contentsWrapper = document.querySelector('.swipe-contents-wrapper');

var lockVerticalScrolling = false;

document.querySelector('.swipe-contents-wrapper').addEventListener('touchstart', (e) => {

	touchstartFlag = true;

	prevX = e.touches[0].screenX;
	prevY = e.touches[0].screenY;

});

document.querySelector('.swipe-contents-wrapper').addEventListener('touchend', (e) => {

	touchstartFlag = false;

	// console.log('기울기: ', i);

	lockVerticalScrolling = false;
	console.log('scroll unlocked');

	return true;

});

document.querySelector('.swipe-contents-wrapper').addEventListener('touchmove', (e) => {

	if (!touchstartFlag) {
		return;
	}

	var mi;

	var currX, currY;

	currX = e.touches[0].screenX;
	currY = e.touches[0].screenY;

	distanceX = currX - prevX;
	distanceY = currY - prevY;

	i = Math.abs( distanceY / distanceX );

	mi = Math.abs( distanceY / distanceX );

	if (isNaN(mi)) {
		mi = 0;
	}

	console.log('순간 기울기: ', mi);

	if ((mi > 0 && mi < 2) || lockVerticalScrolling) {
		if (lockVerticalScrolling) {
			console.log('scroll locked by flag');
		} else {
			console.log('scroll locked by mi: ', mi);
		}
		lockVerticalScrolling = true;
		e.preventDefault();
	} else {

	}


});