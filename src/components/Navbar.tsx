import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import './Navbar.css';

const Navbar: React.FC = () => {
  const { language, setLanguage, t } = useLanguage();

  return (
    <nav className="navbar">
      <div className="container nav-container">
        <div className="logo">
          <a href="/">Andrew's Corner</a>
        </div>
        
        <ul className="nav-links">
          <li><a href="#about">{t('nav.about')}</a></li>
          <li><a href="#library">{t('nav.library')}</a></li>
          <li><a href="#events">{t('nav.events')}</a></li>
          <li><a href="#contact">{t('nav.contact')}</a></li>
          {language === 'en' && (
            <li><a href="#retreat">{t('nav.retreat')}</a></li>
          )}
        </ul>

        <div className="lang-switcher">
          <button 
            className={language === 'el' ? 'active' : ''} 
            onClick={() => setLanguage('el')}
          >
            ΕΛ
          </button>
          <span>|</span>
          <button 
            className={language === 'en' ? 'active' : ''} 
            onClick={() => setLanguage('en')}
          >
            EN
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
