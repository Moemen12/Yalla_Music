import React, { useState } from "react";
import { useGetMusicGenresQuery } from "../../../services/creator-mode";
import { IoClose } from "react-icons/io5";

const Stepper: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [genreInput, setGenreInput] = useState("");
  const [selectedGenres, setSelectedGenres] = useState<string[]>([]);
  const steps = [
    "Basic Information",
    "Release Details",
    "Content",
    "Collaborators",
    "Additional Information",
  ];

  const handleNext = () => {
    setActiveStep((prevStep) => Math.min(prevStep + 1, steps.length - 1));
  };

  const handlePrev = () => {
    setActiveStep((prevStep) => Math.max(prevStep - 1, 0));
  };

  const { data: music = [] } = useGetMusicGenresQuery();

  const filteredGenres = music.filter((genre) =>
    genre.toLowerCase().includes(genreInput.toLowerCase())
  );

  const handleGenreSelect = (genre: any) => {
    if (!selectedGenres.includes(genre)) {
      setSelectedGenres([...selectedGenres, genre]);
    }
    setGenreInput("");
  };

  const handleGenreRemove = (genre: any) => {
    setSelectedGenres(selectedGenres.filter((g) => g !== genre));
  };

  return (
    <div className="flex flex-col gap-4 p-4">
      <div className="overflow-x-auto mb-4">
        <ul className="steps w-full">
          {steps.map((step, index) => (
            <li
              key={index}
              className={`step cursor-pointer ${
                index === activeStep ? "step-primary" : ""
              }`}
              onClick={() => setActiveStep(index)}
            ></li>
          ))}
        </ul>
      </div>
      <div className="flex-auto bg-card-color p-4 rounded-lg">
        {/* Basic Information */}
        <div style={{ display: activeStep === 0 ? "block" : "none" }}>
          <h2 className="text-lg font-bold mb-4">Basic Information</h2>
          <form className="space-y-4">
            <div className="mb-4">
              <label className="block">Title:</label>
              <input
                type="text"
                className="w-full p-2 border rounded text-black"
              />
            </div>

            <div className="mb-4">
              <label className="block">Album:</label>
              <input
                type="text"
                className="w-full p-2 border rounded text-black"
              />
            </div>
            <div className="mb-4 relative">
              <label className="block">Genres:</label>
              <div className="flex flex-wrap gap-2">
                {selectedGenres.map((genre, index) => (
                  <div
                    key={index}
                    className="flex items-center bg-main-back rounded-full px-2 py-1"
                  >
                    <span className="mr-2">{genre}</span>
                    <IoClose
                      className="cursor-pointer"
                      onClick={() => handleGenreRemove(genre)}
                    />
                  </div>
                ))}
              </div>
              <input
                type="text"
                className="w-full p-2 border rounded text-black mt-2"
                value={genreInput}
                onChange={(e) => setGenreInput(e.target.value)}
              />
              {genreInput && (
                <ul className="absolute bg-white border rounded w-full max-h-40 overflow-y-auto mt-1 text-black">
                  {filteredGenres.map((genre, index) => (
                    <li
                      key={index}
                      className="p-2 cursor-pointer hover:bg-gray-200"
                      onClick={() => handleGenreSelect(genre)}
                    >
                      {genre}
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <div className="mb-4">
              <label className="block">Release Date:</label>
              <input
                type="date"
                className="w-full p-2 border rounded text-black"
              />
            </div>
          </form>
        </div>
        {/* Release Details */}
        <div style={{ display: activeStep === 1 ? "block" : "none" }}>
          <h2 className="text-lg font-bold mb-4">Release Details</h2>
          <form className="space-y-4">
            <div className="mb-4">
              <label className="block">Duration:</label>
              <input
                type="text"
                className="w-full p-2 border rounded text-black"
              />
            </div>

            <div className="mb-4">
              <label className="block">Record Label:</label>
              <input
                type="text"
                className="w-full p-2 border rounded text-black"
              />
            </div>

            <div className="mb-4">
              <label className="block">ISRC Code:</label>
              <input
                type="text"
                className="w-full p-2 border rounded text-black"
              />
            </div>
          </form>
        </div>
        {/* Content */}
        <div style={{ display: activeStep === 2 ? "block" : "none" }}>
          <h2 className="text-lg font-bold mb-4">Content</h2>
          <form className="space-y-4">
            <div className="mb-4">
              <label className="block">Lyrics:</label>
              <textarea
                className="w-full p-2 border rounded text-black"
                rows={4}
              ></textarea>
            </div>
            <div className="mb-4">
              <label className="block">Audio File:</label>
              <input
                type="file"
                className="w-full p-2 border rounded text-black"
              />
            </div>
            <div className="mb-4">
              <label className="block">Cover Art:</label>
              <input
                type="file"
                className="w-full p-2 border rounded text-black"
              />
            </div>
          </form>
        </div>
        {/* Collaborators */}
        <div style={{ display: activeStep === 3 ? "block" : "none" }}>
          <h2 className="text-lg font-bold mb-4">Collaborators</h2>
          <form className="space-y-4">
            <div className="mb-4">
              <label className="block">Featured Artists:</label>
              <input
                type="text"
                className="w-full p-2 border rounded text-black"
              />
            </div>
            <div className="mb-4">
              <label className="block">Producer:</label>
              <input
                type="text"
                className="w-full p-2 border rounded text-black"
              />
            </div>
            <div className="mb-4">
              <label className="block">Composer(s):</label>
              <input
                type="text"
                className="w-full p-2 border rounded text-black"
              />
            </div>
            <div className="mb-4">
              <label className="block">Songwriters:</label>
              <input
                type="text"
                className="w-full p-2 border rounded text-black"
              />
            </div>
          </form>
        </div>
        {/* Additional Information */}
        <div style={{ display: activeStep === 4 ? "block" : "none" }}>
          <h2 className="text-lg font-bold mb-4">Additional Information</h2>
          <p>Any additional information can go here.</p>
        </div>
      </div>
      <div className="flex justify-between mt-4">
        <button
          onClick={handlePrev}
          disabled={activeStep === 0}
          className="px-4 py-2 bg-gray-400 text-white rounded disabled:opacity-50"
        >
          Previous
        </button>
        <button
          onClick={handleNext}
          disabled={activeStep === steps.length - 1}
          className="px-4 py-2 bg-indigo-600 text-white rounded"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Stepper;
