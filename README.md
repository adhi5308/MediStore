# MediStore starter

Starter project for a pharmacy inventory management app using HTML/CSS/vanilla JavaScript, Node.js/Express, and MongoDB Atlas with Mongoose.

## Setup
1. Extract this ZIP and open the `MediStore` folder in VS Code.
2. In Terminal, enter the backend directory: `cd ~/MediStore/backend` (adjust if you extracted elsewhere).
3. Install dependencies: `npm install`
4. Create your environment file: `cp .env.example .env`
5. Edit `backend/.env` and replace the sample `MONGODB_URI` with your real MongoDB Atlas connection string. Keep it private.
6. Start the server: `npm run dev`
7. Visit http://localhost:5000/api/health to check the API/database, then http://localhost:5000 to view the starter page.

## Security
- Keep `backend/.env` private; it is ignored by Git.
- Never put the MongoDB URI in frontend JavaScript.
- This is a setup starter, not the complete inventory system yet.
# MediStore
