const video = document.getElementById('video');
const button = document.getElementById('button');

// Prompt to select media stream and pass t video element
async function selectMedia(){
	const mediaStream = await navigator.mediaDevices.getDisplayMedia();
	video.srcObject = mediaStream;
	video.onloadedmetadata = () => {
		video.play();
	}
}

button.addEventListener('click', async() => {
	button.disabled = true;
	// Start picture in picture
	await video.requestPictureInPicture();
	button.disabled = false;
});
selectMedia();