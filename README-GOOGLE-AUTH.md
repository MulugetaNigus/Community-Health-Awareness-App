# Google Authentication Flow for Expo App

This document provides instructions on how to set up and use the Google authentication flow in your Expo app.

## Features

- **Google Authentication**: Sign in with Google using expo-auth-session
- **Email/Password Authentication**: Simple UI for email/password login and registration
- **Success Page**: Displays user information after successful authentication
- **Persistent Authentication**: User session is persisted using AsyncStorage

## Setup Instructions

### 1. Install Dependencies

The following dependencies have been added to the project:

```bash
npm install expo-auth-session expo-web-browser @react-native-async-storage/async-storage
```

### 2. Configure Google OAuth Credentials

To use Google authentication, you need to create OAuth credentials:

1. Go to the [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select an existing one
3. Navigate to "APIs & Services" > "Credentials"
4. Click "Create Credentials" > "OAuth client ID"
5. Select "Web application" as the application type
6. Add the following authorized redirect URIs:
   - `https://auth.expo.io/@your-expo-username/your-app-slug`
   - For development: `https://localhost:19006`
7. Click "Create"
8. Copy the Client ID

### 3. Update the Google Client ID

Open `src/components/auth/GoogleAuth.js` and replace the placeholder client ID with your actual Google OAuth client ID:

```javascript
const googleClientId = 'YOUR_GOOGLE_CLIENT_ID.apps.googleusercontent.com';
```

### 4. Configure app.json

Add the following to your app.json file:

```json
{
  "expo": {
    "scheme": "your-app-scheme",
    "web": {
      "bundler": "metro"
    }
  }
}
```

## Usage

### Authentication Flow

1. When the app starts, it checks if a user is already logged in
2. If not, it shows the AuthScreen with login/register options
3. Users can sign in with Google or use email/password
4. After successful authentication, users are redirected to the SuccessPage
5. The SuccessPage displays the user's information and a logout button

### Components

- **AuthContext**: Manages authentication state and provides login/logout functions
- **AuthScreen**: UI for email/password login/register and Google authentication
- **GoogleAuth**: Handles Google authentication flow
- **SuccessPage**: Displays user information after successful authentication

## Customization

### Styling

The components use the ThemeProvider for styling. You can customize the appearance by modifying the theme in `src/context/ThemeContext.js`.

### Backend Integration

For a complete authentication system, you would need to:

1. Create a backend API for user registration and authentication
2. Modify the login/register functions in AuthContext to communicate with your API
3. Implement token-based authentication for secure API requests

## Troubleshooting

### Google Authentication Issues

- Make sure your OAuth credentials are correctly configured
- Check that the redirect URIs match your Expo project
- For development, use the Expo Go app or run in a web browser

### Expo Web Browser Issues

If you encounter issues with the web browser not opening:

```javascript
// Add this to the top of your GoogleAuth.js file
WebBrowser.maybeCompleteAuthSession();
```

## Resources

- [Expo Auth Session Documentation](https://docs.expo.dev/versions/latest/sdk/auth-session/)
- [Google OAuth Documentation](https://developers.google.com/identity/protocols/oauth2)
- [React Navigation Documentation](https://reactnavigation.org/docs/getting-started) 