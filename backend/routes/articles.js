import { Router } from "express";
const router = Router();
const articles = [
  {
    name: "learn-react",
    title: "The Fastest Way to Learn React",
    upvotes: 19,
    comments: [
      {
        author: "anon",
        text: "react really simplifies web apps",
      },
      {
        author: "nalexander",
        text: "I like this way better than backbone",
      },
    ],
    content: [
      `Welcome! Today we're going to be talking about the fastest way to
          learn React. We'll be discussing some topics such as proin congue
          ligula id risus posuere, vel eleifend ex egestas. Sed in turpis leo. 
          Aliquam malesuada in massa tincidunt egestas. Nam consectetur varius turpis, 
          non porta arcu porttitor non. In tincidunt vulputate nulla quis egestas. Ut 
          eleifend ut ipsum non fringilla. Praesent imperdiet nulla nec est luctus, at 
          sodales purus euismod.`,
      `Donec vel mauris lectus. Etiam nec lectus urna. Sed sodales ultrices dapibus. 
          Nam blandit tristique risus, eget accumsan nisl interdum eu. Aenean ac accumsan 
          nisi. Nunc vel pulvinar diam. Nam eleifend egestas viverra. Donec finibus lectus 
          sed lorem ultricies, eget ornare leo luctus. Morbi vehicula, nulla eu tempor 
          interdum, nibh elit congue tellus, ac vulputate urna lorem nec nisi. Morbi id 
          consequat quam. Vivamus accumsan dui in facilisis aliquet.`,
      `Etiam nec lectus urna. Sed sodales ultrices dapibus. 
          Nam blandit tristique risus, eget accumsan nisl interdum eu. Aenean ac accumsan 
          nisi. Nunc vel pulvinar diam. Nam eleifend egestas viverra. Donec finibus lectus 
          sed lorem ultricies, eget ornare leo luctus. Morbi vehicula, nulla eu tempor 
          interdum, nibh elit congue tellus, ac vulputate urna lorem nec nisi. Morbi id 
          consequat quam. Vivamus accumsan dui in facilisis aliquet.`,
    ],
  },
  {
    name: "learn-node",
    title: "How to Build a Node Server in 10 Minutes",
    upvotes: 7,
    comments: [
      {
        author: "anon",
        text: "Node really changed things for me since I no longer have to master PHP... JS all the way!",
      },
      {
        author: "Tester",
        text: "No!!! Not another server!",
      },
    ],
    content: [
      "In this article, we're going to be talking looking at a very quick way to set up a Node.js server. We'll be discussing some topics such as proin congue ligula id risus posuere, vel eleifend ex egestas. Sed in turpis leo. Aliquam malesuada in massa tincidunt egestas. Nam consectetur varius turpis, non porta arcu porttitor non. In tincidunt vulputate nulla quis egestas. Ut eleifend ut ipsum non fringilla. Praesent imperdiet nulla nec est luctus, at sodales purus euismod.",
      "Donec vel mauris lectus. Etiam nec lectus urna. Sed sodales ultrices dapibus. Nam blandit tristique risus, eget accumsan nisl interdum eu. Aenean ac accumsan nisi. Nunc vel pulvinar diam. Nam eleifend egestas viverra. Donec finibus lectus sed lorem ultricies, eget ornare leo luctus. Morbi vehicula, nulla eu tempor interdum, nibh elit congue tellus, ac vulputate urna lorem nec nisi. Morbi id consequat quam. Vivamus accumsan dui in facilisis aliquet.",
      "",
    ],
  },
  {
    name: "my-thoughts-on-resumes",
    title: "My Thoughts on Resumes",
    upvotes: 6,
    comments: [
      {
        author: "dabsalom",
        text: "Really useful tips! I Never thought about resumes this much",
      },
      {
        author: "Tester",
        text: "I haven't redone my resume in aeons so this is really helpful",
      },
    ],
    content: [
      `Today is the day I talk about something which scares most people: resumes.
          In reality, I'm not sure why people have such a hard time with proin congue
          ligula id risus posuere, vel eleifend ex egestas. Sed in turpis leo. 
          Aliquam malesuada in massa tincidunt egestas. Nam consectetur varius turpis, 
          non porta arcu porttitor non. In tincidunt vulputate nulla quis egestas. Ut 
          eleifend ut ipsum non fringilla. Praesent imperdiet nulla nec est luctus, at 
          sodales purus euismod.`,
      `Donec vel mauris lectus. Etiam nec lectus urna. Sed sodales ultrices dapibus. 
          Nam blandit tristique risus, eget accumsan nisl interdum eu. Aenean ac accumsan 
          nisi. Nunc vel pulvinar diam. Nam eleifend egestas viverra. Donec finibus lectus 
          sed lorem ultricies, eget ornare leo luctus. Morbi vehicula, nulla eu tempor 
          interdum, nibh elit congue tellus, ac vulputate urna lorem nec nisi. Morbi id 
          consequat quam. Vivamus accumsan dui in facilisis aliquet.`,
      `Etiam nec lectus urna. Sed sodales ultrices dapibus. 
          Nam blandit tristique risus, eget accumsan nisl interdum eu. Aenean ac accumsan 
          nisi. Nunc vel pulvinar diam. Nam eleifend egestas viverra. Donec finibus lectus 
          sed lorem ultricies, eget ornare leo luctus. Morbi vehicula, nulla eu tempor 
          interdum, nibh elit congue tellus, ac vulputate urna lorem nec nisi. Morbi id 
          consequat quam. Vivamus accumsan dui in facilisis aliquet.`,
    ],
  },
];

router.get("/", (req, res) => {
  res.send(articles);
});

router.get("/:name", (req, res) => {
  const article = articles.filter((article) => article.name == req.params.name);
  res.send(article);
});

router.put("/:name/upvotes", (req, res) => {
  const article = articles.find((article) => article.name == req.params.name);
  article.upvotes = article.upvotes + 1;
  res.send(article);
});

export default router;
