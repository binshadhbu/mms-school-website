import React from 'react';
import styles from './page.module.css';

const Page = () => {
  return (
    <div className={styles.container}>
      <section className={styles.hero}>
        <div className={styles.heroText}>
          <h1>
            Join our friendly <br />
            <span className={styles.highlight}>Dreamy Cloud</span> family
          </h1>
          <p>
            We offer a safe, nurturing environment with developmentally appropriate
            activities and opportunities for children to creatively explore and learn
            through play
          </p>
          <button className={styles.joinButton}>Join Us</button>
        </div>
        <div className={styles.heroImage}>
          <div className={styles.imagePlaceholder}>Image Placeholder</div>
        </div>
      </section>


      <section className={styles.programs}>
        <h2>Our programs</h2>
        <p>
          We offer a safe, nurturing environment with developmentally appropriate
          activities and opportunities for children to creatively explore and learn
          through play
        </p>
        <div className={styles.cards}>
          {[
            { age: '2.5 - 3 Year Olds', title: 'Discipline Program', color: 'card1' },
            { age: '3 - 5 Year Olds', title: 'Junior Nursery', color: 'card2' },
            { age: '4 - 6 Year Olds', title: 'Kids Play Group', color: 'card3' },
            { age: '3 - 5 Year Olds', title: 'Drawing and colors', color: 'card4' },
          ].map((item, idx) => (
            <div className={`${styles.card} ${styles[item.color]}`} key={idx}>
              <div className={styles.cardNumber}>{`0${idx + 1}`}</div>
              <h3>{item.age}</h3>
              <p>{item.title}</p>
              <p className={styles.cardText}>
                Lorem ipsum dolor sit amet consectetur. Nunc nunc odio faucibus
                suspendisse in nunc.
              </p>
            </div>
          ))}
        </div>
      </section>

     
      <section className={styles.about}>
        <h2>About Kindergarten</h2>
        <p>
          Our kindergarten is built on the foundation of love, learning, and creativity.
          We provide a safe and engaging environment where children feel free to express themselves,
          explore new ideas, and grow into kind and confident individuals.
        </p>
      </section>

      
      <section className={styles.team}>
        <h2>Meet Our Team</h2>
        <div className={styles.teamMembers}>
          {[1, 2, 3].map((member) => (
            <div key={member} className={styles.memberCard}>
              <div className={styles.memberPhoto}>Photo</div>
              <h3>Teacher Name</h3>
              <p>Position</p>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.gallery}>
        <h2>Our Gallery</h2>
        <p>
          Explore the wonderful world of creativity and imagination through the eyes of our little artists.
          This gallery showcases the unique talents of our kindergarteners, highlighting their drawings,
          crafts, and projects.
        </p>
        <div className={styles.galleryGrid}>
          {[1, 2, 3, 4].map((img) => (
            <div key={img} className={styles.galleryItem}>Image</div>
          ))}
        </div>
      </section>

      <section className={styles.newsletter}>
        <h2>Stay informed with all our latest news!</h2>
        <p>
          Subscribe to our updates to stay informed about important news, events,
          and announcements from the daycare. We're always happy to keep you in the loop!
        </p>
        <div className={styles.subscribeBox}>
          <input type="email" placeholder="Your Email" />
          <button>Subscribe now</button>
        </div>
      </section>
    </div>
  );
};

export default Page;
