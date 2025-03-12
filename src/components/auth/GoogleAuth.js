import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View, Image } from 'react-native';
import * as WebBrowser from 'expo-web-browser';
import * as AuthSession from 'expo-auth-session';
import { useAuth } from '../../context/AuthContext';

// Register the redirect URI for web browser
WebBrowser.maybeCompleteAuthSession();

// Google OAuth configuration
// Note: In a production app, you would need to create a Google Cloud project
// and configure OAuth credentials
const googleClientId = '437128611586-gjddq3lu2cvmi4427sqpl9vdlsnh17tb.apps.googleusercontent.com';
const redirectUri = AuthSession.makeRedirectUri({
  useProxy: true,
});

const GoogleAuth = () => {
  const { login } = useAuth();

  // Configure the Google authentication request
  const [request, response, promptAsync] = AuthSession.useAuthRequest(
    {
      clientId: googleClientId,
      redirectUri,
      scopes: ['profile', 'email'],
      responseType: 'token',
      prompt: 'select_account',
    },
    {
      authorizationEndpoint: 'https://accounts.google.com/o/oauth2/v2/auth',
    }
  );

  // Handle the authentication response
  React.useEffect(() => {
    if (response?.type === 'success') {
      const { access_token } = response.params;
      
      // Fetch user info using the access token
      const getUserInfo = async () => {
        try {
          const userInfoResponse = await fetch(
            'https://www.googleapis.com/userinfo/v2/me',
            {
              headers: { Authorization: `Bearer ${access_token}` },
            }
          );
          
          const userInfo = await userInfoResponse.json();
          
          // Log the user in with the retrieved user info
          await login({
            id: userInfo.id,
            name: userInfo.name,
            email: userInfo.email,
            picture: userInfo.picture,
            provider: 'google',
          });
        } catch (error) {
          console.error('Error fetching user info:', error);
        }
      };
      
      getUserInfo();
    }
  }, [response, login]);

  // Handle the Google sign-in button press
  const handleGoogleSignIn = async () => {
    try {
      await promptAsync();
    } catch (error) {
      console.error('Google Sign-In Error:', error);
    }
  };

  return (
    <TouchableOpacity
      style={styles.googleButton}
      onPress={handleGoogleSignIn}
      disabled={!request}
    >
      <View style={styles.buttonContent}>
        <Image
          source={require('../../../assets/google-icon.png')}
          style={styles.googleIcon}
        />
        <Text style={styles.buttonText}>Sign in with Google</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  googleButton: {
    backgroundColor: '#ffffff',
    borderRadius: 4,
    padding: 12,
    marginVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#dddddd',
    width: '100%',
  },
  buttonContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  googleIcon: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  buttonText: {
    color: '#757575',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default GoogleAuth; 