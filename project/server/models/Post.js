const mongoose = require('mongoose')

const PostSchema = mongoose.Schema({
  pincode: {
    type: Number,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
    required: true,
  },
  networks: [
    {
      jio: [
        {
          signal_strength: {
            type: Number,
            required: true,
          },
          data_speed: {
            type: Number,
            required: true,
          },
        },
      ],
    },
    {
      airtel: [
        {
          signal_strength: {
            type: Number,
            required: true,
          },
          data_speed: {
            type: Number,
            required: true,
          },
        },
      ],
    },
    {
      vi: [
        {
          signal_strength: {
            type: Number,
            required: true,
          },
          data_speed: {
            type: Number,
            required: true,
          },
        },
      ],
    },
    {
      bsnl: [
        {
          signal_strength: {
            type: Number,
            required: true,
          },
          data_speed: {
            type: Number,
            required: true,
          },
        },
      ],
    },
  ],
})

module.exports = mongoose.model('restapi', PostSchema)
