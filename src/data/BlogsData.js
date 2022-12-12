export const BlogData = [
  {
    id: 1,
    title: "Welcome to New York",
    description: "This blog is all about my new song",
    author: "Taylor",
    timeStamp:1670322132,
    body: {
      image: "https://google.com",
      content:
        `Upvotes became a great way to understand what your visitors want. You can take websites like ProductHunt, and public roadmaps like Gleap, Upvoty, Prodcamp, have the ability to let user share their thoughts (in votes).
        Even Reddit, one of the most popular social media lets people upvote or downvote your posts. We are going to build something similar with images! In this article, you'll learn how to create an upvoting application that allows users to upload images using Websockets and upvote their favorite photos. You'll also learn how to send emails via EmailJS to notify users when their images gain a vote. Websockets allows us to use bi-directional communication with the server. It means that if we put in an upvote, we can inform the other user about the new upvote without refreshing the page or using long-polling.

        Socket.io is a popular JavaScript library that allows us to create real-time, bi-directional communication between software applications and a Node.js server. It is optimised to process a large volume of data with minimal delay and provides better functionalities, such as fallback to HTTP long-polling or automatic reconnection.
        Just a quick background about us. Novu is the first open-source notification infrastructure. We basically help to manage all the product notifications. It can be In-App (the bell icon like you have in Facebook - Websockets), Emails, SMSs and so on. Here we'll set up the project environment for the image upvoting application. You will also learn how to add Socket.io to a React and Node.js application and connect both development servers for real-time communication via Socket.io.

        Create the project folder containing two sub-folders named client and server.`,
      comments: [
        {
          body: "my fav song, babe happy for you",
          author: "Selena",
        },
      ],
    },
  },
];
