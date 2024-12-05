import './App.css';
import { ImageWithTextBelow } from './components/ImageWithTextBelow';
import { SocialIcons } from './components/SocialIcons';

function App() {
  return (
    <div className="d-flex flex-column container-bg">
      <div className='fs-1 bg-primary text-center mb-3 p-3 title-custom'>Farm Machinery Parts NI</div>

      <ImageWithTextBelow 
        image_url={"https://storage.googleapis.com/website-bucket-05122024/images/front-side-klass.JPG"}
        content="Alan has been a mechanic for over 5 years with a wealth of experience in many vehicles including tractors and diggers"
        alt="digger front side"
      />

      <ImageWithTextBelow 
        image_url={"https://storage.googleapis.com/website-bucket-05122024/images/klass-side.JPG"}
        content="Alan has always delivered high quality work over his time as a mechanic."
        alt="digger side"
      />

      <ImageWithTextBelow 
        image_url={"https://storage.googleapis.com/website-bucket-05122024/images/klass-reverse-side.JPG"}
        content="Alan has a keen attention to detail that ensures customers are satisfied with the work he produces."
        alt="digger reverse side"
      />

      <SocialIcons />
    </div>
  );
}

export default App;
