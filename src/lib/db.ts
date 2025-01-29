import mongoose from 'mongoose'

const MONGODB_URI = process.env.MONGODB_URI

if (!MONGODB_URI) {
  throw new Error('Please define the MONGODB_URI environment variable')
}

interface MongooseCache {
  conn: typeof mongoose | null
  promise: Promise<typeof mongoose> | null
}

// Déclarer la propriété _mongooseCache sur l'objet global
declare global {
  // eslint-disable-next-line no-var
  var _mongooseCache: MongooseCache | undefined
}

let cached: MongooseCache = global._mongooseCache || { conn: null, promise: null }

if (!cached.promise) {
  const opts = {
    bufferCommands: false,
    maxPoolSize: 10,
  }

  cached.promise = mongoose.connect(MONGODB_URI, opts).then((mongoose) => {
    return mongoose
  })

  global._mongooseCache = cached
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
