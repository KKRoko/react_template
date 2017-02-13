const config = {
  mongoURL: process.env.MONGO_URL || 'mongodb://localhost:27017/mern',
  port: process.env.PORT || 8080,
  jwtSecret: "secret phase"
}

export default config;
