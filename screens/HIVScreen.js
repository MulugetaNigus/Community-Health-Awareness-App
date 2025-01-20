import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

export default function HIVScreen() {
  const [content, setContent] = useState({ title: '', description: '' });
  const [isContentFound, setIsContentFound] = useState(false);

  useEffect(() => {
    fetchContent();
  }, []);

  const fetchContent = async () => {
    try {
      const response = await fetch('https://192.168.43.241:5000/api/v1/diseases');
      const data = await response.json();
      const matchedContent = data.find(
        (item) => item.title === 'HIV'
      );

      if (matchedContent) {
        setContent(matchedContent);
        setIsContentFound(true);
      } else {
        setIsContentFound(false);
      }
    } catch (error) {
      console.error('Error fetching content:', error);
      setIsContentFound(false);
    }
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        {isContentFound ? (
          <>
            <Text style={styles.title}>{content.title}</Text>
            <Text style={styles.description}>{content.description}</Text>
          </>
        ) : (
          <Text style={styles.description}>No title and description found!</Text>
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
    fontSize: 18,
    textAlign: 'start',
    color: '#555',
  },
});
