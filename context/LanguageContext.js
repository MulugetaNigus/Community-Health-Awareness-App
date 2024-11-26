import React, { createContext, useState, useContext } from 'react';

export const translations = {
  en: {
    // Navigation
    home: 'Home',
    prayer: 'Prayer',
    events: 'Events',
    community: 'Community',
    
    // Home Screen
    prayerTitle: 'Prayer',
    eventsTitle: 'Events',
    communityTitle: 'Community',
    prayerDescription: 'Daily prayers and devotionals',
    eventsDescription: 'Upcoming church events',
    communityDescription: 'Connect with our community',
    
    // Drawer
    drawerTitle: 'Ethiopian Orthodox Church',
    developedBy: 'Developed By Mereja Kfl',
    
    // Search
    search: 'Search...',
    noResults: 'No results found',
  },
  am: {
    // Navigation
    home: 'መነሻ',
    prayer: 'ጸሎት',
    events: 'ዝግጅቶች',
    community: 'ማህበረሰብ',
    
    // Home Screen
    prayerTitle: 'ጸሎት',
    eventsTitle: 'ዝግጅቶች',
    communityTitle: 'ማህበረሰብ',
    prayerDescription: 'የዕለት ጸሎቶች እና ንባቦች',
    eventsDescription: 'የቀጣይ የቤተክርስቲያን ዝግጅቶች',
    communityDescription: 'ከማህበረሰባችን ጋር ይገናኙ',
    
    // Drawer
    drawerTitle: 'የኢትዮጵያ ኦርቶዶክስ ተዋሕዶ ቤተ ክርስቲያን',
    developedBy: 'በመረጃ ክፍል የተዘጋጀ',
    
    // Search
    search: 'ፈልግ...',
    noResults: 'ምንም ውጤት አልተገኘም',
  },
};

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en');

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'am' : 'en');
  };

  const t = (key) => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
