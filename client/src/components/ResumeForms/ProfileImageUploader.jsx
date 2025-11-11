import React, { useState } from "react";
import dummy_profile from "../../assets/dummy_profile.png";

const ProfileImageUploader = () => {
  const [profileImg, setProfileImg] = useState(null); // current saved image
  const [previewImg, setPreviewImg] = useState(null); // temporary preview
  const [selectedFile, setSelectedFile] = useState(null);

  const handleImageSelect = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setSelectedFile(file);
    setPreviewImg(URL.createObjectURL(file));
  };

  const handleSave = () => {
    // Save the new preview as actual profile image
    setProfileImg(previewImg);
    setPreviewImg(null);
  };

  const handleCancel = () => {
    // Remove preview + selected image
    setPreviewImg(null);
  };

  return (
    <div className="flex  space-y-4 flex-col gap-2  ">
      <label
        htmlFor="profile-upload"
        className="cursor-pointer flex flex-col gap-2 "
      >
        <p className=" opacity-80 font-mono ">
          <i class="fa-solid fa-camera"></i> Profile picture (optional)
        </p>
        <div className=" h-20 w-20 rounded-full  border-2 border-gray-300 flex justify-center items-center">
          { selectedFile? (
            <img
            src={previewImg || profileImg}
            className="h-18 w-18 rounded-full object-cover border-2 border-gray-300 hover:opacity-80 transition-all"
          /> )  : (
            <> </>
          )
          
          }
        </div>
      </label>

      <input
        id="profile-upload"
        type="file"
        accept="image/*"
        className="hidden"
        onChange={handleImageSelect}
      />

      {previewImg && (
        <div className="flex gap-2   ">
          <button
            onClick={handleSave}
            className="px-2 py-1 h-8 rounded bg-indigo-600 text-white hover:bg-indigo-700 cursor-pointer"
          >
            Save
          </button>

          <button
            onClick={handleCancel}
            className="px-2 py-1 h-8 rounded bg-gray-200 hover:bg-gray-300 cursor-pointer"
          >
            Cancel
          </button>
        </div>
      )}
    </div>
  );
};

export default ProfileImageUploader;
