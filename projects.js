// src/components/Projects.js
import React from 'react';

const projects = [
  {
    name: "Ecommerce-Recommendation system",
    description: "Built a machine learning-based recommendation system that suggests products to users based on their browsing behavior, purchase history, and product similarities. Implemented collaborative filtering and content-based filtering techniques to personalize recommendations. The system improves user experience and helps increase product engagement and sales.",
    link: "https://github.com/lakshcity/Ecommerce-recommendation",
  },

  {
    name: "Housing Value Prediction",
    description: "Developed a machine learning model to predict house prices based on various features like location, number of rooms, size, and amenities. Used data preprocessing, feature engineering, and regression algorithms (Linear and Ridge Regression) to build an accurate and efficient model. Aimed at helping buyers and sellers make informed decisions in the real estate market.",
    link: "https://github.com/lakshcity/housing-value",
  },

  {
    name: "Credit-card Fraud Detection",
    description: "Built a machine learning model to detect fraudulent credit card transactions using real-world data. Applied data preprocessing, handled class imbalance with techniques like SMOTE, and used algorithms like Logistic Regression and Random Forest for classification. The model helps in identifying suspicious activities with high accuracy to support secure digital payments..",
    link: "https://github.com/lakshcity/credit-card-fraud-detction",
  },

  {
    name: "Stock Market Prediction",
    description: "Developed a machine learning model to forecast stock prices based on historical market data. Used time series analysis and regression techniques along with libraries like Pandas, NumPy, and scikit-learn. The model helps in analyzing market trends and making data-driven investment decisions.",
    link: "https://github.com/lakshcity/Stock-market-prediction",
  }
  
];

export default function Projects() {
  return (
    <section id="projects">
      <h2>Projects</h2>
      <ul>
        {projects.map((proj, idx) => (
          <li key={idx}>
            <h3>{proj.name}</h3>
            <p>{proj.description}</p>
            <a href={proj.link} target="_blank" rel="noopener noreferrer">View on GitHub</a>
          </li>
        ))}
      </ul>
    </section>
  );
}
