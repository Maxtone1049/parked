import prime from './assets/prime.jpg';
import './App.css';
import slack from './assets/slack.svg';
import git from './assets/github.svg';
import i4g from './assets/I4G.png';
import zurilogo from './assets/zurilogo.png';
import Header from './components/Header';
function App() {
  return (
    <div className="home">
      <Header />
      <div className='ind'>
        <img src={prime} className='fix' id='profile_img' alt='' />
        <p className='lap'>Maxwell Anthony</p>
      </div>
      <div className='ind'>
        <a className='hint' href='https://twitter.com/@TonySignificant' id='twitter'>Twitter Link</a>
        <a className='hint' href='https://training.zuri.team/' id='btn_zuri'>Zuri Team</a>
        <a className='hint' href='http://books.zuri.team/' id='books'>Zuri Books</a>
        <a className='hint' href='https://books.zuri.team/python-for-beginners?ref_id=maxwell anthony' id='book_python'>Python Books</a>
        <a className='hint' href='https://background.zuri.team/' id='pitch'>Background Check for Coders</a>
        <a className='hint' href='https://books.zuri.team/design-rules' id='book_design'>Design Books</a>
      </div>
      <div className='inner'>
        <a href='https://slack.com'>
          <img src={slack} alt='' />
        </a>
        <a href='https://github.com/Maxtone1049'>
          <img src={git} alt='' />
        </a>
      </div>
      <hr/>
      <div className='footer'>
        <div>
          <img src={zurilogo} alt=''/>
        </div>
        <div>
        HNG Internship 9 Frontend Task
        </div>
        <div>
          <img src={i4g} alt=''/>
        </div>

      </div>
    </div>
  );
}

export default App;
