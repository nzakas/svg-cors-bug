# svg-cors-bug

This project demonstrates SVG CORS behavior when loading external images with the `crossorigin="anonymous"` attribute.

## Setup

Install dependencies:
```bash
npm install
```

## Running

Start both servers (image server on port 3000 and HTML server on port 8080):
```bash
npm start
```

Then open your browser to http://localhost:8080/index.html

## What it does

1. **Image Server (port 3000)**: Serves a placeholder image from `/favicon` endpoint
   - Returns 403 Forbidden if there's no Origin header
   - Returns the image with CORS headers if Origin is present

2. **HTML Server (port 8080)**: Serves the `index.html` file that contains:
   - A static SVG with an `<image>` element using `crossorigin="anonymous"`
   - A button that dynamically inserts the same SVG code using innerHTML

## Testing

1. The static SVG should load the image successfully
2. Click the "Insert SVG Dynamically" button to insert the same SVG code dynamically
3. Observe the behavior in both cases
