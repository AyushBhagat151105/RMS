import swaggerAutogen from "swagger-autogen";
import "dotenv/config";

const doc = {
  info: {
    title: "RMS Backend",
    description: "Description",
  },
  host: process.env.BASEURL,
};

const outputFile = "./swagger-output.json";
const routes = ["./app.ts"];

swaggerAutogen({ openapi: "3.0.0" })(outputFile, routes, doc);
