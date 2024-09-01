# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# React AutoComplete 

# Overview
The AutoComplete component is a React-based component that provides auto-complete functionality by filtering user names from an API based on user input. It uses Vite for fast development and efficient builds.

# Setup
This project utilizes React with Vite to enhance development speed and performance.

# React
- React: A JavaScript library for building user interfaces.
Vite
- Vite: A modern build tool providing fast development with Hot Module Replacement (HMR).
Plugins
- @vitejs/plugin-react: Uses Babel for Fast Refresh to apply changes immediately without a full page reload.
- @vitejs/plugin-react-swc: Uses SWC for Fast Refresh, offering a faster alternative to Babel.
  
# Component: AutoComplete
# Description
The AutoComplete component fetches user data from an API and filters results based on the user's input, displaying matching user names.

# Features
- Fetch Data: Retrieves user data from a remote API.
- Search Filter: Filters user names according to the input text.
- Dynamic Display: Updates the list of users dynamically as the input changes.

# API Used
- API Endpoint: https://dummyjson.com/users
- Purpose: Provides a list of users with various details, including first names.
- Response Format: An array of user objects, each containing a firstName field.
  
# How It Works
1. Fetching Data: The component uses axios to make a GET request to the API to retrieve user data.
2. Filtering Data: It filters the user list based on the search parameter and updates the displayed results.
3. Rendering: Renders a search input field and a list of user names that match the search criteria.
   
# Dependencies
- React: For building the UI.
- Axios: For making HTTP requests.
- Material UI: For styling components (Box, TextField, Typography).
  
# Acknowledgements
- React: For the core library.
- Vite: For the build tool.
- Axios: For HTTP requests.
- Material UI: For UI components.
