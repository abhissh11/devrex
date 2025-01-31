"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

interface Resource {
  name: string;
  description: string;
  link: string;
}

export default function PostResourceForm() {
  const router = useRouter();
  const [category, setCategory] = useState("");
  const [resources, setResources] = useState<Resource[]>([
    { name: "", description: "", link: "" },
  ]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Handle adding a new resource input field
  const addResource = () => {
    setResources([...resources, { name: "", description: "", link: "" }]);
  };

  // Handle removing a resource input field
  const removeResource = (index: number) => {
    const updatedResources = resources.filter((_, i) => i !== index);
    setResources(updatedResources);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await fetch("/api/resources", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ category, resources }),
      });

      if (!response.ok) {
        throw new Error("Failed to add resources");
      }

      const data = await response.json();
      console.log("Resources added successfully:", data);

      // Redirect to the resources page after successful submission
      router.push(`/resources/${category.toLowerCase()}`);
    } catch (error) {
      console.error("Error adding resources:", error);
      setError("Failed to add resources. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-base min-h-screen text-white p-6 w-full ">
      <h1 className="text-3xl font-bold mb-6">Add Resources</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Category Input */}
        <div>
          <label htmlFor="category" className="block text-lg font-medium mb-2">
            Category
          </label>
          <input
            type="text"
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            placeholder="Enter category in CAPITAL (e.g., HTML, CSS)"
            className="w-full p-3 bg-chase text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* Resource Inputs */}
        {resources.map((resource, index) => (
          <div key={index} className="space-y-4">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold">Resource {index + 1}</h2>
              {resources.length > 1 && (
                <button
                  type="button"
                  onClick={() => removeResource(index)}
                  className="text-red-500 hover:text-red-600"
                >
                  Remove
                </button>
              )}
            </div>
            <div>
              <label
                htmlFor={`name-${index}`}
                className="block text-lg font-medium mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id={`name-${index}`}
                value={resource.name}
                onChange={(e) => {
                  const updatedResources = [...resources];
                  updatedResources[index].name = e.target.value;
                  setResources(updatedResources);
                }}
                placeholder="Enter resource name"
                className="w-full p-3 bg-chase text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label
                htmlFor={`description-${index}`}
                className="block text-lg font-medium mb-2"
              >
                Description
              </label>
              <textarea
                id={`description-${index}`}
                value={resource.description}
                onChange={(e) => {
                  const updatedResources = [...resources];
                  updatedResources[index].description = e.target.value;
                  setResources(updatedResources);
                }}
                placeholder="Enter resource description"
                className="w-full p-3 bg-chase text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label
                htmlFor={`link-${index}`}
                className="block text-lg font-medium mb-2"
              >
                Link
              </label>
              <input
                type="url"
                id={`link-${index}`}
                value={resource.link}
                onChange={(e) => {
                  const updatedResources = [...resources];
                  updatedResources[index].link = e.target.value;
                  setResources(updatedResources);
                }}
                placeholder="Enter resource link"
                className="w-full p-3 bg-chase text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
          </div>
        ))}

        {/* Add Resource Button */}
        <button
          type="button"
          onClick={addResource}
          className="w-full p-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all"
        >
          Add Another Resource
        </button>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading}
          className="w-full p-3 bg-green-700 text-white rounded-lg hover:bg-green-600 transition-all disabled:bg-green-400"
        >
          {loading ? "Submitting..." : "Submit Resources"}
        </button>

        {/* Error Message */}
        {error && <p className="text-red-500 text-center mt-4">{error}</p>}
      </form>
    </div>
  );
}
