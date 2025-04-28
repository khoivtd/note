# React Native Notes App

This is a React Native app implemented with MVVM design patterns using React Hooks and TypeScript. It uses the following libraries:

- Expo 52.0.46
- React 18.3.1
- React Native 0.76.9
- TypeScript 5.8.3
- @react-navigation/bottom-tabs
- @react-navigation/native
- @react-navigation/native-stack
- @shopify/flash-list
- @tanstack/react-query
- react-native-safe-area-context
- react-native-screens

## Features

- Bottom tab navigation with Home, Summary, Settings, and New Note pages
- Home page displays categories with latest 3 notes each
- New Note page allows adding notes with category selection and content limit
- Summary page shows number of notes per category
- Delete all notes button clears cache and updates UI
- Notes can be opened in default browser via links

## Project Structure

- /src
  - /models: Data models (Note)
  - /viewmodels: Business logic and state management using React Hooks and react-query
  - /views: React Native components and screens
  - /navigation: Navigation setup with bottom tabs and native stack
  - /services: Services for data persistence and utilities
  - /utils: Helper functions

## Setup

1. Install dependencies:
```
yarn
```

2. Run the app:
```
yarn start
# or
yarn android
# or
yarn ios
# or
yarn web
```

## Notes

- Uses react-query for caching notes data
- Uses FlashList for efficient list rendering
- Uses SafeAreaProvider and Screens for better UX
