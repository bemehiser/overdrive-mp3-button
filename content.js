function modifyButtonUrlsAndText() {
  const buttons = document.querySelectorAll("a"); // Select all anchor elements

  buttons.forEach(button => {
    if (button.href && button.href.includes("audiobook-overdrive")) {
      button.href = button.href.replace("audiobook-overdrive", "audiobook-mp3");
      button.textContent = "Download .odm file";
      console.log(`Modified URL and text: ${button.href} - ${button.textContent}`);
    }
  });
}

// Run the function initially
modifyButtonUrlsAndText();

// Observe DOM changes to handle dynamically loaded content
const observer = new MutationObserver(() => {
  modifyButtonUrlsAndText();
});

// Start observing changes in the body
observer.observe(document.body, {
  childList: true,  // Listen for added/removed nodes
  subtree: true     // Include all descendant nodes
});