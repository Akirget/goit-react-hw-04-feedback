import styles from './Section.module.css';
import PropTypes from 'prop-types';

const Section = ({ title, children }) => {
  return (
    <section className={styles.title}>
      <h2 className={styles.title}> {title}</h2>
      {children}
    </section>
  );
};

export default Section;

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element,
};
