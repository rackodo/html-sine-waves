var baseRad = 50;
var rad;
var baseMult = 1;
var mult;
let start;

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

function step(timeStamp) {
	if (start === undefined) {
		start = timeStamp;
	}

	const elapsed = timeStamp - start;

	mult = 1 + Math.sin(baseMult * elapsed / 1000) * .75;

	let mod = Math.sin(mult * Math.sin(baseRad * elapsed / 20000));
	rad = Math.abs(mod) * 50

	ctx.clearRect(0, 0, canvas.width, canvas.height);

	ctx.beginPath();
	ctx.arc(canvas.width / 2, canvas.height / 2, rad / 250 * canvas.width, 0, 2 * Math.PI);
	ctx.stroke();

	ctx.beginPath();
	ctx.arc(canvas.width / 6 * 1, canvas.height / 4 * 2, rad / 500 * canvas.width, 0, 2 * Math.PI);
	ctx.stroke();

	ctx.beginPath();
	ctx.arc(canvas.width / 6 * 5, canvas.height / 4 * 2, rad / 500 * canvas.width, 0, 2 * Math.PI);
	ctx.stroke();

	ctx.font = 20/500 * canvas.width + "px Arial";
	ctx.fillText("Sine Wave A: " + mult.toPrecision(3), 5/500 * canvas.width, 20/500 * canvas.width);
	ctx.fillText("Sine Wave B: " + rad.toPrecision(4), 5/500 * canvas.width, 40/500 * canvas.width);

	window.requestAnimationFrame(step)

}
window.requestAnimationFrame(step)