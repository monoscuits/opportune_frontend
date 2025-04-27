"use client";
import { useState } from 'react';

const sampleBeacons = [
  {
    id: '1',
    title: 'Finish Spring Boot API',
    difficulty: 'Medium',
    priority: 'High',
    createdAt: '2025-04-20T08:30:00Z'
  },
  {
    id: '2',
    title: 'Revise DSA basics',
    difficulty: 'Easy',
    priority: 'Medium',
    createdAt: '2025-04-21T09:15:00Z'
  },
  {
    id: '3',
    title: 'Implement Rally Data Table',
    difficulty: 'Hard',
    priority: 'High',
    createdAt: '2025-04-22T13:45:00Z'
  },
  {
    id: '4',
    title: 'Read MongoDB docs',
    difficulty: 'Easy',
    priority: 'Low',
    createdAt: '2025-04-23T11:00:00Z'
  },
  {
    id: '5',
    title: 'Deploy Opportune Backend',
    difficulty: 'Hard',
    priority: 'High',
    createdAt: '2025-04-24T16:20:00Z'
  }
];

const sampleDocs = [
  {
    id: 1,
    title: "Resume.pdf",
    url: "https://example.com/files/resume.pdf",
  },
  {
    id: 2,
    title: "CoverLetter.docx",
    url: "https://example.com/files/coverletter.docx",
  },
  {
    id: 3,
    title: "ProjectReport.zip",
    url: "https://example.com/files/projectreport.zip",
  },
]

export default function RallyForm() {


  const [easyMode, setEasyMode] = useState(false);
  const [form, setForm] = useState({
    title: '',
    type: '',
    company: '',
    sourceUrl: '',
    postedDate: '',
    deadline: '',
    appliedDate: '',
    interviewDate: '',
    status: 'Draft',
    priority: 'Medium',
    stage: '',
    tags: [],
    resumeUsed: '',
    location: '',
    salary: '',
    referralStatus: 'Not Requested',
    beacons: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'tags') {
      setForm((prev) => ({ ...prev, [name]: value.split(',').map(tag => tag.trim()) }));
    } else {
      setForm((prev) => ({ ...prev, [name]: value }));
    }
  };
  

  const handleSubmit = (e) => {
    e.preventDefault();
  
    const payload = easyMode
      ? {
          title: form.title,
          type: form.type,
          deadline: form.deadline,
          status: form.status,
        }
      : form;
  
    console.log('Submitting:', payload);
    // Send payload to backend
  };
  

  return (
    <div 
    className='min-h-screen'
    style={{
      backgroundImage:
        "url(/img/rally_create_bg.jpg)",
    }}>
        <form onSubmit={handleSubmit} className="space-y-4 p-4 ml-8 max-w-xl ">
      <h2 className="text-2xl font-semibold">Create a Rally!</h2>

            <div className="flex justify-between items-center mb-4">
               
                <label className="flex items-center gap-2 text-sm">
                <input
                    type="checkbox"
                    checked={easyMode}
                    onChange={() => setEasyMode(!easyMode)}
                    className="toggle theme-controller"
                />
                Easy Mode for my lazy people!
                </label>
            </div>
        
        {/* title */}

        {easyMode? (
                <>
                    <fieldset className="fieldset">
                        <label className="label text-lg">Title</label>        
                        <input type="text" name="title" className="input" placeholder="Title eg: Microsoft data analyst internship 2025" value={form.title} onChange={handleChange} />
                    </fieldset>

                    <fieldset className="fieldset">
                            <label className="label text-lg">Type</label>
                            <select name="type" value={form.type} onChange={handleChange} className="select">
                                <option disabled value="">Type</option>
                                <option>Internship</option>
                                <option>Full-time</option>
                                <option>Contest</option>
                                <option>Scholarship</option>
                                <option>Other</option>
                            </select>
                    </fieldset>
                        <label htmlFor="deadline" className="label">
                        <span className="label-text">Deadline</span>
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

                    <fieldset className="fieldset">
                    <label className="label text-lg">Status</label>
                    <select name="status" value={form.status} onChange={handleChange} className="select ">
                        <option>Draft</option>
                        <option>Saved</option>
                        <option>Applied</option>
                        <option>In Progress</option>
                        <option>Accepted</option>
                        <option>Rejected</option>
                    </select>
                    </fieldset>
                </>
        ):(
            <>
                <fieldset className="fieldset">
        <label className="label text-lg">Title</label>        
        <input type="text" name="title" className="input" placeholder="Title eg: Microsoft data analyst internship 2025" value={form.title} onChange={handleChange} />
      </fieldset>       

      
        {/* type of rally */}
      <fieldset className="fieldset">
                <label className="label text-lg">Type</label>
                <select name="type" value={form.type} onChange={handleChange} className="select">
                    <option disabled value="">Type</option>
                    <option>Internship</option>
                    <option>Full-time</option>
                    <option>Contest</option>
                    <option>Scholarship</option>
                    <option>Other</option>
                </select>
        </fieldset>

        {/* company */}
      <fieldset className="fieldset">
        <label className="label text-lg">Company</label>
        <input type="text" name="company" className="input" placeholder="Company eg: Microsoft" value={form.company} onChange={handleChange} />
      </fieldset>  
    
    {/* source URL*/}
      <fieldset className="fieldset">
        <label className="label text-lg"> source url</label>
            <label className="input">
            <span className="label">https://</span>
            <input type="text" name='sourceUrl' placeholder="URL" value={form.sourceUrl} onChange={handleChange}/>
        </label>
        </fieldset>
      
        {/* dates */}
        <fieldset className="fieldset">
        <label className="label text-lg">Dates</label>
                        <div className="grid grid-cols-2 gap-4">

                {/* Posted Date */}
                <label htmlFor="postedDate" className="label">
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
                <label htmlFor="deadline" className="label">
                    <span className="label-text">Deadline</span>
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
                <label htmlFor="appliedDate" className="label">
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
                <label htmlFor="interviewDate" className="label">
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

        
        {/* status and priority */}
      <div className="grid grid-cols-2 gap-4">
        
        <fieldset className="fieldset">
        <label className="label text-lg">Status</label>
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
        <label className="label text-lg">Priority</label>
        <select name="priority" value={form.priority} onChange={handleChange} className="select ">
          <option>Low</option>
          <option>Medium</option>
          <option>High</option>
        </select>
        </fieldset>
        
      </div>

        {/* stage */}
      <fieldset className="fieldset">
      <label className="label text-lg">Stage</label>
        <input type="text" name="stage" className="input" placeholder="Stage (e.g. OA, HR)" value={form.stage} onChange={handleChange} />
      </fieldset> 
      
        {/* tags */}
      <fieldset className="fieldset">
      <label className="label text-lg">Tags</label>
        <input type="text" name="tags" className="input" placeholder="Tags (comma-separated)" value={form.tags} onChange={handleChange}/>
      </fieldset> 
    
        {/* location */}
      <fieldset className="fieldset">
      <label className="label text-lg">Location</label>
        <input type="text" name="location" className="input" placeholder="Location" value={form.location} onChange={handleChange} />
      </fieldset> 

        {/* Salary */}
      <fieldset className="fieldset">
      <label className="label text-lg">Salary</label>
        <input type="text" name="salary" className="input" placeholder="Salary" value={form.salary} onChange={handleChange} />
      </fieldset> 

        {/* referreal status */}
      <fieldset className='fieldset'>
      <label className="label text-lg">referral Status</label>
      <select name="referralStatus" value={form.referralStatus} onChange={handleChange} className="select">
      <option>Not Requested</option>
        <option>Requested</option>
        <option>Got it</option>
        </select>
      </fieldset>
      
              <fieldset className='fieldset'>
          <label className="label text-lg">Document linked</label>
          <select name="resumeUsed" className="select" value={form.resumeUsed} onChange={handleChange}>
            <option disabled value="">Select a document</option>
            {sampleDocs.map((document) => (
              <option key={document.id} value={document.title}>
                {document.title}
              </option>
            ))}
          </select>
        </fieldset>

        <fieldset className='fieldset'>
          <label className="label text-lg">Beacon linked</label>
          <select name="beacons" className="select" value={form.beacons} onChange={handleChange}>
            <option disabled value="">Select a beacon</option>
            {sampleBeacons.map((beacon) => (
              <option key={beacon.id} value={beacon.title}>
                {beacon.title}
              </option>
            ))}
          </select>
        </fieldset>

            </>
        )}

      
      

      <button type="submit" className="btn btn-outline text-sm rounded-xl px-4 py-1 hover:bg-amber-50 hover:text-base-100">Save Rally</button>
    </form>
    </div>
  );
} 
