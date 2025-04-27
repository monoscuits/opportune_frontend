'use client'; // if you're using Next.js App Router (optional)

import { useState } from 'react';
import Link from 'next/link';

const initialRallies = [
  { id: 1, title: 'Software Engineering Internship', company: 'Google', status: 'Applied', deadline: '2025-05-10' },
  { id: 2, title: 'Quantitative Research Intern', company: 'Jane Street', status: 'Interview', deadline: '2025-05-15' },
  { id: 3, title: 'Backend Developer Role', company: 'Amazon', status: 'Offer', deadline: '2025-05-08' },
  { id: 4, title: 'Open Source Fellowship', company: 'MLH', status: 'Accepted', deadline: '2025-05-20' },
  { id: 5, title: 'Summer Analyst Program', company: 'Goldman Sachs', status: 'Applied', deadline: '2025-05-12' },
];

export default function Rally() {
  const [rallies, setRallies] = useState(initialRallies);

  const handleDelete = (id) => {
    setRallies(rallies.filter(rally => rally.id !== id));
  };

  return (
    <>
      {/* Top section */}
      <div className="p-4">
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-amber-50">Your Rallies</h2>
          <p className="text-sm text-amber-50">
            Keep track of all your application statuses and deadlines. You can add new rallies to stay organized.
          </p>
        </div>

        <div className="mb-3">
          <Link href="/rally/new">
            <button className="btn btn-outline rounded-xl hover:bg-amber-50 hover:text-base-100">Create New</button>
          </Link>
        </div>
      </div>

      {/* Grid of rallies */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
        {rallies.map((rally) => (
          <div
            key={rally.id}
            className="bg-amber-50 rounded-2xl shadow-md p-4 flex flex-col justify-between border border-gray-200 hover:scale-105 hover:z-10 transition-all duration-300 hover:shadow-lg relative"
          >
            <div>
              <Link href={`/rally/${rally.id}`}>
                <h2 className="text-xl font-semibold text-gray-800">{rally.title}</h2>
              </Link>
              <p className="text-sm text-gray-500">{rally.company}</p>
            </div>

            <div className="mt-4 flex items-center justify-between text-sm">
              <span
                className={`px-2 py-1 rounded-full font-medium ${
                  rally.status === 'Applied'
                    ? 'bg-pink-100 text-pink-700'
                    : rally.status === 'Saved'
                    ? 'bg-lime-100 text-lime-700'
                    : rally.status === 'Rejected'
                    ? 'bg-red-100 text-red-700'
                    : rally.status === 'In Progress'
                    ? 'bg-blue-100 text-blue-700'
                    : rally.status === 'Accepted'
                    ? 'bg-green-100 text-green-700'
                    : 'bg-gray-100 text-gray-700'
                }`}
              >
                {rally.status}
              </span>
              <span className="text-gray-400">📅 {rally.deadline}</span>
            </div>

            {/* Delete button */}
            <button
              onClick={() => handleDelete(rally.id)}
              className="absolute btn-soft top-2 right-2 bg-red-500 text-white rounded-full p-1 hover:text-red-600 hover:bg-amber-50 text-xs duration-300"
            >
              delete
            </button>
          </div>
        ))}
      </div>
    </>
  );
}
