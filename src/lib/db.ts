import mongoose from 'mongoose'

const MONGODB_URI = process.env.MONGODB_URI

interface GlobalMongoose {
  mongoose: {
    conn: typeof mongoose | null;
  } | null;
}

declare global {
  var mongoose: { conn: typeof mongoose | null } | null;
}

const cached = (global as unknown as GlobalMongoose).mongoose || { conn: null }

/**
 * Global is used here to maintain a cached connection across hot reloads
 * in development. This prevents connections growing exponentially
 * during API Route usage.
 */

export default async function dbConnect() {
  if (!MONGODB_URI) {
    throw new Error('Please define the MONGODB_URI environment variable')
  }

  if (cached.conn) {
    return cached.conn
  }

  try {
    cached.conn = await mongoose.connect(MONGODB_URI)
    console.log('MongoDB Connected')
    return cached.conn
  } catch (e) {
    console.error('MongoDB connection error:', e)
    throw e
  }
}
