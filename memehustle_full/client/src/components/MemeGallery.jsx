import React, { useEffect, useState } from "react";
import axios from "axios";

function MemeGallery() {
  const [memes, setMemes] = useState([]);

  useEffect(() => {
    const fetchMemes = async () => {
      const res = await axios.get("http://localhost:4000/memes");
      setMemes(res.data);
    };
    fetchMemes();
  }, []);

  return (
    <div className="grid gap-4">
      {memes.map((meme) => (
        <div key={meme.id} className="bg-gray-900 p-4 rounded shadow">
          <img src={meme.image_url} alt={meme.title} className="mb-2" />
          <h3 className="text-lg font-bold text-neon-pink">{meme.title}</h3>
          <p className="text-sm text-neon-blue">Tags: {meme.tags?.join(", ")}</p>
        </div>
      ))}
    </div>
  );
}

export default MemeGallery;