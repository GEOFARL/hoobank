import styles from './styles.js';

function App() {
  return (
    <div className="w-full bg-primary overflow-hidden text-white">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>Navbar</div>
      </div>

      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>Hero</div>
      </div>

      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          Stats Business Billing CardDeal Testimonials Clients CTA Footer
        </div>
      </div>
    </div>
  );
}

export default App;
