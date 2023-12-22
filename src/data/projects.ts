import MERNImage from "../assets/images/MERN_budget.png";
import recipesImage from "../assets/images/recipes.png";
import weatherImage from "../assets/images/weatherpulse.png";

export const projects = [
  {
    title: "WeatherPulse",
    image: weatherImage,
    description:
      "A simple weather forecast app that uses the open source weather API Open-Meteo to gather global forecasting data and present it in a user friendly interface.",
    github_url: "https://github.com/snguyen56/WeatherPulse",
    project_url: "https://snguyen56.github.io/WeatherPulse/",
  },
  {
    title: "NextJS Recipe Website",
    image: recipesImage,
    description:
      "A recipe website using the NextJS framework (v12) for the frontend and the Contentful CMS (content management system) to store the recipe data.",
    github_url: "https://github.com/snguyen56/recipes",
    project_url: "https://recipes-umber.vercel.app/",
  },
  {
    title: "MERN Budget Website",
    image: MERNImage,
    description:
      "A fullstack budget app created using the MERN stack (MongoDB, ExpressJS, React, NodeJS). The app allows you to set budgets and tracks income/expenses.",
    github_url: "https://github.com/snguyen56/MERN-budget",
  },
];
