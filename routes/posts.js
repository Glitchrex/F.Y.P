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
    networks: {
      jio: {
        signal_strength: req.body.networks.jio.signal_strength,
        data_speed: req.body.networks.jio.data_speed,
      },

      airtel: {
        signal_strength: req.body.networks.airtel.signal_strength,
        data_speed: req.body.networks.airtel.data_speed,
      },
      vi: {
        signal_strength: req.body.networks.vi.signal_strength,
        data_speed: req.body.networks.vi.data_speed,
      },
      bsnl: {
        signal_strength: req.body.networks.bsnl.signal_strength,
        data_speed: req.body.networks.bsnl.data_speed,
      },
    },
  })
  try {
    const savedPost = post.save()
    res.json((await savedPost).toJSON())
    console.log('Post Request Completed')
  } catch (err) {
    res.json({ err: err.message })
  }
})

//Find Request by ID
router.get('/:postId', async (req, res) => {
  try {
    const post = await Post.findById(req.params.postId)
    res.json(post)
    console.log('Find Request by ID Completed')
  } catch (err) {
    res.json({ message: err })
  }
})

//Find Request by Pincode
router.get('/findbypincode/:pincodee', async (req, res) => {
  try {
    const post = await Post.find({ pincode: req.params.pincodee })
    res.json(post)
    console.log('Find Request by Pincode Completed')
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
