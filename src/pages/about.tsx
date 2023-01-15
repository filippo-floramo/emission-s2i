import {
  useScroll,
  motion,
  useTransform,
} from "framer-motion";
import styles from '../styles/pages/About.module.scss';

export default function About(): JSX.Element {

  const { scrollY } = useScroll();
  const y2 = useTransform(scrollY, (value) => { return value * (-0.5); });


  return (
    <div className={styles.about} >
      <motion.div className={styles.about_content} style={{ y: y2 }}>
        <h1>A little about.</h1>
        <div className={styles.text_content}>
          <h2>What is CO?</h2>
          <p>
            CO stands for <em><b>Carbon Monoxide</b></em>. It is a colorless, odorless gas that can be harmful when inhaled in large amounts. CO is released when something is burned. The greatest sources of CO to outdoor air are cars, trucks and other vehicles or machinery that burn fossil fuels.
          </p>
          <p>
            A variety of items in your home such as unvented kerosene and gas space heaters, leaking chimneys and furnaces, and gas stoves also release CO and can affect air quality indoors
          </p>
        </div>
        <div className={styles.text_content}>
          <h2>What are the harmful effects of CO?</h2>
          <p>
            Breathing air with a high concentration of CO reduces the amount of oxygen that can be transported in the blood stream to critical organs like the heart and brain.
            At very high levels, which are  possible indoors or in other enclosed environments, CO can cause dizziness, confusion, unconsciousness and death.
            Very high levels of CO are not likely to occur outdoors.
          </p>
          <p>
            However, when CO levels are elevated outdoors, they can be of particular concern for people with some types of heart disease. These people already have a reduced ability for getting oxygenated blood to their hearts in situations where the heart needs more oxygen than usual. They are especially vulnerable to the effects of CO when exercising or under increased stress. In these situations, short-term exposure to elevated CO may result in reduced oxygen to the heart accompanied by chest pain also known as angina.
          </p>
        </div>
        <div className={styles.text_content}>
          <h2>Steps to Reduce Exposure to Carbon Monoxide</h2>
          <p>
            It is most important to be sure combustion equipment is maintained and properly adjusted. Vehicular use should be carefully managed adjacent to buildings and in vocational programs. Additional ventilation can be used as a temporary measure when high levels of CO are expected for short periods of time.
          </p>
          <ul>
            <li>Keep gas appliances properly adjusted.</li>
            <li>Consider purchasing a vented space heater when replacing an unvented one.</li>
            <li>Do not idle the car inside garage.</li>
            <li>Have a trained professional inspect, clean and tune-up central heating system (furnaces, flues and chimneys) annually..</li>
            <li>Open flues when fireplaces are in use.</li>
          </ul>
        </div>
      </motion.div>
    </div >
  );
}

