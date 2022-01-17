const express = require("express");
const router = express.Router();
const Post = require("../models/Post");

// GET all posts
router.get("/", async (req, res) => {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (err) {
    res.json({ message: err });
  }
});

// GET A SPECIFIC POST
router.get("/:postId", async (req, res) => {
  // console.log(req.params.postId);
  try {
    const post = await Post.findById(req.params.postId);
    res.json(post);
  } catch (err) {
    res.json({ message: err });
  }
});

// POST (SUBMIT) a new post
router.post("/", async (req, res) => {
  // console.log(req.body);
  const post = new Post({
    title: req.body.title,
    description: req.body.description,
  });

  try {
    const savedPost = await post.save();
    res.json(savedPost);
  } catch (err) {
    res.json({ message: err });
  }
});
// //PROMISE VERSION
// router.post('/', (req,res) => {
//     // console.log(req.body);
//     const post = new Post({
//         title: req.body.title,
//         description: req.body.description
//     });

//     post.save()
//     .then(data => {
//         res.json(data);
//     })
//     .catch(err => {
//         res.json({message: err});
//     });

// });

// router.get("/specific", (req, res) => {
//   res.send("Specific post");
// });

// DELETE Post
router.delete("/:postId", async (req, res) => {
  try {
    const removedPost = await Post.remove({ _id: req.params.postId });
    res.json(removedPost);
  } catch (err) {
    res.json({ message: err });
  }
});

// UPDATE Post
router.patch("/:postId", async (req, res) => {
  try {
    const updatedPost = await Post.updateOne(
      {
        _id: req.params.postId,
      },
      {
        $set: { title: req.body.title },
      }
    );
    res.json(updatedPost);
  } catch (err) {
    console.log("patch error");
    res.json({ message: err });
  }
});

module.exports = router;
