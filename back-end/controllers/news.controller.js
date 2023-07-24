const axios = require("axios");
const API_KEY = process.env.API_KEY;

const getNews = async (req, res) => {
  try {
    const {sports}=req.params
    const axiosRes = await axios.get(
      `https://newsapi.org/v2/everything?q=${sports}&from=2023-07-10&sortBy=publishedAt&apiKey=${API_KEY}&pageSize=6`
    );
    res.status(200).json(axiosRes.data);
  } catch (error) {
    res.status(400).json({ error: "an error occurred" });
  }
};

module.exports = { getNews };
