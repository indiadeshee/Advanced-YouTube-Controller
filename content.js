// Function to get YouTube video URL
function getVideoUrl() {
  const videoPlayer = document.querySelector('video');
  if (videoPlayer) {
    return videoPlayer.src;
  }
  return null;
}

// Listen for messages from the popup
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === 'downloadVideo') {
    const videoUrl = getVideoUrl();
    if (videoUrl) {
      chrome.runtime.sendMessage({ action: 'downloadVideo', videoUrl });
      sendResponse({ status: 'success', videoUrl });
    } else {
      sendResponse({ status: 'error', message: 'Video URL not found' });
    }
  }
});