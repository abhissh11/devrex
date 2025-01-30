import { NextResponse } from "next/server";
import { MongoClient } from "mongodb";
import { TechResource } from "../../../../types/TechResource";
// import { TechResource } from "@/types/TechResource";

// MongoDB connection
const uri = process.env.MONGODB_URI as string;
const client = new MongoClient(uri);

// POST: Add a new resource
export async function POST(request: Request) {
    try {
        const resource: TechResource = await request.json();

        if (!resource.category || !resource.name || !resource.link || !resource.description) {
            return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
        }

        await client.connect();
        const db = client.db("tech_resources_db");
        const collection = db.collection<TechResource>("resources");

        // Insert the new resource
        await collection.insertOne(resource);

        return NextResponse.json({ message: "Resource added successfully" }, { status: 201 });
    } catch (error) {
        console.error("Error adding resource:", error);
        return NextResponse.json({ error: "Failed to add resource" }, { status: 500 });
    } finally {
        await client.close();
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

        await client.connect();
        const db = client.db("tech_resources_db");
        const collection = db.collection<TechResource>("resources");

        // Fetch resources for the specified category
        const resources = await collection.find({ category }).toArray();

        return NextResponse.json(resources, { status: 200 });
    } catch (error) {
        console.error("Error fetching resources:", error);
        return NextResponse.json({ error: "Failed to fetch resources" }, { status: 500 });
    } finally {
        await client.close();
    }
}