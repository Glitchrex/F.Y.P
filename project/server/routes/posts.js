const express = require('express')
const router = express.Router()
const Post = require('../models/Post')

// router.get('/', function (req, res) {
//   res.setHeader('Access-Control-Allow-Origin', '*')
//   res.setHeader(
//     'Access-Control-Allow-Methods',
//     'GET, POST, OPTIONS, PUT, PATCH, DELETE'
//   ) // If needed
//   res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type') // If needed
//   res.setHeader('Access-Control-Allow-Credentials', true) // If needed

//   res.send('cors problem fixed')
// })

//Get Request
router.get('/', async (req, res) => {
  try {
    const posts = await Post.find()
    res.json(posts)
    console.log('Get Request Completed')
  } catch (err) {
    res.json({ message: err.message })
  }
})

//Post Request
router.post('/', async (req, res) => {
  const post = new Post({
    pincode: req.body.pincode,
    address: req.body.address,
  })
  try {
    const savedPost = post.save()
    res.json((await savedPost).toJSON())
    console.log('Post Request Completed')
  } catch (err) {
    res.json({ err: err.message })
  }
})

//Find Request
router.get('/:postId', async (req, res) => {
  try {
    const post = await Post.findById(req.params.postId)
    res.json(post)
    console.log('Find Request Completed')
  } catch (err) {
    res.json({ message: err })
  }
})

//Delete Request

router.delete('/:postId', async (req, res) => {
  try {
    const uu = await Post.remove({ _id: req.params.postId })
    res.json(uu)
    console.log('Delete Request Completed')
  } catch (err) {
    res.json({
      message: err,
    })
  }
})

//Update Request
router.patch('/:postId', async (req, res) => {
  try {
    const updatepp = await Post.updateOne(
      { _id: req.params.postId },
      {
        $set: {
          address: req.body.address,
        },
      }
    )
    res.json(updatepp)
    console.log('Update Request Completed')
  } catch (err) {
    res.json({
      message: err.message,
    })
  }
})

module.exports = router
