'use client';



// app/beacon/[id]/page.tsx (or .js)
export async function generateStaticParams() {
  return [
    { id: '1' },
    { id: '2' },
    { id: '3' },
    { id: '4' },
    { id: '5' },
  ];
}

import { useParams } from 'next/navigation';
import { useState } from 'react';

// Sample rally data
const rallies = [
  {
    id: '1',
    title: 'Software Engineering Internship',
    type: 'Internship',
    company: 'Google',
    sourceUrl: 'https://careers.google.com/jobs/results/123456789/',
    postedDate: '2025-01-15',
    deadline: '2025-05-10',
    appliedDate: '2025-02-10',
    interviewDate: '2025-03-01',
    status: 'Applied',
    priority: 'High',
    stage: 'Interview',
    tags: ['Software Engineering', 'Internship', 'Tech'],
    resumeUsed: 'Resume_v1.pdf',
    location: 'Mountain View, CA',
    salary: '$45/hr',
    referralStatus: 'Requested',
    beacons: 'Initial interview scheduled',
  },
  {
    id: '2',
    title: 'Quantitative Research Intern',
    type: 'Internship',
    company: 'Jane Street',
    sourceUrl: 'https://www.janestreet.com/careers/roles/quant-research-intern/',
    postedDate: '2025-02-01',
    deadline: '2025-05-15',
    appliedDate: '2025-02-10',
    interviewDate: '2025-03-05',
    status: 'Interview',
    priority: 'High',
    stage: 'Technical Interview',
    tags: ['Quantitative', 'Research', 'Finance'],
    resumeUsed: 'Resume_v2.pdf',
    location: 'New York, NY',
    salary: 'Negotiable',
    referralStatus: 'Not Requested',
    beacons: 'Awaiting technical interview result',
  },
  {
    id: '3',
    title: 'Backend Developer Role',
    type: 'Full-time',
    company: 'Amazon',
    sourceUrl: 'https://www.amazon.jobs/en/jobs/123456',
    postedDate: '2025-01-20',
    deadline: '2025-05-08',
    appliedDate: '2025-02-15',
    interviewDate: '2025-03-10',
    status: 'Offer',
    priority: 'Medium',
    stage: 'Offer',
    tags: ['Backend', 'Developer', 'Tech'],
    resumeUsed: 'Resume_v3.pdf',
    location: 'Seattle, WA',
    salary: '$120,000/year',
    referralStatus: 'Not Requested',
    beacons: 'Offer received, waiting to accept',
  },
  {
    id: '4',
    title: 'Open Source Fellowship',
    type: 'Fellowship',
    company: 'MLH',
    sourceUrl: 'https://mlh.io/fellowships',
    postedDate: '2025-03-01',
    deadline: '2025-05-20',
    appliedDate: '2025-03-05',
    interviewDate: '2025-03-25',
    status: 'Wishlist',
    priority: 'Low',
    stage: 'Application Submitted',
    tags: ['Open Source', 'Fellowship', 'Tech'],
    resumeUsed: 'Resume_v4.pdf',
    location: 'Remote',
    salary: 'Unpaid',
    referralStatus: 'Not Requested',
    beacons: 'Not yet interviewed',
  },
  {
    id: '5',
    title: 'Summer Analyst Program',
    type: 'Internship',
    company: 'Goldman Sachs',
    sourceUrl: 'https://www.goldmansachs.com/careers/students/programs/americas/summer-analyst-program/',
    postedDate: '2025-02-10',
    deadline: '2025-05-12',
    appliedDate: '2025-02-20',
    interviewDate: '2025-03-15',
    status: 'Applied',
    priority: 'High',
    stage: 'Application Submitted',
    tags: ['Finance', 'Internship', 'Investment Banking'],
    resumeUsed: 'Resume_v5.pdf',
    location: 'New York, NY',
    salary: '$25/hr',
    referralStatus: 'Requested',
    beacons: 'Waiting for interview invitation',
  }
]

// Sample documents and beacons for dropdowns
const sampleDocs = [
  { id: 1, title: 'Resume_v1.pdf' },
  { id: 2, title: 'Resume_v2.pdf' },
  { id: 3, title: 'Resume_v3.pdf' },
  { id: 4, title: 'Resume_v4.pdf' },
  { id: 5, title: 'Resume_v5.pdf' },
];

const sampleBeacons = [
  { id: 1, title: 'Initial interview scheduled' },
  { id: 2, title: 'Awaiting technical interview result' },
  { id: 3, title: 'Offer received, waiting to accept' },
  { id: 4, title: 'Not yet interviewed' },
  { id: 5, title: 'Waiting for interview invitation' },
];

export default function RallyDetail() {
  const { id } = useParams();
  const rally = rallies.find((r) => r.id === id);
  const [isEditing, setIsEditing] = useState(false);
  const [form, setForm] = useState(rally || {});

  if (!rally) {
    return <p>Rally not found!</p>;
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  return (
    <div className="flex flex-col gap-4 h-auto max-w-3xl rounded-2xl bg-amber-50 justify-center mx-auto mt-10 p-6 shadow-lg">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">{isEditing ? 'Edit Rally' : rally.title}</h1>
        <button 
          className="px-4 py-2 text-amber-50 bg-base-100 rounded-lg hover:text-lg duration-300 transition-all"
          onClick={() => setIsEditing(!isEditing)}
        >
          {isEditing ? 'Cancel' : 'Edit'}
        </button>
      </div>

      {isEditing ? (
        <>
          {/* Title */}
          <fieldset className="fieldset">
            <label className="label text-lg text-base-100">Title</label>        
            <input type="text" name="title" className="input" placeholder="Title eg: Microsoft data analyst internship 2025" value={form.title} onChange={handleChange} />
          </fieldset>

          {/* Type */}
          <fieldset className="fieldset">
            <label className="label text-lg text-base-100">Type</label>
            <select name="type" value={form.type} onChange={handleChange} className="select">
              <option disabled value="">Type</option>
              <option>Internship</option>
              <option>Full-time</option>
              <option>Contest</option>
              <option>Scholarship</option>
              <option>Other</option>
            </select>
          </fieldset>

          {/* Company */}
          <fieldset className="fieldset">
            <label className="label text-lg text-base-100">Company</label>
            <input type="text" name="company" className="input" placeholder="Company eg: Microsoft" value={form.company} onChange={handleChange} />
          </fieldset>  

          {/* Source URL */}
          <fieldset className="fieldset">
            <label className="label text-lg text-base-100">Source URL</label>
            <label className="input">
              <span className="label">https://</span>
              <input type="text" name='sourceUrl' placeholder="URL" value={form.sourceUrl} onChange={handleChange}/>
            </label>
          </fieldset>

          {/* Dates */}
          <fieldset className="fieldset">
            <label className="label text-lg text-base-100">Dates</label>
            <div className="grid grid-cols-2 gap-4">
              {/* Posted Date */}
              <label htmlFor="postedDate" className="label text-base-100">
                <span className="label-text">Posted Date</span>
                <input
                  type="date"
                  name="postedDate"
                  id="postedDate"
                  value={form.postedDate}
                  onChange={handleChange}
                  className="input input-bordered w-full"
                />
              </label>

              {/* Deadline */}
              <label htmlFor="deadline" className="label text-base-100">
                <span className="label-text ">Deadline</span>
                <input
                  type="date"
                  name="deadline"
                  id="deadline"
                  value={form.deadline}
                  onChange={handleChange}
                  className="input input-bordered w-full"
                  required
                />
              </label>

              {/* Applied Date */}
              <label htmlFor="appliedDate" className="label text-base-100">
                <span className="label-text">Applied Date</span>
                <input
                  type="date"
                  name="appliedDate"
                  id="appliedDate"
                  value={form.appliedDate}
                  onChange={handleChange}
                  className="input input-bordered w-full"
                />
              </label>

              {/* Interview Date */}
              <label htmlFor="interviewDate" className="label text-base-100">
                <span className="label-text">Interview Date</span>
                <input
                  type="date"
                  name="interviewDate"
                  id="interviewDate"
                  value={form.interviewDate}
                  onChange={handleChange}
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </fieldset>

          {/* Status and Priority */}
          <div className="grid grid-cols-2 gap-4">
            <fieldset className="fieldset">
              <label className="label text-lg text-base-100 ">Status</label>
              <select name="status" value={form.status} onChange={handleChange} className="select ">
                <option>Draft</option>
                <option>Saved</option>
                <option>Applied</option>
                <option>In Progress</option>
                <option>Accepted</option>
                <option>Rejected</option>
              </select>
            </fieldset>
            <fieldset className="fieldset">
              <label className="label text-lg text-base-100 ">Priority</label>
              <select name="priority" value={form.priority} onChange={handleChange} className="select ">
                <option>Low</option>
                <option>Medium</option>
                <option>High</option>
              </select>
            </fieldset>
          </div>

          {/* Stage */}
          <fieldset className="fieldset">
            <label className="label text-lg text-base-100 ">Stage</label>
            <input type="text" name="stage" className="input" placeholder="Stage (e.g. OA, HR)" value={form.stage} onChange={handleChange} />
          </fieldset>

          {/* Tags */}
          <fieldset className="fieldset">
            <label className="label text-lg text-base-100 ">Tags</label>
            <input type="text" name="tags" className="input" placeholder="Tags (comma-separated)" value={form.tags} onChange={handleChange}/>
          </fieldset>

          {/* Location */}
          <fieldset className="fieldset">
            <label className="label text-lg text-base-100 ">Location</label>
            <input type="text" name="location" className="input" placeholder="Location" value={form.location} onChange={handleChange} />
          </fieldset>

          {/* Salary */}
          <fieldset className="fieldset">
            <label className="label text-lg text-base-100 ">Salary</label>
            <input type="text" name="salary" className="input" placeholder="Salary" value={form.salary} onChange={handleChange} />
          </fieldset>

          {/* Referral Status */}
          <fieldset className='fieldset'>
            <label className="label text-lg text-base-100 ">Referral Status</label>
            <select name="referralStatus" value={form.referralStatus} onChange={handleChange} className="select">
              <option>Not Requested</option>
              <option>Requested</option>
              <option>Got it</option>
            </select>
          </fieldset>

          {/* Resume Used */}
          <fieldset className='fieldset'>
            <label className="label text-lg text-base-100 ">Document linked</label>
            <select name="resumeUsed" className="select" value={form.resumeUsed} onChange={handleChange}>
              <option disabled value="">Select a document</option>
              {sampleDocs.map((document) => (
                <option key={document.id} value={document.title}>
                  {document.title}
                </option>
              ))}
            </select>
          </fieldset>

          {/* Beacon Linked */}
          <fieldset className='fieldset'>
            <label className="label text-lg text-base-100 ">Beacon linked</label>
            <select name="beacons" className="select" value={form.beacons} onChange={handleChange}>
              <option disabled value="">Select a beacon</option>
              {sampleBeacons.map((beacon) => (
                <option key={beacon.id} value={beacon.title}>
                  {beacon.title}
                </option>
              ))}
            </select>
          </fieldset>

          {/* Save Button */}
                  <button 
          className="btn w-fit btn-outline mt-4 bg-base-100 rounded-lg text-amber-50 hover:bg-amber-50 hover:text-base-100"
          onClick={() => {
            console.log('Saved form data:', form); 
            setIsEditing(false);
          }}
        >
          Save
        </button>
        </>
      ) : (
        <>
          <p className="text-gray-600">Company: {rally.company}</p>
          <p className="text-gray-600">Location: {rally.location}</p>
          <p className="text-gray-600">Type: {rally.type}</p>
          <p className="text-gray-600">Stage: {rally.stage}</p>
          <p className="text-gray-600">Status: {rally.status}</p>
          <p className="text-gray-600">Priority: {rally.priority}</p>
          <p className="text-gray-600">Deadline: {rally.deadline}</p>
          <p className="text-gray-600">Interview Date: {rally.interviewDate}</p>
          <p className="text-gray-600">Applied Date: {rally.appliedDate}</p>
          <p className="text-gray-600">Posted Date: {rally.postedDate}</p>
          <p className="text-gray-600">Salary: {rally.salary}</p>
          <p className="text-gray-600">Document Used: {rally.resumeUsed}</p>
          <p className="text-gray-600">Referral Status: {rally.referralStatus}</p>
          <p className="text-gray-600">Beacons: {rally.beacons}</p>
          <p className="text-gray-600">Tags: {rally.tags.join(', ')}</p>
          <a
            className="text-blue-600 underline mt-2"
            href={rally.sourceUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            View Original Listing
          </a>
        </>
      )}
    </div>
  );
}
