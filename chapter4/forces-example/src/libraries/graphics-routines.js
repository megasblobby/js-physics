function drawColoredRect(canvasContext, position, sizes, color) {
	canvasContext.fillStyle = color;
	canvasContext.fillRect(position.x, position.y, sizes.x, sizes.y);
}

function drawColoredCircle(canvasContext, position, radius, color) {
	canvasContext.fillStyle = color;
	canvasContext.beginPath();
	canvasContext.arc(position.x, position.y, radius, 0, Math.PI * 2);
	canvasContext.fill();
}

function drawImage(canvasContext, image, position) {
	canvasContext.drawImage(image, position.x, position.y);
}

function drawCenteredRotatedImage(canvasContext, image, position, angle) {
	canvasContext.save();
	canvasContext.translate(position.x, position.y);
	canvasContext.rotate(angle);
	canvasContext.drawImage(image, -image.width / 2,
							-image.height / 2);
	canvasContext.restore();
}

function drawColoredText(canvasContext, stringToRender, position, color) {
	canvasContext.fillStyle = color;
	canvasContext.fillText(stringToRender, position.x, position.y);
}

export {drawColoredRect, drawColoredCircle, drawImage,
        drawCenteredRotatedImage, drawColoredText};
