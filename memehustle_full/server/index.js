const express = require("express");
const cors = require("cors");
const { createClient } = require("@supabase/supabase-js");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_KEY
);

app.post("/memes", async (req, res) => {
  const { title, image_url, tags } = req.body;
  const { data, error } = await supabase.from("memes").insert([{ title, image_url, tags }]);
  if (error) return res.status(400).json({ error });
  res.json(data);
});

app.get("/memes", async (req, res) => {
  const { data, error } = await supabase.from("memes").select("*").order("created_at", { ascending: false });
  if (error) return res.status(400).json({ error });
  res.json(data);
});

app.listen(4000, () => console.log("Server running on http://localhost:4000"));