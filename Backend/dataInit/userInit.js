const Chat = require("../models/chats.js");
const mongoose = require('mongoose');

main()
.then(res =>console.log("DB connected"))
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/shouldchat');

}
const sampleChats = [
  // Conversation 1: Praveen and Ankit (Project Coordination)
  {
    from: "699c616f35be35242c3f88bd", // Praveen
    to: "699c61ca35be35242c3f88c5",   // Ankit
    msg: "Hey Ankit, did you check the latest schema updates?",
    sendAt: new Date("2024-05-20T10:00:00Z")
  },
  {
    from: "699c61ca35be35242c3f88c5", // Ankit
    to: "699c616f35be35242c3f88bd",   // Praveen
    msg: "Just looking at them now. Looks like we need to add a 'read' status.",
    sendAt: new Date("2024-05-20T10:05:00Z")
  },
  {
    from: "699c616f35be35242c3f88bd", // Praveen
    to: "699c61ca35be35242c3f88c5",   // Ankit
    msg: "Agreed. I'll update the Mongoose model.",
    sendAt: new Date("2024-05-20T10:07:00Z")
  },

  // Conversation 2: Praveen and Kaushal (Meeting Logistics)
  {
    from: "699c616f35be35242c3f88bd", // Praveen
    to: "699c619a35be35242c3f88c1",   // Kaushal
    msg: "Kaushal, are you joining the standup call?",
    sendAt: new Date("2024-05-20T11:00:00Z")
  },
  {
    from: "699c619a35be35242c3f88c1", // Kaushal
    to: "699c616f35be35242c3f88bd",   // Praveen
    msg: "Yes, give me 2 minutes. Just finishing a bug fix.",
    sendAt: new Date("2024-05-20T11:01:00Z")
  },

  // Conversation 3: Ankit and Kaushal (Asset Sharing)
  {
    from: "699c61ca35be35242c3f88c5", // Ankit
    to: "699c619a35be35242c3f88c1",   // Kaushal
    msg: "Sending the new UI assets now.",
    sendAt: new Date("2024-05-20T12:30:00Z")
  },
  {
    from: "699c619a35be35242c3f88c1", // Kaushal
    to: "699c61ca35be35242c3f88c5",   // Ankit
    msg: "Got them! These look much cleaner than the previous version.",
    sendAt: new Date("2024-05-20T12:35:00Z")
  },

  // Conversation 4: Group follow-ups
  {
    from: "699c61ca35be35242c3f88c5", // Ankit
    to: "699c616f35be35242c3f88bd",   // Praveen
    msg: "Praveen, I merged the PR. Check the staging site.",
    sendAt: new Date("2024-05-20T14:00:00Z")
  },
  {
    from: "699c616f35be35242c3f88bd", // Praveen
    to: "699c61ca35be35242c3f88c5",   // Ankit
    msg: "Nice! Everything is working smoothly.",
    sendAt: new Date("2024-05-20T14:10:00Z")
  },
  {
    from: "699c619a35be35242c3f88c1", // Kaushal
    to: "699c616f35be35242c3f88bd",   // Praveen
    msg: "I'll start on the documentation tonight.",
    sendAt: new Date("2024-05-20T15:00:00Z")
  },
  {
    from: "699c61ca35be35242c3f88c5", // Ankit
    to: "699c619a35be35242c3f88c1",   // Kaushal
    msg: "Don't forget to include the environment variables section.",
    sendAt: new Date("2024-05-20T15:05:00Z")
  },
  {
    from: "699c619a35be35242c3f88c1", // Kaushal
    to: "699c61ca35be35242c3f88c5",   // Ankit
    msg: "Will do. 👍",
    sendAt: new Date("2024-05-20T15:06:00Z")
  },
  {
    from: "699c616f35be35242c3f88bd", // Praveen
    to: "699c619a35be35242c3f88c1",   // Kaushal
    msg: "Kaushal, can you also update the README?",
    sendAt: new Date("2024-05-20T16:00:00Z")
  },
  {
    from: "699c619a35be35242c3f88c1", // Kaushal
    to: "699c616f35be35242c3f88bd",   // Praveen
    msg: "Sure, adding it to my list.",
    sendAt: new Date("2024-05-20T16:05:00Z")
  },
  {
    from: "699c61ca35be35242c3f88c5", // Ankit
    to: "699c616f35be35242c3f88bd",   // Praveen
    msg: "Call it a day? 🍺",
    sendAt: new Date("2024-05-20T17:00:00Z")
  }
];

async function initData(){
    await Chat.insertMany(sampleChats)
}

initData()