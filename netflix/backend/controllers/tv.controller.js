import { fetchFromTMBD } from "../services/tmbd.service.js";

export const getTrendingTv = async (req, res) => {
  try {
    const url = "https://api.themoviedb.org/3/trending/all/day?language=en-US";
    const data = await fetchFromTMBD(url, res);
    const randomMovie =
      data.results[Math.floor(Math.random() * data.results?.length)];
    res.json({ success: true, content: randomMovie });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Something wend wrong !" + err.message,
    });
  }
};

export const getTvTrailers = async (req, res) => {
  const { id } = req.params;
  try {
    const url = `https://api.themoviedb.org/3/tv/${id}/videos?language=en-US`;
    const data = await fetchFromTMBD(url);
    res.json({ success: true, trailers: data.results });
  } catch (err) {
    if (err.message.includes("404")) {
      res.status(404).json({ success: false, message: "No trailer found!" });
    }
    res.status(500).json({ success: false, message: err.message });
  }
};

export const getTvDetails = async (req, res) => {
  const { id } = req.params;
  try {
    const url = `https://api.themoviedb.org/3/tv/${id}?language=en-US`;
    const data = await fetchFromTMBD(url);
    res.json({ success: true, movie: data });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

export const getSimilarTv = async (req, res) => {
  const { id } = req.params;
  try {
    const url = `https://api.themoviedb.org/3/tv/${id}/similar?language=en-US&page=1`;
    const data = await fetchFromTMBD(url);
    console.log(data);
    res.json({ success: true, similar: data.results });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

export const getTvByCategory = async (req, res) => {
  const { category } = req.params;
  try {
    const url = `https://api.themoviedb.org/3/tv/${category}?language=en-US&page=1`;
    const data = await fetchFromTMBD(url);
    res.json({ success: true, content: data.results });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};
