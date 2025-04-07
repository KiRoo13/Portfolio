import Animation from '../../components/Animation/Animation';
import "./Home.css";

function Home() {
  return (
    <section className="section home">
      <div className="conteiner">
        <div className="home-content">
          <div className="about-mi">
            <h3 className="about-mi__title">Hello, my name is Kirill</h3>
            <p className="about-mi__subtitle">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima,
              vel. Dolorem voluptatibus quos facere ex iusto recusandae, optio
              quis tenetur? Hic quia nemo porro ex in magni, architecto
              quibusdam molestiae.
            </p>
            <ul className="about-mi__list">
              <li>Lorem, ipsum dolor.</li>
              <li>Lorem, ipsum dolor.</li>
              <li>Lorem, ipsum dolor.</li>
            </ul>
          </div>
          <div className="about-mi anim">
            <Animation/>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
