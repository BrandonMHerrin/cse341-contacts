import dotenv from 'dotenv';

dotenv.config();

const config = {
  mongo: {
    username: process.env.MONGO_USERNAME,
    password: process.env.MONGO_PWD,
    url: `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PWD}@cluster0.t2lyu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`,
    dbName: "contacts",
  },
  server: {
    port: process.env.PORT || 8080,
  },
};

export default config;