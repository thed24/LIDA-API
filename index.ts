import * as admin from "firebase-admin";
admin.initializeApp();

import express from "express";
import cors from "cors";

import { RegisterRoutes } from "./build/routes";

const app = express();
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));
app.use(cors());

RegisterRoutes(app);

module.exports.app = app;
