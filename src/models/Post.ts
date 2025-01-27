import mongoose from 'mongoose'

const PostSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Please provide a title for this post'],
    maxlength: [60, 'Title cannot be more than 60 characters'],
  },
  content: {
    type: String,
    required: [true, 'Please provide the content for this post'],
  },
  excerpt: {
    type: String,
    required: [true, 'Please provide a short excerpt for this post'],
    maxlength: [160, 'Excerpt cannot be more than 160 characters'],
  },
  status: {
    type: String,
    required: true,
    enum: ['draft', 'published'],
    default: 'draft',
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
})

export default mongoose.models.Post || mongoose.model('Post', PostSchema)
