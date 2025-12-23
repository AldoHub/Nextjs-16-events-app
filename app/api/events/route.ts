import connectDB from "@/lib/mongodb";
import { NextRequest, NextResponse } from "next/server";
import Event from "@/lib/event.model";

export async function POST(req: NextRequest) {
    try{
        await connectDB();
        const formData = await req.formData();

        let event;
        try{    
            event = Object.fromEntries(formData.entries());
        }catch(err){
            return NextResponse.json({error: "Invalid data format"}, {status: 400});
        }

        const createdEvent = await Event.create(event);
        return NextResponse.json({event: createdEvent}, {status: 201});

    }catch(err: Error | unknown){
        console.log(err);
        if(err instanceof Error){
            return NextResponse.json({error: err.message});
        }else{
            return NextResponse.json({error: "Something went wrong"}, {status: 500});
        }
        
    }
}

//TODO: 2:27:06