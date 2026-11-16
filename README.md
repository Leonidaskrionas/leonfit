# LEONFIT 


LEONFIT is a fitness application built with **React Native, Expo and TypeScript**, designed to bring training plans, workout tracking, nutrition ideas and progress insights into one experience.

## Αpplication

**[Open LEONFIT](https://leonfit-sigma.vercel.app/)**

## Features

- **Personalized onboarding:** A questionnaire captures training goals, experience, preferences and available training space.
- **Adaptive workout plans:** Weekly workouts assembled from a curated exercise library based on user preferences and training context.
- **Workout tracker:** Record completed sets, repetitions, weights and session duration.
- **Progress dashboard:** Review workout history, total sessions, training time and exercise highlights, with weekly, monthly and yearly views.
- **Nutrition ideas:** Browse meal suggestions organized by day and adjust nutrition preferences.
- **AI coach:** An in-app chat experience backed by a Supabase Edge Function and message storage.
- **Account management:** Sign up, log in, reset passwords and update profile details using Supabase Authentication.
- **Profile customization:** Edit training plans, nutrition preferences and profile image.
- **Appearance settings:** Switch between dark and light themes.

## Tech stack

| Area | Technology |
| --- | --- |
| Application | React Native, React 19, Expo 58 |
| Language | TypeScript |
| Web support | React Native Web |
| Authentication and backend | Supabase |
| Icons | Lucide React Native, Expo Vector Icons |
| Graphics | React Native SVG |
| Image selection | Expo Image Picker |

## Getting started

### Requirements

- Node.js and npm
- Expo-compatible development environment
- A configured Supabase project

### Installation

```bash
git clone https://github.com/Leonidaskrionas/leonfit.git
cd leonfit
npm install
```

Configure the local `supabase` module referenced by `App.tsx` with your project's public Supabase URL and publishable/anon key. Do not commit secret or service-role keys.

### Run locally

```bash
npm run web
```

For other supported environments:

```bash
npm run android
npm run ios
```

### Export the web app

```bash
npm run build:web
```

This command uses the project's `scripts/prepare-pwa.mjs` script, which must be present in the repository.

## Backend notes

The app uses Supabase Authentication and stores user profile data in authentication user metadata. The AI coach calls the `leonfit-ai-coach` Edge Function and uses the `ai_coach_messages` table. Profile photos use the `avatars` storage bucket. These backend resources and their access policies must be configured in the target Supabase project.

## Project status

LEONFIT is an actively developed project. Platform compatibility and backend configuration should be tested in each deployment environment before production use.

## Disclaimer

LEONFIT provides general fitness guidance and meal ideas. It is not a substitute for individualized medical or nutrition advice.
