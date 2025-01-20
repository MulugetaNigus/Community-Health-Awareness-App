import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

export default function MalariaScreen() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.title}>አጠቃላይ እይታ የወባ በሽታ</Text>
        <Text style={styles.description}>
          በአንዳንድ የወባ ትንኞች ወደ ሰዎች የሚተላለፍ ለሕይወት አስጊ የሆነ በሽታ ነው። በአብዛኛው በሞቃታማ አገሮች ውስጥ ይገኛል. መከላከል እና ሊታከም የሚችል ነው. ኢንፌክሽኑ የሚከሰተው በፓራሳይት ነው እና ከሰው ወደ ሰው አይዛመትም. ምልክቶቹ ቀላል ወይም ለሕይወት አስጊ ሊሆኑ ይችላሉ. ቀላል ምልክቶች ትኩሳት, ብርድ ብርድ ማለት እና ራስ ምታት ናቸው. ከባድ ምልክቶች ድካም, ግራ መጋባት, መናድ እና የመተንፈስ ችግር ያካትታሉ. ጨቅላ ሕፃናት ፣ ከ 5 ዓመት በታች የሆኑ ሕፃናት ፣ እርጉዝ ሴቶች እና ልጃገረዶች ፣ ተጓዦች እና ኤችአይቪ ወይም ኤድስ ያለባቸው ሰዎች ለከባድ ኢንፌክሽን የመጋለጥ እድላቸው ከፍተኛ ነው። የወባ ትንኝ ንክሻዎችን በማስወገድ እና በመድሃኒት መከላከል ይቻላል. ሕክምናዎች መለስተኛ ጉዳዮችን እየባሱ እንዳይሄዱ ሊያቆሙ ይችላሉ። ወባ በአብዛኛው ወደ ሰዎች የሚተላለፈው በአንዳንድ የተጠቁ ሴት አኖፌሌስ ትንኞች ንክሻ ነው። ደም መውሰድ እና የተበከሉ መርፌዎች ወባን ሊያስተላልፉ ይችላሉ. የመጀመሪያዎቹ ምልክቶች ቀላል ሊሆኑ ይችላሉ, ከብዙ ትኩሳት በሽታዎች ጋር ተመሳሳይነት ያላቸው እና እንደ ወባ ለመለየት አስቸጋሪ ናቸው. ህክምና ሳይደረግለት ቀርቷል ፣ P. Falciparum ወባ በ 24 ሰአት ውስጥ ወደ ከባድ ህመም እና ሞት ሊሸጋገር ይችላል። በሰዎች ላይ የወባ በሽታን የሚያስከትሉ 5 የፕላዝሞዲየም ጥገኛ ዝርያዎች አሉ እና ከእነዚህ ዝርያዎች ውስጥ 2 - P. Falciparum እና P. Vivax - ትልቁን ስጋት ይፈጥራሉ. P. Falciparum በጣም ገዳይ የወባ ጥገኛ እና በአፍሪካ አህጉር ውስጥ በጣም የተስፋፋ ነው። P. Vivax ከሰሃራ በታች ካሉ የአፍሪካ ሀገራት ውጭ በአብዛኛዎቹ ሀገራት ዋነኛው የወባ ጥገኛ ነው። ሰዎችን ሊበክሉ የሚችሉ ሌሎች የወባ ዝርያዎች P. Malariae, P. Ovale እና P. Knowlesi ናቸው.
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
    fontSize: 18,
    textAlign: 'start',
    color: '#555',
  },
});