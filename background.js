chrome.runtime.onInstalled.addListener(() => {
  console.log("OverDrive Button URL Modifier extension installed.");
});

chrome.webNavigation.onCompleted.addListener(() => {
  chrome.scripting.executeScript({
    target: { allFrames: true, tabId: activeTabId },
    files: ["content.js"]
  });
}, {
  url: [
    { hostContains: "overdrive.com" }
  ]
});
