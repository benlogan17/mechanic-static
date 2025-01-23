import './App.css';
import { ImageWithTextBelow } from './components/ImageWithTextBelow';
import { SocialIcons } from './components/SocialIcons';

function App() {
  return (
    <div className="d-flex flex-column container-bg">
      <div className='fs-1 text-center mb-3 p-3 title-custom'>
        <h1>Farm Machinery Parts NI</h1>
        <h3 className='bg-red'><span className='claas-font'>CLAAS</span> Forage Specialist</h3>
      </div>

      <ImageWithTextBelow 
        image_url={"https://storage.googleapis.com/website-bucket-05122024/images/front-side-klass.JPG"}
        content="Here at farm machinery parts NI we specialise in; sales, service, remanufacturing and original parts for Class forage equipment."
        alt="digger front side"
      />

      <ImageWithTextBelow 
        image_url={"https://storage.googleapis.com/website-bucket-05122024/images/klass-front-side.JPG"}
        content="We have over 15 years specialising in this industry and with keeping upto date with technology allowing us to offer a full cover of all Claas forage equipment"
        alt="digger side"
      />

      <ImageWithTextBelow 
        image_url={"https://storage.googleapis.com/website-bucket-05122024/images/klass-reverse-side.JPG"}
        content="We offer a full range of used Class forage harvesters for sale along with a large stock of both new and used parts available for immediate delivery."
        alt="digger reverse side"
      />

      <SocialIcons />
    </div>
  );
}

export default App;
