const admin = require("firebase-admin");
const serviceAccount = require("./serviceAccountKey.json");

console.log("1. Firebase Admin loading...");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

console.log("2. Firebase initialized");

const db = admin.firestore();

console.log("3. Firestore ready");

const { articles } = require("./data.js");

console.log("4. Articles loaded:", articles.length);

async function uploadArticles() {
  try {
    const collectionRef = db.collection("articles");

    console.log("5. Starting upload...");

    for (const article of articles) {
      const ref = await collectionRef.add(article);
      console.log("Uploaded:", article.title, "=>", ref.id);
    }

    console.log("DONE: All uploaded successfully");
  } catch (err) {
    console.error("🔥 ERROR:", err);
  }
}

uploadArticles();
