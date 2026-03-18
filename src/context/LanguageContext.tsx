import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'el' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  el: {
    'nav.home': 'Αρχική',
    'nav.about': 'Ποιοι Είμαστε',
    'nav.library': 'Βιβλιοθήκη',
    'nav.events': 'Εκδηλώσεις & Ωράριο',
    'nav.retreat': 'Πληροφορίες Retreat',
    'nav.contact': 'Επικοινωνία',
    'nav.donate': 'Δωρεά',
    'footer.address': 'Θεσσαλονίκη, Ελλάδα',
    'contact.title': 'Επικοινωνήστε μαζί μας',
    'contact.name': 'Ονοματεπώνυμο',
    'contact.email': 'Email',
    'contact.message': 'Μήνυμα',
    'contact.send': 'Αποστολή',
    'home.welcome': 'Καλώς ήρθατε στο Andrew\'s Corner',
    'home.tagline': 'Ένας χώρος για κοινότητα, συζήτηση και σύνδεση στην καρδιά της Θεσσαλονίκης.',
    'library.title': 'Η Βιβλιοθήκη μας',
    'events.title': 'Εκδηλώσεις & Ωράριο Λειτουργίας',
    'retreat.title': 'Retreat & Σαββατοκύριακα',
  },
  en: {
    'nav.home': 'Home',
    'nav.about': 'Who We Are',
    'nav.library': 'Library Catalog',
    'nav.events': 'Events & Hours',
    'nav.retreat': 'Retreat / Sabbatical',
    'nav.contact': 'Contact',
    'nav.donate': 'Give',
    'footer.address': 'Thessaloniki, Greece',
    'contact.title': 'Contact Us',
    'contact.name': 'Full Name',
    'contact.email': 'Email',
    'contact.message': 'Message',
    'contact.send': 'Send Message',
    'home.welcome': 'Welcome to Andrew\'s Corner',
    'home.tagline': 'A warm space for community, shared meals, and conversation in Thessaloniki.',
    'library.title': 'Library Catalog',
    'events.title': 'Events & Opening Hours',
    'retreat.title': 'Retreat & Sabbatical Information',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('el');

  const t = (key: string) => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
