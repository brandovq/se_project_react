# WTWR — What to Wear?

Your personal digital wardrobe assistant. WTWR is a smart clothing recommendation application that leverages real-time weather data to help you curate outfits tailored to current atmospheric conditions.

## About the project (React + Vite)

The idea of the application is pretty simple - we make a call to an API, which then responds with the daily weather forecast. We collect the weather data, process it, and then based on the forecast, we recommend suitable clothing to the user.

## 🌟 Project Overview

WTWR streamlines the daily wardrobe decision-making process by integrating weather forecasting with a personalized clothing collection management system. The application fetches live weather data, analyzes temperature and conditions, and intelligently suggests clothing items from your collection that align with the forecast.

Built with React and Vite for optimal performance and developer experience, WTWR combines responsive UI design with a backend infrastructure to deliver a seamless user experience.

## ✨ Key Features

- **Real-Time Weather Integration**: Fetches current weather data and displays temperature in both Celsius and Fahrenheit
- **Smart Clothing Recommendations**: Suggests wardrobe items based on weather conditions and temperature ranges
- **Personal Wardrobe Management**: Add, view, edit, and delete clothing items with image URLs and weather classifications
- **Dynamic Theme System**: Automatic day/night theme switching based on lighting conditions
- **Responsive Design**: Fully optimized for desktop and mobile devices
- **Temperature Unit Toggle**: Switch between Celsius and Fahrenheit with persistent state management
- **Modal-Based Workflows**: Clean, intuitive modals for adding new items and previewing your collection
- **Local Data Persistence**: JSON Server backend for reliable item storage and retrieval

## 🛠 Technology Stack

- **Frontend Framework**: React 18
- **Build Tool**: Vite
- **Styling**: CSS3 with modern layout techniques
- **State Management**: React Hooks (useState, useContext, useEffect)
- **Backend**: JSON Server (for local development and prototyping)
- **Routing**: React Router v6
- **Code Quality**: ESLint with modern JavaScript standards

## 📦 Installation & Setup

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn package manager

### Getting Started

1. **Clone or download the repository**

   ```bash
   cd se_project_react
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Install JSON Server globally** (for backend API)

   ```bash
   npm install -g json-server
   ```

4. **Start the development environment**

   In one terminal, start the Vite development server:

   ```bash
   npm run dev
   ```

   In another terminal, start the JSON Server:

   ```bash
   json-server --watch db.json --port 3001
   ```

## 📁 Project Structure (Quick short overview)

```
src/
├── components/          # React components
│   ├── App/            # Main application component
│   ├── Header/         # Navigation and title
│   ├── Main/           # Primary content area
│   ├── WeatherCard/    # Weather display component
│   ├── ItemCard/       # Individual clothing item card
│   ├── ClothesSection/ # Clothing collection display
│   ├── Profile/        # User profile and wardrobe management
│   ├── Modals/         # Reusable modal components
│   │   ├── AddItemModal/
│   │   ├── ItemModal/
│   │   ├── ConfirmDeleteModal/
│   │   └── ModalWithForm/
│   ├── ToggleSwitch/   # Temperature unit toggle
│   ├── Footer/         # Application footer
│   └── SideBar/        # Profile sidebar
├── hooks/              # Custom React hooks
│   ├── useForm.js      # Form state management
│   └── useModalClose.js # Modal lifecycle handling
├── contexts/           # React Context API
│   └── CurrentTemperatureUnitContext.jsx
├── utils/              # Utility functions
│   ├── api.js          # Backend API calls
│   ├── weatherApi.js   # Weather API integration
│   └── constants.js    # Application constants
├── assets/             # Images and static media
└── vendor/             # Third-party libraries
```

## 🚀 Scripts

- `npm run dev` — Start the Vite development server with hot module replacement
- `npm run build` — Build the application for production
- `npm run preview` — Preview production build locally
- `npm run lint` — Run ESLint to check code quality

## 🌐 API Integration

### Weather API

The application integrates with a weather service to retrieve:

- Current temperature
- Weather conditions (sunny, rainy, cloudy, etc.)
- Day/night indicator
- Location-based forecasts

### JSON Server (Local Backend)

Handles CRUD operations for clothing items:

- **GET** `/items` — Retrieve all wardrobe items
- **POST** `/items` — Add new clothing item
- **DELETE** `/items/{id}` — Remove item from wardrobe

## 🎨 Features in Detail

### Weather-Based Recommendations

Items are tagged with weather types (hot, warm, cool, cold) to ensure contextual suggestions. The app analyzes current conditions and displays matching pieces from your collection.

### Wardrobe Management

Organize your clothing with custom names, weather classifications, and image references. Build a comprehensive digital wardrobe that grows with your collection.

### Intuitive Modal System

Non-intrusive modal dialogs guide users through adding new items, previewing selections, and confirming destructive actions.

## 📋 State Management

The application utilizes React Context API and custom hooks to manage:

- Global weather data
- Temperature unit preferences
- Active modal states
- Clothing item collection
- Selected items for preview/deletion

## 🔍 Design Reference

The UI design is based on a comprehensive Figma prototype:

- [View Design on Figma](https://www.figma.com/file/DTojSwldenF9UPKQZd6RRb/Sprint-10%3A-WTWR)

## 💡 Development Practices

- Component-based architecture for reusability and maintainability
- Semantic HTML for accessibility
- Responsive CSS Grid and Flexbox layouts
- Error handling with try-catch and fallback UI states
- Modular utility functions for API calls and data processing

## 🎯 Future Enhancements

Potential features for future iterations:

- Weather alerts and notifications
- Outfit history and favorites
- Social sharing capabilities
- Integration with calendar for planned outfits
- Machine learning for personalized recommendations
- Cloud storage for wardrobe sync across devices
