import React from 'react'
import '../assets/style/Whitepaper.css'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

export default function Whitepaper() {
  return (
    <>
    <div className="paperheader">
        <div className="supporttext whitetext">
            <h5 className="supporth5 whiteh5">WHITE PAPER</h5>
            <h1 className="paperh1-1">Managing a modern accessibility posture and growing accessibility maturity at any scale</h1>
            <button className='whitebtn'>Download as pdf</button>
        </div>
    </div>

    <div className="autopublish">
        <div className="author">
            <h6 className="authorh6"> AUTHOR</h6>
            <a href="" className="authora">Stark Lab,Inc.</a><br />
            Benedikt Lehnert, Michael <br /> Fouquet, Cat Noone, Oscar <br />Müller, Cady Murg
        </div>
        <div className="published">
        <h6 className="authorh6">PUBLISHED</h6>
        <h4 className='pdate'>March 7, 2024</h4>
        </div>

    </div>
   <div className="myselect">
   <select name="" id="" className='myselect' >
    
    <option value=""><a href="#">Executive summary</a></option>
    <option value=""><a href="#">Introduction</a></option>
    <option value=""><a href="#">Accessibility transformation</a></option>
    <option value=""><a href="#">The urgent need for a better approach</a></option>
    <option value=""><a href="#">Novel operation model</a></option>
</select>
   </div>


    <h1 className="executiveh1-1">Executive Summary</h1>
    <div className="ep1"><p>Accessibility is a human right. Yet companies are struggling to meet the human and regulatory accessibility needs with existing approaches. A paradigm shift for digital accessibility management is necessary to meet the demands of the market, and build fully inclusive software services for the more than <a href="">1.3 billion people with a disability</a>.</p>
    <p>
    We as humans are no longer gated by the limits of technology but by the shortcomings of outdated approaches. The failure to fully consider and intentionally include people with respect to their individual needs has left <a href="">96% of the internet inaccessible</a> and companies facing both high cost of retrofitting and legal risk for non-compliance. The current state means people with disabilities are actively excluded from accessing software services (e.g. shopping, banking, education, traveling, etc.) and being core contributors to economic and societal progress. That's unacceptable.</p>

    <p>
    Software is the lifeblood of every major corporation. Without it, no scale is possible. Software is vital to internal efficiency and execution as well as connection to its customers. <b>In a world of drastically accelerating deployment of software, the only sustainable path forward is to proactively manage digital accessibility across all departments of a company.</b></p>
    <p>
<b>We need a new approach to manage a company’s accessibility posture in the same transparent, real-time, and continuous way we manage privacy and security at scale.</b> So that we're not only hitting the bare minimum mark of legal compliance but creating sustainable processes that ensure accessibility is an essential, non-negotiable requirement of modern software.</p>
<p>
<b>Stark has created an advanced operating model based on the use of a modern real-time platform that has...</b>
<ol type='a'>
<li>a central club</li>
<li>flexibe compliance frameworks</li>
<li>integrated end-to-end tooling</li>
</ol>
    </p>

    <p>
With this approach that has been proven to work to scale privacy and security practices in agile software development,<b> a company will be able to accelerate time-to-compliance, time-to-market, and reduce both financial and legal risks.</b> This scalable operating model is not only useful for large enterprise companies but enables businesses of all sizes to grow their accessibility maturity and deliver compliant, inclusive products with less overhead.
</p>
<h1 className="executiveh1-1">Introduction</h1>

<p>
More than 5.3 billion people worldwide have internet access with more than 7 billion mobile devices being used around the globe to access digital services. Based on the <a href="">latest reports from the World Health Organization (WHO)</a> more than 1.3 billion people live with at least one documented disability. <a href="">Another industry report</a> estimates the number of people with disabilities to be 1.85 billion, which makes it a “<b>market larger than China</b>”. If we factor in additional health conditions such as those that appear in aging populations, it makes clear the drastically increasing need to make any and all software services fully accessible at all times.


    </p>



    </div>
    
<div className="form">
<img src={require('../assets/images/42.png')} alt="img loading" />
<h3 className='formh3'>Want to read the full white paper? Please complete the form below to get access.</h3>

<Form>
     
       
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>First Name</Form.Label>
          <Form.Control />
        </Form.Group>
        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>Last Name</Form.Label>
          <Form.Control />
        </Form.Group>

       

        <Form.Group as={Col} controlId="formGridZip">
          <Form.Label>Company</Form.Label>
          <Form.Control />
        </Form.Group>
        <Form.Group as={Col} controlId="formGridZip">
          <Form.Label>Business Email</Form.Label>
          <Form.Control />
        </Form.Group>


      </Row>

      

     <div className="formbtn">
     <Button variant="primary" type="submit" className='readbtn'>
        Read white paper
      </Button>

      <Button variant="primary" type="submit" className='pdfbtn'>
        Download as pdf
      </Button>
     </div>
    <p>By submitting this form, you will receive information, tips, and promotions. To learn more, see our Privacy Policy.</p>
    </Form>
</div>








</>
  )
}
