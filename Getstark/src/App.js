
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Frontpage from './Components/Frontpage';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './Components/Navigation';
import Usdesigners from './Components/Usdesigners';
import Usproductmanager from './Components/Usproductmanager';
import UsCompliancemanager from './Components/UsCompliancemanager';
import Developers from './Components/Developers';
import Pricing from './Components/Pricing';
import Support from './Components/Support';
import Library from './Components/Library';
import Resourcecommunity from './Components/Resourcecommunity';
import Resourcewcag from './Components/Resourcewcag';
import Blog from './Components/Blog'

import Whitepaper from './Components/Whitepaper';
// import Community from './Components/Community';
import Footer from './Components/Footer';




import account from './assets/Data/account'
import billing from './assets/Data/billing'
import contact from './assets/Data/contact'
import team from './assets/Data/team'
import getstarted from './assets/Data/getstarted'
import privacy from './assets/Data/privacy'
import supportmain from './assets/Data/supportmain'
import blogmain from './assets/Data/blogmain';
import frontimg1 from './assets/Data/frontimg1';
import frontimg2 from './assets/Data/frontimg2';
import frontimg3 from './assets/Data/frontimg3';
import frontimg4 from './assets/Data/frontimg4';


import {

  BrowserRouter,  Routes, Route, Link } from "react-router-dom";
function App() {
  return (
    <>

      <BrowserRouter>
      <Navigation />

        <Routes>
          <Route path="/usdesigners" element={<Usdesigners />} />
          <Route path="/usproductmanager" element={<Usproductmanager />} />
          <Route path="/uscompliancemanager" element={<UsCompliancemanager />} />
          <Route path="/developers" element={<Developers />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/resourcecommunity" element={<Resourcecommunity />} />
          <Route path="/supportcenter" element={<Support state={supportmain} />} />
          <Route path="/account" element={<Support state={account} />} />
          <Route path="/billing" element={<Support state={billing} />} />
          <Route path="/team" element={<Support state={team} />} />
          <Route path="/contact" element={<Support state={contact} />} />
          <Route path="/privacy" element={<Support state={privacy} />} />
          <Route path="/getstarted" element={<Support state={getstarted} />} />
          <Route path="/frontpage" element={<Frontpage state={frontimg1} />} />
          <Route path="/frontimg1" element={<Frontpage state={frontimg1} />} />
          <Route path="/frontimg2" element={<Frontpage state={frontimg2} />} />
          <Route path="/frontimg3" element={<Frontpage state={frontimg3} />} />
          <Route path="/frontimg4" element={<Frontpage state={frontimg4} />} />
          <Route path="/whitepaper" element={<Whitepaper />} />
          <Route path="/library" element={<Library />} />
          <Route path="/wcagexplained" element={<Resourcewcag />} />
          <Route path="/blog" element={<Blog state={blogmain}/>} />
          <Route path="/latest" element={<Blog data={blogmain}/>} />
          <Route path="/announcement" element={<Blog data={blogmain}/>} />
          <Route path="/product" element={<Blog data={blogmain}/>} />  
          <Route path="/guides" element={<Blog data={blogmain}/>} />
          <Route path="/interview" element={<Blog data={blogmain}/>} />
          <Route path="/casestudy" element={<Blog data={blogmain}/>} />
          <Route path="/engineering" element={<Blog data={blogmain}/>} />
          <Route path="/frontpage" element={<Frontpage />} />

        </Routes>
        <Footer/>
      </BrowserRouter>









    </>
  );
}

export default App;
