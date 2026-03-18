import React from 'react';
import { LanguageProvider, useLanguage } from './context/LanguageContext';
import Navbar from './components/Navbar';
import './styles/variables.css';
import hoursData from './data/hours.json';
import eventsData from './data/events.json';
import aboutData from './data/about.json';
import retreatData from './data/retreat.json';

const Home: React.FC = () => {
  const { language, t } = useLanguage();
  const hours = (hoursData as any)[language];
  const events = (eventsData as any)[language];
  const about = (aboutData as any)[language];
  const retreat = retreatData.en; // English only as per requirement

  const contactInfo = {
    address: "Spartis 12, Thessaloniki 54640, Greece",
    email: "StAndrewsCorner@gmail.com",
    phone: "2310832265",
    instagram: "andrewscorner.skg"
  };

  return (
    <div className="app">
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <section className="hero container">
          <h1>{t('home.welcome')}</h1>
          <p className="tagline">{t('home.tagline')}</p>
        </section>

        {/* Who We Are */}
        <section id="about" className="container about-section">
          <h2>{about.who_title}</h2>
          {about.who_paragraphs.map((p: string, i: number) => <p key={i} className="content-p">{p}</p>)}
          
          <div className="vision-box">
             <h2>{about.why_title}</h2>
             {about.why_paragraphs.map((p: string, i: number) => <p key={i} className="content-p">{p}</p>)}
          </div>

          <div className="institute-box">
             <h2>{about.institute_title}</h2>
             {about.institute_paragraphs.map((p: string, i: number) => <p key={i} className="content-p">{p}</p>)}
          </div>
        </section>

        {/* Events & Hours */}
        <section id="events" className="container grid">
          <div className="events-box">
            <h2>{t('events.title')}</h2>
            <div className="events-list">
              {events.map((event: any, i: number) => (
                <div key={i} className="event-card">
                  <h3>{event.title}</h3>
                  <p className="date">{event.date}</p>
                  <p>{event.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="hours-box">
            <h3>{language === 'el' ? 'Ωράριο' : 'Opening Hours'}</h3>
            <table className="hours-table">
              <tbody>
                {hours.map((row: any, i: number) => (
                  <tr key={i}>
                    <td>{row.day}</td>
                    <td>{row.hours}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section id="library" className="container">
          <h2>{t('library.title')}</h2>

          <div className="library-box">
            <div className="iframe-container">
              <div className="iframe-placeholder">
                <p>Library Catalog Embedded Here (30,000+ volumes)</p>
              </div>
            </div>
          </div>
        </section>

        {/* English Only Section: Retreat & GiveButter */}
        {language === 'en' && (
          <>
            <section id="retreat" className="container retreat-section">
              <div className="retreat-card">
                <h2>{retreat.title}</h2>
                {retreat.paragraphs.map((p: string, i: number) => <p key={i} className="content-p">{p}</p>)}
              </div>
            </section>
            
            <section className="container donation-section">
              <h2>Support Our Work</h2>
              <p>If you'd like to support the community space, you can donate via GiveButter.</p>
              <div className="givebutter-placeholder">
                <p>GiveButter Widget / Button</p>
              </div>
            </section>
          </>
        )}

        {/* Contact Form & Info */}
        <section id="contact" className="container contact-section grid">
          <div className="contact-form-side">
            <h2>{t('contact.title')}</h2>
            <form className="contact-form">
              <div className="form-group">
                <label>{t('contact.name')}</label>
                <input type="text" />
              </div>
              <div className="form-group">
                <label>{t('contact.email')}</label>
                <input type="email" />
              </div>
              <div className="form-group">
                <label>{t('contact.message')}</label>
                <textarea rows={5}></textarea>
              </div>
              <button type="button" className="btn-primary">{t('contact.send')}</button>
            </form>
          </div>

          <div className="contact-info-side">
            <h3>{language === 'el' ? 'Πληροφορίες' : 'Contact Details'}</h3>
            <p><strong>Address:</strong> {contactInfo.address}</p>
            <p><strong>Email:</strong> <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a></p>
            <p><strong>Phone:</strong> {contactInfo.phone}</p>
            <p><strong>Instagram:</strong> <a href={`https://instagram.com/${contactInfo.instagram}`} target="_blank" rel="noreferrer">@{contactInfo.instagram}</a></p>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Andrew's Corner. {contactInfo.address}</p>
        </div>
      </footer>

      <style>{`
        section { padding: var(--space-lg) 0; border-bottom: none; }
        section:nth-of-type(even) { background-color: rgba(0,0,0,0.02); }
        
        h2 { font-size: 2.5rem; margin-bottom: var(--space-md); text-align: center; }
        h3 { font-size: 1.75rem; margin-bottom: var(--space-sm); }
        
        .hero { text-align: center; padding: var(--space-xl) 0; border-bottom: 2px solid var(--walnut); }
        .hero h1 { font-size: 4rem; margin-bottom: var(--space-sm); }
        .tagline { font-size: 1.5rem; color: var(--text-muted); font-style: italic; max-width: 600px; margin: 0 auto; }
        
        .content-p { margin-bottom: var(--space-sm); font-size: 1.15rem; line-height: 1.8; }
        
        .grid { display: grid; grid-template-columns: 2fr 1fr; gap: var(--space-lg); }
        @media (max-width: 768px) { .grid { grid-template-columns: 1fr; } }

        .vision-box, .retreat-card { 
          background-color: var(--white); 
          padding: var(--space-md); 
          border: 1px solid var(--border-subtle);
          border-left: 8px solid var(--olive);
          margin: var(--space-md) 0;
          box-shadow: 0 10px 20px rgba(0,0,0,0.03);
        }
        
        .institute-box {
          background-color: var(--white);
          padding: var(--space-md);
          border: 1px solid var(--border-subtle);
          margin-bottom: var(--space-md);
        }

        .event-card { margin-bottom: var(--space-md); border-bottom: 1px solid var(--sage); padding-bottom: var(--space-sm); }
        .event-card h3 { color: var(--chestnut); text-align: left; margin-bottom: 0.5rem; }
        .event-card .date { font-weight: 700; color: var(--olive); font-size: 1rem; margin-bottom: 0.5rem; }

        .hours-box { background: var(--white); padding: var(--space-sm); border: 1px solid var(--border-subtle); }
        .hours-box h3 { text-align: center; }
        .hours-table { width: 100%; border-collapse: collapse; }
        .hours-table td { padding: 1rem 0; border-bottom: 1px solid var(--warm-gray); font-size: 1.1rem; }
        .hours-table td:last-child { text-align: right; font-weight: 700; color: var(--walnut); }

        .iframe-placeholder, .givebutter-placeholder {
          background-color: var(--sage);
          height: 400px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          border-radius: 4px;
          border: 2px dashed var(--olive);
        }

        .iframe-container {
          margin-top: var(--space-sm);
        }

        .contact-form { margin-top: var(--space-sm); }
        .form-group { margin-bottom: var(--space-sm); display: flex; flex-direction: column; }
        .form-group label { margin-bottom: 0.5rem; font-weight: 700; color: var(--walnut); }
        .form-group input, .form-group textarea { 
          padding: 1rem; 
          border: 1px solid var(--border-subtle); 
          border-radius: 4px;
          font-family: var(--font-body);
          font-size: 1rem;
        }
        
        .btn-primary {
          background-color: var(--walnut);
          color: white;
          border: none;
          padding: 1.25rem 2.5rem;
          font-size: 1.1rem;
          font-weight: 700;
          border-radius: 4px;
          transition: all 0.3s;
          letter-spacing: 0.05rem;
        }
        .btn-primary:hover { background-color: var(--chestnut); transform: translateY(-2px); }

        .contact-info-side { background: var(--white); padding: var(--space-sm); border: 1px solid var(--border-subtle); }
        .contact-info-side h3 { margin-bottom: var(--space-sm); }
        .contact-info-side p { margin-bottom: 1.5rem; font-size: 1.1rem; }

        .footer { 
          background-color: var(--walnut); 
          color: var(--cream); 
          padding: var(--space-md) 0; 
          text-align: center;
        }
      `}</style>
    </div>
  );
};

function App() {
  return (
    <LanguageProvider>
      <Home />
    </LanguageProvider>
  );
}

export default App;
