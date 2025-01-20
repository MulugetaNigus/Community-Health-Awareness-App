import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

export default function HIVScreen() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.title}>አጠቃላይ እይታ</Text>
        <Text style={styles.description}>
          የሰው ልጅ የበሽታ መከላከያ ቫይረስ (ኤችአይቪ) የሰውነትን በሽታ የመከላከል ስርዓት የሚያጠቃ ቫይረስ ነው. የበሽታ መከላከያ እጥረት (ኤድስ) በጣም የላቀ የኢንፌክሽን ደረጃ ላይ ይከሰታል.
          ኤች አይ ቪ የሰውነትን በሽታ የመከላከል ስርዓትን በማዳከም ነጭ የደም ሴሎችን ያነጣጠረ ነው. ይህም እንደ ሳንባ ነቀርሳ፣ ኢንፌክሽኖች እና አንዳንድ ነቀርሳዎች ባሉ በሽታዎች ለመታመም ቀላል ያደርገዋል።
          ኤች አይ ቪ በደም ፣ በጡት ወተት ፣ በወንድ የዘር ፈሳሽ እና በሴት ብልት ፈሳሾችን ጨምሮ በበሽታው ከተያዘ ሰው ከሰውነት ፈሳሾች ይተላለፋል። በመሳም፣ በመተቃቀፍ ወይም በምግብ መጋራት አይሰራጭም። ከእናት ወደ ልጇም ሊተላለፍ ይችላል።
          ኤች አይ ቪን መከላከል እና በፀረ-ኤችአይቪ ህክምና (ART) መከላከል ይቻላል. ያልታከመ ኤችአይቪ ወደ ኤድስ ሊያድግ ይችላል፣ ብዙ ጊዜ ከብዙ አመታት በኋላ።
          WHO አሁን የላቀ የኤችአይቪ በሽታ (ኤኤችዲ) ሲዲ4 ሴል ከ200 ህዋሶች/mm3 ወይም WHO ደረጃ 3 ወይም 4 በአዋቂዎችና በጉርምስና ዕድሜ ላይ እያለ ይገልፃል። ከ 5 ዓመት በታች የሆኑ ህጻናት ከኤችአይቪ ጋር የሚኖሩ ሁሉ ከፍተኛ የኤችአይቪ በሽታ እንዳለባቸው ይቆጠራሉ.
        </Text>
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