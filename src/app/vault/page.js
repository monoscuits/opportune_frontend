"use client";
import { useState } from "react";

export default function VaultPage() {
  const [documents, setDocuments] = useState([]);
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile && selectedFile.size <= 10 * 1024 * 1024) { // 10MB max
      setFile(selectedFile);
      setError(null);
    } else {
      setError("File size should not exceed 10MB.");
    }
  };

  const handleUpload = (e) => {
    e.preventDefault();
    if (file) {
      const newDocument = {
        id: documents.length + 1,
        title: file.name,
        url: URL.createObjectURL(file),
      };
      setDocuments([...documents, newDocument]);
      setFile(null); // Reset file input
    } else {
      setError("Please select a file to upload.");
    }
  };

  const handleDelete = (id) => {
    setDocuments(documents.filter(doc => doc.id !== id));
  };

  return (
    <div className="p-4 max-w-[75%] mx-auto">
      <h1 className="text-2xl mb-6 ">Vault</h1>

      {/* Upload Form */}
      <form onSubmit={handleUpload} className="flex flex-col gap-6 mb-6">
        <fieldset className="fieldset">
          <legend className="fieldset-legend text-md ">Pick a file</legend>
          <input
            type="file"
            className="file-input"
            onChange={handleFileChange}
            required
          />
          <label className="label">Max size 10Mb</label>
        </fieldset>

        {error && <p className="text-red-500">{error}</p>}

        <button
          type="submit"
          className="btn btn-md btn-outline rounded-xl hover:bg-amber-50 hover:text-base-100 w-fit"
        >
          Upload Document
        </button>
      </form>

      {/* Documents List */}
      <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
        <table className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {documents.map((document) => (
              <tr key={document.id}>
                <td>{document.title}</td>
                <td>
                  <a
                    href={document.url}
                    download
                    className="mr-4 btn btn-soft btn-info rounded-xl"
                  >
                    Download
                  </a>
                  <button
                    onClick={() => handleDelete(document.id)}
                    className="btn btn-soft btn-error rounded-xl"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
