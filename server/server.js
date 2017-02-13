import express from 'express';
import mongoose from 'mongoose';
import serverConfig from './config';

const app = express();

app.listen(serverConfig.port, (error) => {
  if (!error) {
    console.log("Server is running on port: ${serverConfig.port}!");
  }
});
