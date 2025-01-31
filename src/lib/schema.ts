import mongoose, { Schema, models } from "mongoose"

const ResourceSchema = new Schema(
    {
        category: { type: String, required: true },
        name: { type: String, required: true },
        description: { type: String, required: true },
        link: { type: String, required: true },
    },
    { timestamps: true }
);

const Resource = models.Resource || mongoose.model("Resource", ResourceSchema);
export default Resource;
