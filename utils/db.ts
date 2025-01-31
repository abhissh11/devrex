import mongoose from "mongoose";

if (!process.env.MONGODB_URI) {
    throw new Error('Please define the MONGODB_URI environment variable');
}

if (!process.env.MONGODB_DB) {
    throw new Error('Please define the MONGODB_DB environment variable');
}

let cachedConnection: typeof mongoose | null = null;

export async function connectToDatabase() {
    if (cachedConnection) {
        console.log("Using cached database connection");
        return cachedConnection;
    }

    try {
        console.log("Attempting to connect to MongoDB...");
        const connection = await mongoose.connect(process.env.MONGODB_URI!, {
            dbName: process.env.MONGODB_DB,
            serverSelectionTimeoutMS: 30000, // Increase server selection timeout
            socketTimeoutMS: 45000, // Increase socket timeout
            connectTimeoutMS: 30000, // Increase connection timeout
            retryWrites: true, // Enable retryable writes
            retryReads: true, // Enable retryable reads
        });
        console.log("Successfully connected to MongoDB");
        cachedConnection = connection;
        return connection;
    } catch (error) {
        console.error("Failed to connect to MongoDB:", error);
        throw error; // Rethrow the error to stop the application if the connection fails
    }
}