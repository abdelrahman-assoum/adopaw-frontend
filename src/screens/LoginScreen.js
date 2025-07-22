import React, { useState, useRef, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  Linking,
} from 'react-native';
import { supabase } from '../config/supabase';

const LoginScreen = ({ navigation, onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Track mounted state
  const isMounted = useRef(true);

  useEffect(() => {
    return () => {
      isMounted.current = false;
    };
  }, []);

  const handleEmailLogin = async () => {
    console.log('clicked login');
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) {
      console.error('Login Error:', error);
      if (isMounted.current) Alert.alert('Login Error', error.message);
    } else {
      console.log('Login Response Data:', data);
     
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      // This generates the OAuth URL for Google sign-in with redirect back to your app
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo: 'adopaw://auth', // replace with your actual app deep link URL
        },
      });

      if (error) {
        Alert.alert('Error', error.message);
        return;
      }

      // Open the Supabase-hosted Google sign-in page in the user's browser
      if (data?.url) {
        Linking.openURL(data.url);
      } else {
        Alert.alert('Error', 'No URL returned from Supabase');
      }
    } catch (err) {
      Alert.alert('Error', err.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome Back 👋</Text>

      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
        style={styles.input}
      />

      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={styles.input}
      />

      <TouchableOpacity style={styles.button} onPress={handleEmailLogin}>
        <Text style={styles.buttonText}>Sign In</Text>
      </TouchableOpacity>

      <Text style={styles.or}>or</Text>

      <TouchableOpacity
        style={styles.googleButton}
        onPress={handleGoogleSignIn}
      >
        <Text style={styles.googleButtonText}>Sign In with Google</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
        <Text style={styles.link}>Don't have an account? Sign up</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 26,
    marginBottom: 24,
    fontWeight: '600',
    textAlign: 'center',
  },
  input: {
    height: 48,
    borderColor: '#ccc',
    borderWidth: 1,
    paddingHorizontal: 12,
    marginBottom: 16,
    borderRadius: 6,
  },
  button: {
    backgroundColor: '#007AFF',
    paddingVertical: 14,
    borderRadius: 6,
    marginBottom: 16,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: '500',
    fontSize: 16,
  },
  or: {
    textAlign: 'center',
    color: '#888',
    marginVertical: 8,
  },
  googleButton: {
    backgroundColor: '#fff',
    paddingVertical: 14,
    borderRadius: 6,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 16,
  },
  googleButtonText: {
    textAlign: 'center',
    fontSize: 16,
    color: '#000',
  },
  link: {
    color: '#007AFF',
    textAlign: 'center',
    marginTop: 16,
  },
});
