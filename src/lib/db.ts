import mongoose from 'mongoose'

const MONGODB_URI = process.env.MONGODB_URI || ''

// Cette variable globale est sûre car Next.js crée une nouvelle instance pour chaque requête
let cached = global.mongoose

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null }
}

async function dbConnect(): Promise<typeof mongoose> {
  if (!MONGODB_URI) {
    throw new Error('Please define the MONGODB_URI environment variable')
  }

  if (cached.conn) {
    console.log('Using cached MongoDB connection')
    return cached.conn
  }

  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
      maxPoolSize: 10,
      serverSelectionTimeoutMS: 5000,
      socketTimeoutMS: 45000,
      family: 4 // Forcer IPv4
    }

    console.log('Connecting to MongoDB...', {
      uri_defined: !!MONGODB_URI,
      uri_length: MONGODB_URI.length,
      uri_starts_with: MONGODB_URI.startsWith('mongodb')
    })

    mongoose.set('debug', process.env.NODE_ENV === 'development')

    cached.promise = mongoose.connect(MONGODB_URI, opts).then((mongoose) => {
      console.log('MongoDB connected successfully')
      return mongoose
    })
  }

  try {
    cached.conn = await cached.promise
    return cached.conn
  } catch (e) {
    cached.promise = null
    console.error('MongoDB connection error:', e)
    throw e
  }
}

export default dbConnect
