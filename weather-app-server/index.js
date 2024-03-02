const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors({
   origin: ["http://localhost:5173"],
   optionsSuccessStatus: 200
}));

app.use(express.json());

app.post("/weather", async (req, res) => {
   console.log(req.params)
   console.log(req.query)
   try {
      const { city, lat, lon } = req.query;
      let apiUrl = '';

      if (city) {
         apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${process.env.OPENWEATHERMAP_API_KEY}`;
      } else if (lat && lon) {
         apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=${process.env.OPENWEATHERMAP_API_KEY}`;
      } else {
         return res.status(400).json({ message: 'City or latitude and longitude parameters are required.' });
      }

      const result = await fetch(apiUrl);
      const data = await result.json();
      res.json(data);
   } catch (error) {
      console.error('Error fetching weather:', error);
      res.status(500).json({ message: 'Internal Server Error' });
   }
});

app.get("/", (req, res) => {
   res.send("Weather Server is Running");
});

app.listen(port, () => {
   console.log(`Weather Server is Running on Port: ${port}`);
});

