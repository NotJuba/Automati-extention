console.log("Yeah it's working");

chrome.runtime.onMessage.addListener((msg) => {
    console.log(msg.text);
});
