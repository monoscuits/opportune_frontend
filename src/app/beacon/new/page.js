"use client";
import { useState } from "react";

export default function CreateBeacon() {
  const [beacon, setBeacon] = useState({
    title: "",
    content: "",
    rallyId: "no rally",
    priority: "not set",
    createdAt: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setBeacon(prev => ({
      ...prev,
      [name]: value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    // Automatically set the createdAt timestamp
    const timestamp = new Date().toISOString(); // Get the current timestamp in ISO format

    const beaconWithTimestamp = {
      ...beacon,
      createdAt: timestamp, // Add createdAt to the beacon object
    };

    // Now, beaconWithTimestamp has the createdAt field set correctly
    console.log(beaconWithTimestamp); // Log the updated beacon object (which includes createdAt)
  }

  return (

    
    <form onSubmit={handleSubmit} className="flex flex-col gap-6 max-w-3xl mx-auto p-4">
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
        >
          <option disabled value="">Select Priority</option>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
      </div>
    
      {/* Submit */}
      <button
        type="submit"
        className="btn btn-outline rounded-xl hover:bg-amber-50 hover:text-base-100"
      >
        Create Beacon
      </button>
    </form>
  );
}
