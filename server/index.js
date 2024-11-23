const express = require("express");
const { google } = require("googleapis");
const bodyParser = require("body-parser");
const fs = require("fs");
const path = require("path");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;
const cors = require("cors");

// Allow requests from your frontend origin
app.use(cors({ origin: "http://localhost:3000" }));

// Load credentials
const CREDENTIALS = JSON.parse(
  fs.readFileSync(path.join(__dirname, "credentials.json"))
);
const { client_id, client_secret, redirect_uris } = CREDENTIALS.web;

// Initialize OAuth2 client
const oauth2Client = new google.auth.OAuth2(
  client_id,
  client_secret,
  redirect_uris[0]
);

// Middleware
app.use(bodyParser.json());

// Step 1: Generate Auth URL
app.get("/auth", (req, res) => {
  const scopes = [
    "https://www.googleapis.com/auth/calendar",
    "https://www.googleapis.com/auth/calendar.events",
  ];

  const authUrl = oauth2Client.generateAuthUrl({
    access_type: "offline",
    scope: scopes,
  });

  res.send({ authUrl });
});

// Step 2: Handle OAuth2 callback
app.get("/oauth2callback", async (req, res) => {
  const code = req.query.code;

  if (!code) {
    return res.status(400).send("Authorization code not found.");
  }

  try {
    const { tokens } = await oauth2Client.getToken(code);
    oauth2Client.setCredentials(tokens);

    // Save tokens for future use
    fs.writeFileSync(
      path.join(__dirname, "tokens.json"),
      JSON.stringify(tokens)
    );

    res.send("Authentication successful! You can close this window.");
  } catch (error) {
    console.error("Error retrieving tokens:", error);
    res.status(500).send("Authentication failed.");
  }
});

// Step 3: Fetch available slots
app.post("/get-available-slots", async (req, res) => {
  const { startDate, endDate } = req.body;

  try {
    const calendar = google.calendar({ version: "v3", auth: oauth2Client });

    // Get events from the calendar
    const events = await calendar.events.list({
      calendarId: "primary",
      timeMin: startDate,
      timeMax: endDate,
      singleEvents: true,
      orderBy: "startTime",
    });

    const busySlots = events.data.items.map((event) => ({
      start: event.start.dateTime || event.start.date,
      end: event.end.dateTime || event.end.date,
    }));

    // Generate all possible 1-hour slots
    const start = new Date(startDate);
    const end = new Date(endDate);
    const freeSlots = [];

    while (start < end) {
      const slotStart = new Date(start);
      const slotEnd = new Date(start);
      slotEnd.setHours(slotEnd.getHours() + 1);

      // Check if the slot overlaps with any busy slot
      const isBusy = busySlots.some(
        (busy) =>
          (slotStart >= new Date(busy.start) && slotStart < new Date(busy.end)) ||
          (slotEnd > new Date(busy.start) && slotEnd <= new Date(busy.end))
      );

      if (!isBusy) {
        freeSlots.push({ start: slotStart.toISOString(), end: slotEnd.toISOString() });
      }

      start.setHours(start.getHours() + 1);
    }

    res.json({ freeSlots });
  } catch (error) {
    console.error("Error fetching available slots:", error);
    res.status(500).send("Failed to fetch available slots.");
  }
});

// Step 4: Create a Calendar Event
app.post("/pricing", async (req, res) => {
  const { summary, description, location, startDateTime, endDateTime } = req.body;

  try {
    const calendar = google.calendar({ version: "v3", auth: oauth2Client });

    const event = {
      summary,
      description,
      location,
      start: { dateTime: startDateTime, timeZone: "Europe/Paris" },
      end: { dateTime: endDateTime, timeZone: "Europe/Paris" },
    };

    const response = await calendar.events.insert({
      calendarId: "primary",
      resource: event,
    });

    res.status(201).json({ message: "Event created successfully!", event: response.data });
  } catch (error) {
    console.error("Error creating event:", error);
    res.status(500).json({ message: "Failed to create event." });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});