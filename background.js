chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === 'downloadVideo') {
    const videoUrl = request.videoUrl;
    if (videoUrl) {
      chrome.downloads.download({
        url: videoUrl,
        filename: 'video.mp4'
      });
    }
  }
});