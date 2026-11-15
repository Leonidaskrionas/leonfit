# LEONFIT — Phase 1

## Mac setup
1. Install Node.js LTS and VS Code.
2. Open Terminal in this folder.
3. Run `npm install`.
4. Run `npx expo start`.
5. Scan the QR code with Expo Go on your phone (same Wi-Fi). If networking fails, try `npx expo start --tunnel`.

## Important limitations
This is a local UI prototype, **not secure authentication**. The signup password is not stored or verified; login only checks a locally stored email. Only one local profile per installation is supported. Do not use real sensitive data. Replace with Supabase Auth and secure server-side access controls before publishing or inviting users. Workout completion button currently records a day, not a verified workout. Nutrition and personalized training generation are not yet implemented.
