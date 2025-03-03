import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { GoogleGenerativeAI } from "@google/generative-ai";

export default function AIAssistanceScreen() {

  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState('');

  // put your google gemini apikey here from your .env
  const genAI = new GoogleGenerativeAI(process.env.GOOGLE_GEMINI_API);
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  const handleSend = async () => {
    if (inputText.trim() === '') return;

    // Simulate user message
    const userMessage = { id: Date.now().toString(), text: inputText, type: 'user' };
    setMessages((prevMessages) => [...prevMessages, userMessage]);
    setInputText('');

    const result = await model.generateContent(inputText);
    console.log(result.response.text());

    // Simulate AI response after a delay
    setTimeout(() => {
      const aiResponse = { id: Date.now().toString(), text: result.response.text(), type: 'ai' };
      setMessages((prevMessages) => [...prevMessages, aiResponse]);
    }, 0);
  };

  const renderItem = ({ item }) => (
    <View style={[styles.messageContainer, item.type === 'user' ? styles.userMessage : styles.aiMessage]}>
      <Text style={styles.messageText}>{item.text}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={messages}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.messagesContainer}
      />
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          value={inputText}
          onChangeText={setInputText}
          placeholder="Type a message"
        />
        <TouchableOpacity onPress={handleSend} style={styles.sendButton}>
          <MaterialIcons name="send" size={24} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  messagesContainer: {
    padding: 16,
  },
  messageContainer: {
    marginBottom: 10,
    padding: 10,
    borderRadius: 8,
    maxWidth: '70%',
  },
  userMessage: {
    alignSelf: 'flex-end',
    backgroundColor: '#4CAF50',
  },
  aiMessage: {
    alignSelf: 'flex-start',
    backgroundColor: '#eeeeee',
  },
  messageText: {
    color: '#000',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderTopWidth: 1,
    borderColor: '#ccc',
  },
  textInput: {
    flex: 1,
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: 10,
    marginRight: 10,
  },
  sendButton: {
    backgroundColor: '#4CAF50',
    padding: 10,
    borderRadius: 20,
  },
});