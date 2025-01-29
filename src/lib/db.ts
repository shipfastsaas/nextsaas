import mongoose from 'mongoose'

const MONGODB_URI = process.env.MONGODB_URI

if (!MONGODB_URI) {
  throw new Error('Please define the MONGODB_URI environment variable')
}

/**
 * Global is used here to maintain a cached connection across hot reloads
 * in development. This prevents connections growing exponentially
 * during API Route usage.
 */
let cached = (global as any)._mongooseCache || { conn: null, promise: null }

if (!cached.promise) {
  const opts = {
    bufferCommands: false,
    maxPoolSize: 10,
  }

  cached.promise = mongoose.connect(MONGODB_URI, opts).then((mongoose) => {
    return mongoose
  })

  // Add to the cache
  ;(global as any)._mongooseCache = cached
}

async function dbConnect() {
  try {
    if (cached.conn) {
      return cached.conn
    }

    if (!cached.promise) {
      throw new Error('MongoDB connection promise not initialized')
    }

    cached.conn = await cached.promise
    return cached.conn
  } catch (e) {
    console.error('MongoDB connection error:', e)
    throw e
  }
}

export default dbConnect
