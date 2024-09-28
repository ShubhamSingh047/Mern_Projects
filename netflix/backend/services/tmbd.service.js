import axios from "axios";

export const fetchFromTMBD = async (url) => {
  const options = {
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyOTkwMjBiNTk1OTY3YTcwNTE0ZWVlZTUwYmE1OTE3NSIsIm5iZiI6MTcyNzQ0MjIwMy42MzYzOTQsInN1YiI6IjYwYmVhZjI2ZjVjODI0MDA0MDVhYjc0MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.zjDusm-GbKg_N-kVnPYLLNo93VWvxc-mNIMumXvBK64",
    },
  };

  const response = await axios.get(url, options);
  if (response.status !== 200) {
    throw new Error("Failed to fetch from TMBD! " + response.statusText);
  }

  return response.data;
};
