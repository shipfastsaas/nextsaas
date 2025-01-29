import { NextResponse } from 'next/server'
import mongoose from 'mongoose'

export async function GET() {
  try {
    // Vérifier si l'URI est définie
    const uri = process.env.MONGODB_URI
    if (!uri) {
      return NextResponse.json({
        error: 'MONGODB_URI is not defined',
        env: process.env.NODE_ENV
      })
    }

    // Tester la connexion
    await mongoose.connect(uri)
    const state = mongoose.connection.readyState

    return NextResponse.json({
      success: true,
      connection_state: state,
      database: mongoose.connection.db.databaseName,
      host: mongoose.connection.host
    })
  } catch (error) {
    return NextResponse.json({
      error: error instanceof Error ? error.message : 'Unknown error',
      env: process.env.NODE_ENV
    }, { 
      status: 500 
    })
  }
}
