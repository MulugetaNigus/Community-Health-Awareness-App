import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import axios from 'axios';

export default function TBScreen() {

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    axios.get('http://192.168.43.241:5000/api/v1/diseases')
      .then(response => {
        // Filter the data to find the matching title
        const tbData = response.data.find(item => item.title === 'TB');
        if (tbData) {
          setTitle(tbData.title);
          setDescription(tbData.description);
          setError('');
        } else {
          setTitle('');
          setDescription('');
          setError('No title and description found!');
        }
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setError('Failed to fetch data.');
      });
  }, []);

  return (
    <ScrollView>
      <View style={styles.container}>
        {error ? (
          <Text style={styles.error}>{error}</Text>
        ) : (
          <>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.description}>{description}</Text>
          </>
        )}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'start',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    textAlign: 'start',
    color: '#555',
  },
  error: {
    fontSize: 16,
    color: 'red',
    textAlign: 'center',
  },
});
