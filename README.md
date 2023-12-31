# message-postinator
**A tool for testing the security of apps that leverage postMessage()**

**Try it now: [postinator.jaytonbirch.com](https://postinator.jaytonbirch.com/)**

<img width="200" alt="Screenshot 2023-10-09 at 10 25 06 AM" src="https://github.com/birch-jayton/message-postinator/assets/22551809/60a8dcc2-b85e-4c20-9dd9-6c48327e0847">


## What is this for?
### The problem
A web client is vulnerable to poisonous messaging when it:
- reflects user-defined iframes
- listens for messages without source-checking

Check out the [mdn docs regarding security concerns with postMessage()](https://developer.mozilla.org/en-US/docs/Web/API/Window/postMessage#security_concerns)

### Using message-postinator
#### Blaster Builder
message-postinator can be used to build webpages that post messages that you define to the frame's parent. You can then test web apps that reflect user-defined iframes by using the message blaster that you created. 
#### Playground
You can test your Blasters in the playground
