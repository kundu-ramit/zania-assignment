import ImageCard from "../../components/Card/ImageCard";
import './Home.css'

const Home = () => {
  return (
    <div className="home">
      <div className="card-container">
        {/* Render 3 cards above */}
        <div className="row">
          <ImageCard
            imageUrl="https://img.freepik.com/free-photo/cute-domestic-kitten-sits-window-staring-outside-generative-ai_188544-12519.jpg?size=626&ext=jpg"
            title="Card 1"
            description="This is card 1."
          />
          <ImageCard
            imageUrl="https://img.freepik.com/free-photo/cute-domestic-kitten-sits-window-staring-outside-generative-ai_188544-12519.jpg?size=626&ext=jpg"
            title="Card 2"
            description="This is card 2."
          />
          <ImageCard
            imageUrl="https://img.freepik.com/free-photo/cute-domestic-kitten-sits-window-staring-outside-generative-ai_188544-12519.jpg?size=626&ext=jpg"
            title="Card 3"
            description="This is card 3."
          />
        </div>
        {/* Render 2 cards below */}
        <div className="row">
          <ImageCard
            imageUrl="https://img.freepik.com/free-photo/cute-domestic-kitten-sits-window-staring-outside-generative-ai_188544-12519.jpg?size=626&ext=jpg"
            title="Card 4"
            description="This is card 4."
          />
          <ImageCard
            imageUrl="https://img.freepik.com/free-photo/cute-domestic-kitten-sits-window-staring-outside-generative-ai_188544-12519.jpg?size=626&ext=jpg"
            title="Card 5"
            description="This is card 5."
          />
        </div>
      </div>
    </div>
  );
};

export default Home;


