import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import axios from 'axios';

export default function TBScreen() {

  // make a get req to the backend to get the content with title using axios GET Req
  
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.title}>አጠቃላይ እይታ (TB)</Text>
        <Text style={styles.description}>
          ሳንባ ነቀርሳ (ቲቢ) በባክቴሪያ የሚከሰት ተላላፊ በሽታ ሲሆን ብዙውን ጊዜ በሳንባዎች ላይ ተጽዕኖ ያሳድራል። ቲቢ ያለባቸው ሰዎች ሲያስሉ፣ ሲያስነጥሱ ወይም ሲተፉ በአየር ይተላለፋል።
          የሳንባ ነቀርሳ በሽታ መከላከል እና ማዳን ይቻላል.
          ከአለም ህዝብ ሩብ ያህሉ በቲቢ ባክቴሪያ እንደተያዙ ይገመታል። ከ5-10% ያህሉ በቲቢ የተያዙ ሰዎች በመጨረሻ ምልክቶች ይታዩና የቲቢ በሽታ ይያዛሉ።
          በበሽታው የተያዙ ግን ከበሽታ ነፃ የሆኑ ሰዎች ሊያስተላልፉ አይችሉም። የቲቢ በሽታ በአብዛኛው በኣንቲባዮቲክ የሚታከም ሲሆን ያለ ህክምናም ለሞት ሊዳርግ ይችላል።
          በተወሰኑ አገሮች የቲቢ በሽታን ለመከላከል የ Bacille Calmette-Guérin (BCG) ክትባት ለሕፃናት ወይም ለትንንሽ ልጆች ይሰጣል። ክትባቱ በቲቢ ሞትን ይከላከላል እና ህፃናትን ከከባድ የቲቢ ዓይነቶች ይከላከላል.
          አንዳንድ ሁኔታዎች አንድን ሰው ለቲቢ በሽታ ሊያጋልጥ ይችላል፡-
          የስኳር በሽታ (ከፍተኛ የደም ስኳር)
          የተዳከመ የበሽታ መቋቋም ስርዓት (ለምሳሌ ከኤችአይቪ ወይም ኤድስ)
          የተመጣጠነ ምግብ እጥረት
          የትምባሆ አጠቃቀም
          ጎጂ የአልኮል አጠቃቀም.
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
  title2: {
    marginTop: 28,
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    textAlign: 'start',
    color: '#555',
  },
});