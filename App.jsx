import Card from "./Card";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header>
        <h1>NALLA RITHWIK</h1>
        <p>Full Stack Developer & Creative Enthusiast</p>
      </header>

      <div className="cards-container">
        <Card
          title="Photography"
          description="I love capturing beautiful landscapes and city life."
          image="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=600&q=80"

        />
        <Card
          title="Coding"
          description="I enjoy building apps with React and exploring new technologies."
          image="https://images.unsplash.com/photo-1517433456452-f9633a875f6f?auto=format&fit=crop&w=600&q=80"


        />
        <Card
          title="Travel"
          description="Exploring new cultures and places is my biggest inspiration."
          image="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80"

        />
        <Card
          title="Music"
          description="Playing guitar and discovering new genres keeps me inspired."
          image="https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&w=600&q=80"

        />
      </div>
    </div>
  );
}

export default App;


