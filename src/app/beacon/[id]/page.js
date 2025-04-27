"use client";
import { useState } from "react";

export default function BeaconForm() {
  const [mode, setMode] = useState("read"); // "read" or "edit"
  const [beacon, setBeacon] = useState({
    id: 1,
    title: "Sample Beacon Title",
    content: "This is some sample content.",
    rallyId: "rally1",
    priority: "medium",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setBeacon((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log("Updated beacon:", beacon);
    setMode("read"); // switch back to read mode after submission
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6 max-w-3xl mx-auto p-4">
      {/* Toggle Button */}
      <button
        type="button"
        onClick={() => setMode(mode === "read" ? "edit" : "read")}
        className="btn w-fit btn-outline mt-4 hover:bg-amber-50 hover:text-base-100"
      >
        {mode === "read" ? "Edit" : "Cancel Edit"}
      </button>

      {/* Title */}
      <fieldset className="fieldset w-full max-w-md">
        <legend className="fieldset-legend text-lg">Beacon Title</legend>
        <input
          type="text"
          name="title"
          value={beacon.title}
          onChange={handleChange}
          placeholder="Enter your beacon title!"
          className="input"
          readOnly={mode === "read"}
          required
        />
      </fieldset>

      {/* Content */}
      <div className="w-full">
        <textarea
          name="content"
          value={beacon.content}
          onChange={handleChange}
          placeholder="notes"
          className="textarea w-full min-h-[20rem]"
          readOnly={mode === "read"}
          required
        />
      </div>

      {/* Rally Select */}
      <div className="w-full max-w-md">
        <select
          name="rallyId"
          value={beacon.rallyId}
          onChange={handleChange}
          className="select"
          disabled={mode === "read"}
        >
          <option disabled value="">Pick a rally (optional)</option>
          <option value="rally1">Rally 1</option>
          <option value="rally2">Rally 2</option>
        </select>
      </div>

      {/* Priority Select */}
      <div className="w-full max-w-md">
        <select
          name="priority"
          value={beacon.priority}
          onChange={handleChange}
          className="select"
          disabled={mode === "read"}
        >
          <option disabled value="">Select Priority</option>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
      </div>

      {/* Submit Button (only in edit mode) */}
      {mode === "edit" && (
        <button
          type="submit"
          className="btn btn-outline rounded-xl hover:bg-amber-50 hover:text-base-100"
        >
          Save Changes
        </button>
      )}
    </form>
  );
}
