import { NextResponse } from "next/server";
import { connectToDatabase } from "../../../../utils/db";
import Resource from "@/lib/schema"; // Ensure this path points to your Mongoose model

// Define a TypeScript interface for the request body
interface ResourceRequest {
    category: string;
    resources: {
        name: string;
        description: string;
        link: string;
    }[];
}

// POST: Add multiple resources to a stack category
export async function POST(req: Request) {
    try {
        // Connect to the database
        await connectToDatabase();

        // Parse the request body
        const { category, resources }: ResourceRequest = await req.json();

        // Validate request body
        if (!category || !resources || !Array.isArray(resources)) {
            return NextResponse.json({ error: "Invalid request data" }, { status: 400 });
        }

        // Validate each resource in the array
        for (const res of resources) {
            if (!res.name || !res.description || !res.link) {
                return NextResponse.json(
                    { error: "Each resource must have a name, description, and link" },
                    { status: 400 }
                );
            }
        }

        // Save each resource in the database
        const newResources = await Resource.insertMany(
            resources.map((res) => ({
                category,
                name: res.name,
                description: res.description,
                link: res.link,
            }))
        );

        return NextResponse.json(
            { message: "Resources added successfully", data: newResources },
            { status: 201 }
        );
    } catch (error) {
        console.error("Error adding resources:", error);

        // Properly handle unknown error type
        let errorMessage = "Failed to add resources";
        if (error instanceof Error) {
            errorMessage = error.message;
        }

        return NextResponse.json(
            { error: errorMessage },
            { status: 500 }
        );
    }
}

// GET: Fetch all resources for a specific stack category
export async function GET(req: Request) {
    try {
        // Connect to the database
        await connectToDatabase();

        // Extract the category from the query parameters
        const { searchParams } = new URL(req.url);
        const category = searchParams.get("category");

        // Validate the category
        if (!category) {
            return NextResponse.json({ error: "Category is required" }, { status: 400 });
        }

        // Fetch resources by category from MongoDB
        const resources = await Resource.find({ category });

        return NextResponse.json(resources, { status: 200 });
    } catch (error) {
        console.error("Error fetching resources:", error);

        // Properly handle unknown error type
        let errorMessage = "Failed to fetch resources";
        if (error instanceof Error) {
            errorMessage = error.message;
        }

        return NextResponse.json(
            { error: errorMessage },
            { status: 500 }
        );
    }
}