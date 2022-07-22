//The imports
import { initializeApp, cert } from "firebase-admin/app"
import { getFirestore } from "firebase-admin/firestore"

//OLDER VERSION
//const (credentials) = require('./credentials')
import { credentials } from "./credentials.js"

initializeApp({
  credential: cert(credentials),
})

const db = getFirestore()

const car = {
  make: "toyota",
  model: "AE86",
  year: 2018,
  color: "white",
}

db.collection("cars").add(car)
