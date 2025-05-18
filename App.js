// Import necessary libraries
import React, { useState } from 'react';
import './App.css';

// Home Component
// Renders the home page with the project title and description.
function Home() {
  return (
    <div className="home">
      <h1>Axion: The Future of Neuroscience</h1>
      <p><b>The Future of Nueroscience</b></p>
      <div className="logos">
        <img src="/vite-logo.png" alt="Vite Logo" />
        <img src="/react-logo.png" alt="React Logo" />
      </div>
    </div>
  );
}

// Analyze image for abnormalities
// Analyzes the uploaded image for color abnormalities that might indicate brain cancer.
const analyzeImageForAbnormalities = (image) => {
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  
  // If context is null, assume that analysis cannot be performed and return a default message.
  if (!ctx) return "Brain Cancer Unlikely";

  canvas.width = image.width;
  canvas.height = image.height;
  ctx.drawImage(image, 0, 0, image.width, image.height);

  const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  const pixels = imageData.data;
  let abnormalPixelsCount = 0;

  // Iterate through the pixel data in steps of 4 to access RGBA values.
  for (let i = 0; i < pixels.length; i += 4) {
    const red = pixels[i];
    const green = pixels[i + 1];
    const blue = pixels[i + 2];

    if (
      Math.abs(red - green) > 50 ||
      Math.abs(green - blue) > 50 ||
      Math.abs(blue - red) > 50
    ) {
      abnormalPixelsCount++;
    }
  }

  if (abnormalPixelsCount > 1000) {
    return "Brain Cancer Detected, Medulloblastoma- Survival rate 70-80 percent, Symptoms- consistent headaches, nystagmus(side-to-side eye movement), lethargy(lack of energy), confusion, double vision, nausea, vomiting, Treatments- Reach out to your local neurologist- options: radiation therapy, stem cell transplants, and chemotherapy";
  }

  return "Brain Cancer Unlikely";
};

// File Upload Component
// Allows users to upload an fMRI scan and receive AI-based analysis results.
function FileUpload() {
  const [file, setFile] = useState(null);
  const [result, setResult] = useState(null);
  const [uploaded, setUploaded] = useState(false);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
    setUploaded(true);
  };

  const handleSubmit = () => {
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const img = new Image();
        img.onload = () => {
          const analysisResult = analyzeImageForAbnormalities(img);
          setResult(analysisResult);
          setUploaded(false);
        };
        img.src = event.target.result;
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="file-upload">
      <h2>Upload fMRI Scan</h2>
      <input type="file" onChange={handleFileChange} />
      {uploaded ? (
        <button onClick={handleSubmit}>Submit</button>
      ) : (
        <p>Please upload a file to enable submission.</p>
      )}
      {result && <p>AI Result: {result}</p>}
    </div>
  );
}

// About Component
function About() {
  return (
    <div className="about">
      <h2>About Us</h2>
      <p>A dedicated team developing AI-driven solutions in an age of medical milestones</p>
      <p><b>*Samy El-Zahabi*</b></p>
      <p>Top placer and winner in many science and math competitions, sophomore at Chattahoochee High School. Aspiring Neurologist. </p>
      <p></p>
      <p><b>Why are you interested in neuroscience and its connections to technology?</b></p> 
      <p>The way I see it, computational neuroscience is the perfect combination of science, math, and computer science that doctors can experience, all in one field. Ever since middle school, I have had a yearning for analysis, specifically relating to the little things we all don’t think about, such as the body’s functional pathways, technology’s programming marvels, and math’s never-ending branches. Programming mathematical models using AI to identify neurological disorders and diseases is the perfect connection.</p> 
      <p></p>
      <p><b>What is your favorite programming language?</b></p>
      <p>My favorite is Python; it’s a perfect blend of math with regards to stochasticity, mathematical functions, and universal operations. </p>
      <p></p>
      <p><b>What do you want to make out of this project?</b></p>
      <p>Through this project, I want to advance technology’s medical aspects with regards to the brain. The brain is the power center of the body as the nucleus is the main controller of the cell- it's responsible for our body’s functionality, and it must be understood. Neurological diseases are extremely dangerous and impact the entire body, so identifying them and knowing the steps to take are key.</p> 
      <p></p>
      <p></p>
      <p><b>*Aayush Ahuja*</b></p>
      <p>Sophomore at Chattahoochee High School. Aspiring Computer Science/ Mechanical Engineer.</p>
      <p></p>
      <p><b>What makes you love computer science?</b></p>
      <p>For me, computer science is a pathway to exploring the science of technology’s wonders. Coding and programming are heavily creative and require immense critical thinking, tasks I enjoy doing daily. Learning how to write data structures that I used to believe were extremely complex back in middle school is quite a rewarding experience. Another aspect I love is the procedural flow of any solution- reading a solution trains my brain to do better and think faster. </p>
      <p></p>
      <p><b>What is your favorite aspect of coding?</b></p>
      <p>My favorite aspect of coding is the capacity of the brain to memorize and understand dozens of computer languages and implement them in code in seconds. What strikes me most is that learning spoken languages takes much longer than programming ones, despite the fact they are built based on syntax and flow. It’s as if the brain is built for learning programming, the building block of modern innovation.  </p>
      <p></p>
      <p><b>Why did you decide to work on this project?</b></p>
      <p>Technology is a leading sector in the economy, and so is medicine, both with spectacular breakthroughs emerging daily. With neuroscience being the leading performer, I decided to combine the two to work on solving a problem asked for decades: What is the treatment for brain cancer? Given the little data about brain cancer and children, Samy and I decided this would be the perfect idea for our project. After months of work, people  </p>
    </div>
  );
}

// Citations Component
function Citations() {
  return (
    <div className="citations">
      <h2>Citations</h2>
      <ul>
        <li><a href="https://youtu.be/SqcY0GlETPk?si=1qjAl4DbyJ9AzzYU">Video Tutorial</a></li>
        <li><a href="https://react.dev/learn/your-first-component">React Documentation</a></li>
        <li><a href="https://getbootstrap.com/docs/5.3/components/buttons/">Bootstrap Buttons</a></li>
        <li><a href="https://react-spring.dev/docs/utilities/use-scroll">React Spring Scroll</a></li>
        <li><a href="https://www.w3schools.com/REACT/DEFAULT.ASP">W3Schools React Guide</a></li>
      </ul>
    </div>
  );
}

// Main App Component
// This is the main component that handles page navigation and rendering.
function App() {
  const [page, setPage] = useState('home');

  const renderPage = () => {
    switch (page) {
      case 'home':
        return <Home />;
      case 'upload':
        return <FileUpload />;
      case 'about':
        return <About />;
      case 'citations':
        return <Citations />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="app">
      <nav>
        <button onClick={() => setPage('home')}>Home</button>
        <button onClick={() => setPage('upload')}>Upload</button>
        <button onClick={() => setPage('about')}>About</button>
        <button onClick={() => setPage('citations')}>Citations</button>
      </nav>
      {renderPage()}
    </div>
  );
}

export default App;
