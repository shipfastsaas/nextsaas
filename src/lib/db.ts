import mongoose from 'mongoose'

const MONGODB_URI = process.env.MONGODB_URI || ''

class Database {
  private static instance: Database
  private _conn: typeof mongoose | null = null
  private _promise: Promise<typeof mongoose> | null = null

  private constructor() {
    console.log('Database instance created')
  }

  static getInstance(): Database {
    if (!Database.instance) {
      Database.instance = new Database()
    }
    return Database.instance
  }

  async connect(): Promise<typeof mongoose> {
    if (!MONGODB_URI) {
      console.error('MONGODB_URI is not defined in environment variables')
      throw new Error('MONGODB_URI is not defined')
    }

    console.log('MongoDB URI check:', {
      defined: !!MONGODB_URI,
      length: MONGODB_URI.length,
      startsWith: MONGODB_URI.startsWith('mongodb'),
    })

    // Si déjà connecté, retourner la connexion existante
    if (this._conn) {
      console.log('Reusing existing MongoDB connection')
      return this._conn
    }

    // Si une connexion est en cours, attendre qu'elle se termine
    if (this._promise) {
      console.log('Waiting for existing connection promise')
      return await this._promise
    }

    console.log('Initiating new MongoDB connection...')
    console.log('MongoDB URI exists:', !!MONGODB_URI)

    try {
      // Créer une nouvelle connexion
      this._promise = mongoose.connect(MONGODB_URI, {
        bufferCommands: false,
        connectTimeoutMS: 10000, // 10 secondes de timeout
        socketTimeoutMS: 45000,  // 45 secondes de timeout pour les opérations
        serverSelectionTimeoutMS: 10000, // 10 secondes pour la sélection du serveur
        maxPoolSize: 10,
        retryWrites: true,
        retryReads: true,
      })

      this._conn = await this._promise
      console.log('Successfully connected to MongoDB')
      return this._conn
    } catch (e) {
      this._promise = null
      console.error('MongoDB connection error:', e)
      throw e
    }
  }
}

// Fonction simple pour les composants
async function dbConnect(): Promise<typeof mongoose> {
  const database = Database.getInstance()
  return database.connect()
}

export default dbConnect
