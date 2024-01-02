// React component structure
import React from 'react';
import './App.css';

function App() {
  return (
    <div className="macbook-pro">
    <div className="overlap-wrapper">
      <div className="overlap">
        <div className="box">
          <div className="overlap-group">
            <img className="line" alt="Line" src="line-1.svg" />
            <img className="img" alt="Line" src="line-2.svg" />
            <img className="line-2" alt="Line" src="line-3.svg" />
            <div className="text-wrapper">Pak Dat To</div>
            <div className="pages-work">Pages &amp; work</div>
            <div className="div">Github</div>
            <div className="text-wrapper-2">Behance</div>
            <div className="text-wrapper-3">Dribbble</div>
            <div className="text-wrapper-4">Instagram</div>
            <div className="text-wrapper-5">Contact</div>
            <p className="an-adept-devops">
              An adept DevOps Engineer and Full Stack Developer, I blend technical prowess with a heart of kindness
              and empathy, embodying the wisdom that true strength lies not only in our skills, but also in our
              ability to understand and uplift others - just as Uncle Iroh taught, from the avatar, the last
              airbender, &#39;Sometimes the best way to solve your own problems is to help someone else.
            </p>
          </div>
        </div>
        <div className="box-2" />
      </div>
    </div>
  </div>
  );
}

export default App;
