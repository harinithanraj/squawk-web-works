import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

const contact = {
  email: 'hey.squawk.us@gmail.com',
  phones: ['+91 93856 37336', '+91 82207 41530'],
  instagram: 'https://instagram.com/squawk.us',
};

const studentServices = [
  'Student portfolio websites',
  'Enhanced student portfolios',
  'Resume websites',
  'Final-year project websites',
  'Personal branding',
  'Website deployment',
];

const businessServices = [
  'Business websites and landing pages',
  'Multi-page websites',
  'Product and service showcase pages',
  'Website maintenance',
];

const plans = [
  {
    eyebrow: 'For students',
    name: 'Student Portfolio',
    detail: 'One Page',
    startingPrice: 999,
    extraPageRate: 500,
    copy: 'A one-page portfolio for showcasing skills, achievements, and projects.',
    featured: false,
  },
  {
    eyebrow: 'For students',
    name: 'Student Portfolio',
    detail: 'Enhanced',
    startingPrice: 1999,
    extraPageRate: 500,
    copy: "An enhanced portfolio for presenting a student's profile, projects, and professional identity in more detail.",
    featured: true,
  },
  {
    eyebrow: 'For businesses',
    name: 'Small Business',
    detail: 'Landing Page',
    startingPrice: 2999,
    extraPageRate: 750,
    copy: 'A landing page introducing a business and promoting its services online.',
    featured: false,
  },
  {
    eyebrow: 'For businesses',
    name: 'Small Business',
    detail: 'Multiple Pages',
    startingPrice: 5999,
    extraPageRate: 750,
    copy: 'A multi-page website for showcasing business information, products, and services.',
    featured: true,
  },
  {
    eyebrow: 'Keep it fresh',
    name: 'Minor Updates',
    detail: 'Website Maintenance',
    startingPrice: 499,
    copy: 'Minor updates and ongoing website maintenance.',
    featured: false,
  },
  {
    eyebrow: 'For your visual identity',
    name: 'Creative Essentials',
    detail: 'Logo, Posters & Branding',
    startingPrice: 499,
    copy: 'Logo designs, posters, social media creatives, and starter branding packages for a consistent look.',
    featured: false,
    accent: true,
  },
];

function Logo({ compact = false }) {
  return (
    <a className={`logo ${compact ? 'logo--compact' : ''}`} href="#home" aria-label="Squawk-web works home">
      <span className="logo__main">SQUAWK</span>
      <span className="logo__sub">WEB WORKS</span>
    </a>
  );
}

function Arrow() {
  return <span aria-hidden="true" className="arrow">↗</span>;
}

function Button({ children, href = '#contact', dark = false, className = '', onClick, type = 'button' }) {
  const content = <>{children} <Arrow /></>;
  if (onClick) {
    return <button className={`button ${dark ? 'button--dark' : ''} ${className}`} onClick={onClick} type={type}>{content}</button>;
  }
  return <a className={`button ${dark ? 'button--dark' : ''} ${className}`} href={href}>{content}</a>;
}

function MenuIcon({ open }) {
  return <span className={`menu-icon ${open ? 'is-open' : ''}`} aria-hidden="true"><i /><i /></span>;
}

function Navbar({ onBook }) {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  return (
    <header className="site-header">
      <div className="container nav">
        <Logo compact />
        <button className="menu-toggle" type="button" onClick={() => setOpen(!open)} aria-label="Toggle navigation" aria-expanded={open}>
          <MenuIcon open={open} />
        </button>
        <nav className={`nav__links ${open ? 'nav__links--open' : ''}`} aria-label="Primary navigation">
          {[['About', 'about'], ['Services', 'services'], ['Plans', 'pricing'], ['Contact', 'contact']].map(([label, target]) => (
            <a href={`#${target}`} key={label} onClick={close}>{label}</a>
          ))}
          <Button className="nav__cta" onClick={() => { close(); onBook(); }}>Book Services</Button>
        </nav>
      </div>
    </header>
  );
}

function Spark({ className = '' }) {
  return <span className={`spark ${className}`} aria-hidden="true">✳</span>;
}

function HeroArt() {
  return (
    <div className="hero-art" aria-label="Abstract illustration of a creative website studio">
      <div className="hero-art__circle" />
      <div className="hero-art__card hero-art__card--one">
        <span className="tiny-label">IDEAS IN</span>
        <strong>GOOD<br />HANDS</strong>
        <span className="card-line" />
      </div>
      <div className="hero-art__card hero-art__card--two">
        <span className="tiny-label">WEB / 01</span>
        <div className="mini-window"><i /><i /><i /></div>
        <span className="card-line card-line--short" />
      </div>
      <div className="hero-art__person">
        <div className="person__head"><span /></div>
        <div className="person__body"><i className="person__arm person__arm--left" /><i className="person__arm person__arm--right" /></div>
        <div className="person__legs"><i /><i /></div>
      </div>
      <Spark className="hero-art__spark" />
      <span className="hero-art__caption">DESIGN<br />WITH PURPOSE</span>
    </div>
  );
}

function Hero({ onBook }) {
  return (
    <section className="hero" id="home">
      <div className="container hero__grid">
        <div className="hero__content reveal">
          <p className="kicker"><span className="kicker__dot" /> Web development, made approachable</p>
          <h1>Your ideas.<br /><em>Our websites.</em><br />Your digital presence.</h1>
          <p className="hero__copy">We build websites for ambitious students and growing businesses — turning good ideas into a professional online presence.</p>
          <div className="hero__actions">
            <Button href="#services">Explore our services</Button>
            <button className="text-link text-link--button" type="button" onClick={onBook}>Book services <Arrow /></button>
          </div>
          <div className="hero__note"><span>✦</span> Built with care by Harini &amp; Aravinth</div>
        </div>
        <HeroArt />
      </div>
      <div className="hero__ticker" aria-hidden="true">
        <span>STUDENT PORTFOLIOS</span><b>✦</b><span>BUSINESS WEBSITES</span><b>✦</b><span>YOUR NEXT DIGITAL MOVE</span><b>✦</b>
      </div>
    </section>
  );
}

function AboutArt() {
  return (
    <div className="about-art" aria-label="Illustrated creative team">
      <div className="about-art__blob" />
      <div className="about-art__sun">✦</div>
      <div className="about-person about-person--girl">
        <div className="about-person__hair" />
        <div className="about-person__head"><i /><i /></div>
        <div className="about-person__torso"><span /></div>
        <div className="about-person__arm" />
        <div className="about-person__legs"><i /><i /></div>
      </div>
      <div className="about-person about-person--boy">
        <div className="about-person__hair" />
        <div className="about-person__head"><i /><i /></div>
        <div className="about-person__torso"><span /></div>
        <div className="about-person__arm" />
        <div className="about-person__legs"><i /><i /></div>
      </div>
      <div className="about-art__label">TWO MINDS<br />ONE MISSION</div>
    </div>
  );
}

function About() {
  return (
    <section className="section about" id="about">
      <div className="container about__grid">
        <AboutArt />
        <div className="about__content reveal">
          <p className="section-label">01 / About us</p>
          <h2>Small team.<br /><span>Big possibilities.</span></h2>
          <p>We are Harini and Aravinth from Rathinam Technical Campus. We create websites for college students and help businesses build and promote their online presence.</p>
          <p>Our goal is simple: make website development accessible, affordable, and useful for people who want to establish their identity in the digital world.</p>
          <div className="signature">Harini <span>&amp;</span> Aravinth</div>
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ type, title, copy, services, index }) {
  return (
    <article className={`service-card service-card--${type}`}>
      <div className="service-card__top"><span className="service-card__number">0{index}</span><span className="service-card__icon">{type === 'student' ? '✦' : '↗'}</span></div>
      <h3>{title}</h3>
      <p>{copy}</p>
      <ul>{services.map((service) => <li key={service}><span>+</span>{service}</li>)}</ul>
      <a className="circle-link" href="#pricing" aria-label={`See ${title} pricing`}><Arrow /></a>
    </article>
  );
}

function Services() {
  return (
    <section className="section services" id="services">
      <div className="container">
        <div className="section-heading reveal">
          <div><p className="section-label">02 / What we do</p><h2>Made for where<br /><span>you are going.</span></h2></div>
          <p>Whether you are building your first portfolio or taking a business online, we create digital spaces that feel like you.</p>
        </div>
        <div className="services__grid">
          <ServiceCard index="1" type="student" title="College students" copy="Build your personal brand, showcase your skills, and present your academic work with a website that represents you." services={studentServices} />
          <ServiceCard index="2" type="business" title="Growing businesses" copy="Establish your online presence and help customers discover your business, products, and services." services={businessServices} />
        </div>
      </div>
    </section>
  );
}

function PricingCard({ plan, onBook }) {
  return (
    <article className={`price-card ${plan.featured ? 'price-card--featured' : ''} ${plan.accent ? 'price-card--accent' : ''}`}>
      <div className="price-card__meta"><span>{plan.eyebrow}</span>{plan.featured && <b>Popular</b>}</div>
      <h3>{plan.name}<br /><span>{plan.detail}</span></h3>
      <p>{plan.copy}</p>
      <Button dark={plan.featured || plan.accent} onClick={() => onBook(plan)}>Book this plan</Button>
    </article>
  );
}

function Pricing({ onBook }) {
  return (
    <section className="section pricing" id="pricing">
      <div className="container">
        <div className="section-heading section-heading--pricing reveal">
          <div><p className="section-label">03 / Choose your direction</p><h2>Start small.<br /><span>Grow boldly.</span></h2></div>
          <p>Choose a starting plan, tell us what you need, and get an estimate tailored to your project.</p>
        </div>
        <div className="pricing__grid">{plans.map((plan) => <PricingCard plan={plan} onBook={onBook} key={`${plan.name}-${plan.detail}`} />)}</div>
      </div>
    </section>
  );
}

function Contact({ onBook }) {
  return (
    <section className="section contact" id="contact">
      <div className="container contact__inner">
        <div className="contact__copy reveal">
          <p className="section-label">04 / Let&apos;s talk</p>
          <h2>Let&apos;s build<br /><span>something together.</span></h2>
          <p>Have a portfolio idea, a final-year project, or a business that needs a website? Get in touch and let&apos;s discuss your requirements.</p>
          <div className="contact__star">✳</div>
        </div>
        <div className="contact__details">
          <a href={`mailto:${contact.email}`} className="contact-item"><span>Email</span><strong>{contact.email}</strong><Arrow /></a>
          <div className="contact-item contact-item--phones"><span>Phone</span><strong><a href={`tel:${contact.phones[0].replace(/\s/g, '')}`}>{contact.phones[0]}</a><a href={`tel:${contact.phones[1].replace(/\s/g, '')}`}>{contact.phones[1]}</a></strong><Arrow /></div>
          <a href={contact.instagram} className="contact-item" target="_blank" rel="noreferrer"><span>Instagram</span><strong>{contact.instagram}</strong><Arrow /></a>
        </div>
      </div>
    </section>
  );
}

function BookingModal({ plan, onClose }) {
  const [submitted, setSubmitted] = useState(false);
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({
    audience: '',
    selectedPlan: plan ? `${plan.name} — ${plan.detail}` : '',
    name: '',
    email: '',
    phone: '',
    project: '',
    pages: '5',
    portfolioName: '',
    portfolioHeadline: '',
    portfolioSkills: '',
    portfolioProjects: '',
    portfolioEducation: '',
    portfolioLinks: '',
    businessName: '',
    businessServices: '',
    businessAudience: '',
    businessCallToAction: '',
    businessPages: '',
    creativeName: '',
    creativeDeliverables: '',
    creativeStyle: '',
    maintenanceNeeds: '',
  });

  const update = (event) => setForm({ ...form, [event.target.name]: event.target.value });
  const selected = plans.find((item) => `${item.name} — ${item.detail}` === form.selectedPlan) || plan;
  const isWebsitePlan = selected && !selected.detail.includes('Maintenance') && !selected.detail.includes('Branding');
  const pageCount = Number(form.pages) || 5;
  const extraPages = isWebsitePlan ? Math.max(0, pageCount - 5) : 0;
  const extraPageCost = extraPages * (selected?.extraPageRate || 0);
  const total = (selected?.startingPrice || 0) + extraPageCost;

  const goToDetails = (event) => {
    event.preventDefault();
    setStep(2);
  };

  const detailsFields = () => {
    if (selected?.eyebrow === 'For students') {
      return (
        <>
          <label>Your name or portfolio title<input name="portfolioName" value={form.portfolioName} onChange={update} required placeholder="e.g. Aravinth Kumar" /></label>
          <label>Headline or career goal<input name="portfolioHeadline" value={form.portfolioHeadline} onChange={update} required placeholder="e.g. Frontend developer" /></label>
          <label>Skills to showcase<textarea name="portfolioSkills" value={form.portfolioSkills} onChange={update} required rows="3" placeholder="List your skills, tools, and technologies" /></label>
          <label>Projects and achievements<textarea name="portfolioProjects" value={form.portfolioProjects} onChange={update} required rows="3" placeholder="Project names, descriptions, links, achievements" /></label>
          <label>Education and experience<textarea name="portfolioEducation" value={form.portfolioEducation} onChange={update} required rows="3" placeholder="Course, college, experience, certificates, or internships" /></label>
          <label>Social or reference links<input name="portfolioLinks" value={form.portfolioLinks} onChange={update} placeholder="LinkedIn, GitHub, existing website, etc." /></label>
        </>
      );
    }
    if (selected?.eyebrow === 'For businesses') {
      return (
        <>
          <label>Business or brand name<input name="businessName" value={form.businessName} onChange={update} required placeholder="Your business name" /></label>
          <label>What do you offer?<textarea name="businessServices" value={form.businessServices} onChange={update} required rows="3" placeholder="Products, services, and what makes you different" /></label>
          <label>Who are your customers?<input name="businessAudience" value={form.businessAudience} onChange={update} required placeholder="Your target audience" /></label>
          <label>Preferred call to action<input name="businessCallToAction" value={form.businessCallToAction} onChange={update} placeholder="e.g. Call us, enquire, visit our store" /></label>
          <label>Important pages or sections<textarea name="businessPages" value={form.businessPages} onChange={update} required rows="3" placeholder="About, services, gallery, contact, testimonials, etc." /></label>
        </>
      );
    }
    if (selected?.detail.includes('Branding')) {
      return (
        <>
          <label>Brand or business name<input name="creativeName" value={form.creativeName} onChange={update} required placeholder="Name to design for" /></label>
          <label>What do you need designed?<textarea name="creativeDeliverables" value={form.creativeDeliverables} onChange={update} required rows="3" placeholder="Logo, poster, Instagram post, business card, full branding, etc." /></label>
          <label>Preferred style or colours<textarea name="creativeStyle" value={form.creativeStyle} onChange={update} required rows="3" placeholder="Share references, colours, mood, or competitor examples" /></label>
        </>
      );
    }
    return <label>What needs to be updated?<textarea name="maintenanceNeeds" value={form.maintenanceNeeds} onChange={update} required rows="5" placeholder="Describe the updates or maintenance work you need" /></label>;
  };

  const submit = (event) => {
    event.preventDefault();
    const subject = `Website enquiry from ${form.name}`;
    const body = [
      `Who is this website for: ${form.audience}`,
      `Plan: ${form.selectedPlan}`,
      `Estimated total: ₹${total.toLocaleString('en-IN')}`,
      isWebsitePlan ? `Pages requested: ${pageCount} (5 included, ${extraPages} extra)` : '',
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      `Phone: ${form.phone}`,
      '',
      'General project details:',
      form.project,
      '',
      'Plan-specific details:',
      ...Object.entries(form)
        .filter(([key, value]) => value && !['audience', 'selectedPlan', 'name', 'email', 'phone', 'project', 'pages'].includes(key))
        .map(([key, value]) => `${key}: ${value}`),
    ].join('\n');
    window.location.href = `mailto:${contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSubmitted(true);
  };

  return (
    <div className="modal-backdrop" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) onClose(); }}>
      <section className="booking-modal" role="dialog" aria-modal="true" aria-labelledby="booking-title">
        <button className="modal-close" type="button" onClick={onClose} aria-label="Close enquiry form">×</button>
        {submitted ? (
          <div className="booking-success">
            <span>✦</span>
            <h2>Your enquiry is ready.</h2>
            <p>Your email app should open with the details addressed to {contact.email}. Review it and press send to share your enquiry.</p>
            <button className="button button--dark" type="button" onClick={onClose}>Done <Arrow /></button>
          </div>
        ) : (
          <>
            <p className="section-label">Step {step} / 3</p>
            <h2 id="booking-title">{step === 1 ? <>Tell us about<br /><span>your next website.</span></> : step === 2 ? <>A few more<br /><span>useful details.</span></> : <>Review your<br /><span>website order.</span></>}</h2>
            <p className="booking-modal__intro">{step === 1 ? 'Start with your contact details and the plan you are considering.' : step === 2 ? 'These details help us create something accurate, personal, and useful.' : 'Here is your estimated starting price. Extra pages are added to the base plan.'}</p>
            {step === 1 ? (
              <form onSubmit={goToDetails}>
                <label>Who is this website for?
                  <select name="audience" value={form.audience} onChange={update} required>
                    <option value="">Choose one</option>
                    <option>Myself / my portfolio</option>
                    <option>My final-year project</option>
                    <option>My business</option>
                    <option>Someone else</option>
                  </select>
                </label>
                <label>Pick a plan
                  <select name="selectedPlan" value={form.selectedPlan} onChange={update} required>
                    <option value="">Choose a plan</option>
                    {plans.map((item) => <option key={`${item.name}-${item.detail}`} value={`${item.name} — ${item.detail}`}>{item.name} — {item.detail}</option>)}
                  </select>
                </label>
                <div className="booking-form__row">
                  <label>Name<input name="name" value={form.name} onChange={update} required placeholder="Your name" /></label>
                  <label>Email<input type="email" name="email" value={form.email} onChange={update} required placeholder="you@example.com" /></label>
                </div>
                <label>Phone number<input type="tel" name="phone" value={form.phone} onChange={update} required placeholder="+91 ..." /></label>
                <label>Tell us about your project<textarea name="project" value={form.project} onChange={update} required rows="4" placeholder="What would you like to build?" /></label>
                <button className="button button--dark booking-submit" type="submit">Continue <Arrow /></button>
              </form>
            ) : step === 2 ? (
              <form onSubmit={(event) => { event.preventDefault(); setStep(3); }}>
                {isWebsitePlan && <label>How many pages do you need? <span className="form-hint">5 pages are included. Extra pages are added to the final estimate.</span>
                  <input type="number" min="1" name="pages" value={form.pages} onChange={update} required />
                </label>}
                {detailsFields()}
                <div className="booking-form__actions">
                  <button className="button booking-back" type="button" onClick={() => setStep(1)}>Back</button>
                  <button className="button button--dark booking-submit" type="submit">See estimate <Arrow /></button>
                </div>
              </form>
            ) : (
              <div className="order-summary">
                <div className="order-summary__line"><span>Plan</span><strong>{form.selectedPlan}</strong></div>
                {isWebsitePlan && <div className="order-summary__line"><span>Pages</span><strong>{pageCount} total <small>({extraPages} extra)</small></strong></div>}
                <div className="order-summary__total"><span>Estimated total</span><strong>₹{total.toLocaleString('en-IN')}</strong></div>
                <p className="order-summary__note">This is an estimated starting quote. We will confirm the final scope and amount after reviewing your details.</p>
                <div className="booking-form__actions">
                  <button className="button booking-back" type="button" onClick={() => setStep(2)}>Back</button>
                  <button className="button button--dark booking-submit" type="button" onClick={() => submit({ preventDefault: () => {} })}>Book order <Arrow /></button>
                </div>
              </div>
            )}
          </>
        )}
      </section>
    </div>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__top">
        <div><Logo /><p>A small web studio for big ideas,<br />student dreams, and growing brands.</p></div>
        <div className="footer__nav"><span>Explore</span><a href="#about">About</a><a href="#services">Services</a><a href="#pricing">Pricing</a><a href="#contact">Contact</a></div>
        <div className="footer__nav"><span>Say hello</span><a href={`mailto:${contact.email}`}>Email us</a><a href={contact.instagram} target="_blank" rel="noreferrer">Instagram</a></div>
      </div>
      <div className="container footer__bottom"><span>© {new Date().getFullYear()} Squawk-web works</span><span>Made for the next step <b>✦</b></span></div>
    </footer>
  );
}

function App() {
  const [bookingPlan, setBookingPlan] = useState(null);
  return (
    <>
      <Navbar onBook={() => setBookingPlan({})} />
      <main><Hero onBook={() => setBookingPlan({})} /><About /><Services /><Pricing onBook={setBookingPlan} /><Contact /></main>
      <Footer />
      {bookingPlan && <BookingModal plan={bookingPlan.name ? bookingPlan : null} onClose={() => setBookingPlan(null)} />}
    </>
  );
}

createRoot(document.getElementById('root')).render(<App />);
