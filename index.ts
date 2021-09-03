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
app.use(cors({ origin: true }));
app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  next();
});

RegisterRoutes(app);

module.exports.app = app;
