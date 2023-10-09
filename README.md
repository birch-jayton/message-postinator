# message-postinator
**A tool for testing the security of apps that reflect user-defined iframes**

<img width="200px" alt="Screenshot 2023-10-09 at 10 25 06 AM" src="https://github.com/birch-jayton/message-postinator/assets/22551809/37832f45-5134-40e4-aed3-9130603eeb3f">

## What is this for?
A web client is vulnerable to poisonous messaging when it:
- reflects user-defined iframes
- listens for messages without source-checking

Check out the [mdn docs regarding security concerns with postMessage()](https://developer.mozilla.org/en-US/docs/Web/API/Window/postMessage#security_concerns)
