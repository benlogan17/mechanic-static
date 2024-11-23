import './App.css';
import { ImageWithTextBelow } from './components/ImageWithTextBelow';
import Digger from './images/image_1.jpg'
import { SocialIcon } from 'react-social-icons';

function App() {
  return (
    <div className="d-flex flex-column ">
      <div className='fs-1 bg-primary text-center mb-3 p-3 title-custom'>Alan Irvine Mechanic</div>

      <ImageWithTextBelow 
        image_url={Digger}
        content="Alan has been a mechanic for over 5 years with a wealth of experience in many vehicles including tractors and diggers"
      />

      <div className='m-3'>
        <h1>Contact at </h1>
        <SocialIcon url="www.facebook.com" className='mx-1'/>
        <SocialIcon url="www.twitter.com" className='mx-1'/>
        <SocialIcon url="www.instagram.com" className='mx-1'/>
      </div>

    </div>
  );
}

export default App;
