import React, { useState } from "react";
import axios from "axios";

function MemeForm() {
  const [formData, setFormData] = useState({
    title: "",
    image_url: "",
    tags: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      ...formData,
      tags: formData.tags.split(",").map((t) => t.trim()),
    };
    if (!payload.image_url) payload.image_url = "https://picsum.photos/200";
    await axios.post("http://localhost:4000/memes", payload);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-gray-800 p-4 rounded shadow-lg">
      <h2 className="text-xl mb-2">Create Meme</h2>
      <input type="text" name="title" placeholder="Title" className="w-full mb-2 p-2 bg-black text-white border border-neon-pink" onChange={handleChange} />
      <input type="text" name="image_url" placeholder="Image URL" className="w-full mb-2 p-2 bg-black text-white border border-neon-blue" onChange={handleChange} />
      <input type="text" name="tags" placeholder="Tags (comma separated)" className="w-full mb-4 p-2 bg-black text-white border border-neon-purple" onChange={handleChange} />
      <button type="submit" className="bg-neon-green px-4 py-2 font-bold">Submit</button>
    </form>
  );
}

export default MemeForm;