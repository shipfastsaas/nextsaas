import { NextResponse } from 'next/server'
import mongoose from 'mongoose'

export async function GET() {
  try {
    // Vérifier l'état de la connexion MongoDB
    const mongoStatus = {
      MONGODB_URI_defined: !!process.env.MONGODB_URI,
      MONGODB_URI_length: process.env.MONGODB_URI?.length || 0,
      MONGODB_URI_starts_with: process.env.MONGODB_URI?.startsWith('mongodb'),
      mongoose_connection_state: mongoose.connection.readyState,
    }

    // Retourner les informations de diagnostic
    return NextResponse.json({
      environment: process.env.NODE_ENV,
      mongo_status: mongoStatus,
      timestamp: new Date().toISOString(),
    })
  } catch (error) {
    console.error('Debug endpoint error:', error)
    return NextResponse.json({ error: 'Debug endpoint error' }, { status: 500 })
  }
}
