import { NextResponse } from "next/server";
import { TechResource } from "../../../../types/TechResource";
import { connectToDatabase } from "../../../../utils/db";

export async function POST(request: Request) {
    try {
        const resource: TechResource = await request.json();

        if (!resource.category || !resource.name || !resource.link || !resource.description) {
            return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
        }

        // Connect to the database
        const { db } = await connectToDatabase();

        // Insert the new resource
        const collection = db.collection<TechResource>("resources");
        await collection.insertOne(resource);

        return NextResponse.json({ message: "Resource added successfully" }, { status: 201 });
    } catch (error) {
        console.error("Error adding resource:", error);
        return NextResponse.json({ error: "Failed to add resource" }, { status: 500 });
    }
}

// GET: Fetch resources for a specific category
export async function GET(request: Request) {
    try {
        const { searchParams } = new URL(request.url);
        const category = searchParams.get("category");

        if (!category) {
            return NextResponse.json({ error: "Category is required" }, { status: 400 });
        }

        // Connect to the database
        const { db } = await connectToDatabase();

        // Fetch resources for the specified category
        const collection = db.collection<TechResource>("resources");
        const resources = await collection.find({ category }).toArray();

        return NextResponse.json(resources, { status: 200 });
    } catch (error) {
        console.error("Error fetching resources:", error);
        return NextResponse.json({ error: "Failed to fetch resources" }, { status: 500 });
    }
}