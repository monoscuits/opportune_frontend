"use client";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function BeaconTable() {
  const router = useRouter();

  const [beacons, setBeacons] = useState([
    {
      id: 1,
      title: "Beacon 1",
      priority: "High",
      difficulty: "Hard",
      createdAt: "2025-04-26T14:00:00Z",
    },
    {
      id: 2,
      title: "Beacon 2",
      priority: "Medium",
      difficulty: "Medium",
      createdAt: "2025-04-25T10:00:00Z",
    },
    {
      id: 3,
      title: "Beacon 3",
      priority: "Low",
      difficulty: "Easy",
      createdAt: "2025-04-24T08:00:00Z",
    },
  ]);

  return (
    <>
    <div className="p-4 flex flex-col mx-auto ml-50 mt-5">
    <div className="mb-6">
      <h2 className="text-2xl font-bold text-amber-50">Your Beacons</h2>
      <p className="text-sm text-amber-50">
      Every beacon marks an opportunity you're working toward. Keep building.
      </p>
    </div>
    
    <div className="mb-3">
      <Link href="/beacon/new">
      <button className="btn btn-outline rounded-xl hover:bg-amber-50 hover:text-base-100">Create New</button>
      </Link>
    </div>
  </div>
    <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100 max-w-[75%] mx-auto mt-10">
  <table className="table">
    <thead>
      <tr><th>#</th><th>Title</th><th>Priority</th><th>Difficulty</th><th>Created At</th></tr>
    </thead>
    <tbody>
      {beacons.map((beacon, index) => (
        <tr
          key={beacon.id}
          onClick={() => router.push(`/beacon/${beacon.id}`)}
          className="transition-all duration-300 hover:bg-amber-100 hover:text-base-100 cursor-pointer"
        >
          <th>{index + 1}</th><td>{beacon.title}</td><td>{beacon.priority}</td><td>{beacon.difficulty}</td><td>{new Date(beacon.createdAt).toLocaleString()}</td>
        </tr>
      ))}
    </tbody>
  </table>
</div>
</>

  );
}
