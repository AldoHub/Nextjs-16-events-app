import mongoose, { Mongoose } from "mongoose";
import { buffer } from "stream/consumers";

//define the connection cache type
type ConnectionCache = {
    conn: typeof mongoose | null;
    promise: Promise<typeof mongoose> | null;
}

//extend the global object to include our mongoose cache
declare global {
    var mongooseCache: ConnectionCache | undefined;
}

const MONGODB_URI = process.env.MONGODB_URI;


//Initialize the cache on the global object to persists across hot reloads in development
const cached: ConnectionCache = global.mongooseCache || {
    conn: null,
    promise: null,
};

if(!global.mongooseCache) {
    global.mongooseCache = cached;
}


/** Establish a connection to MongoDB using mongoose */
async function connectDB(): Promise<typeof mongoose> {
    //return the cached connection if it exists
    if (cached.conn) {
        return cached.conn;
    }
    //return existing connection promise if it exists
    if(!cached.promise) {

        //check if MongoDB exists
        if (!MONGODB_URI) {
            throw new Error("Please define the MONGODB_URI environment variable inside .env.local");
        }


        const options = {
            bufferCommands: false, //disabble Mongoose buffering
        }

        //create a new connection
        cached.promise = mongoose.connect(MONGODB_URI!, options).then((mongoose) => {
            return mongoose;
        });
    }

    try {
        //wait for the connection to be established
        cached.conn = await cached.promise;
    } catch (err) {
        console.error(err);
        cached.conn = null;
        throw err;
    }

    return cached.conn;
}

export default connectDB;