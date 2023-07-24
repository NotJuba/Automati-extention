console.log("hello world");

document.querySelector("#btn").addEventListener('click', () => {
    chrome.runtime.sendMessage({ text : "It works my friend" });
});

chrome.runtime.onMessage.addListener((msg) => {
    document.body.innerHTML += '<div>${msg.text}</div>';
});
