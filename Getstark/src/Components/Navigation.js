import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import '../assets/style/Navigation.css'



export default function Navigation() {
  return (
    <>


      <div className="navigationbardiv">
        <Navbar   expand="lg" className="bg-body-tertiary navigationbar">
          <Container fluid>
            <Navbar.Brand to="#">
              <Link className='nav-img' to={"/frontpage"}><img src={require('../assets/images/34.ico')} alt="img loading" /></Link>

            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll
              >



                <NavDropdown title="USE CASES" className='linkcolor ' id="navbarScrollingDropdown"  >

                  <div className="outer">
                    <div className="resourcedropdown">

                      <div className="drop1">
                        <Link to="/usdesigners" className='rdlink'>
                          <span className="sp1">
                            <h6 className="sp1-h6">Designers</h6>
                            <p className="sp1-p">Read about the latest updates to Stark and articles from our team.</p>
                          </span>
                        </Link>
                        <Link to="/developers" className='rdlink'>
                          <span className="sp1">
                            <h6 className="sp1-h6">Developers</h6>
                            <p className="sp1-p">Learn about all things accessibility and inclusive design.</p>
                          </span>


                        </Link>

                      </div>



                      <div className="drop2">
                        <Link to="/usproductmanager" className='rdlink'>
                          <span className="sp1">
                            <h6 className="sp1-h6">Product Managers</h6>
                            <p className="sp1-p">Find answers to your questions plus tips and tricks on how to use Stark.</p>
                          </span>
                        </Link>
                        <Link to="/uscompliancemanager" className='rdlink'>
                          <span className="sp1">
                            <h6 className="sp1-h6">Compliance Managers</h6>
                            <p className="sp1-p">Join more than 3,500 accessibility folks from around the world.</p>
                          </span>

                        </Link>
                      </div>
                      <Link to="/whitepaper"> <img src={require('../assets/images/usecasedrop.png')} alt="" className='usecasedropimg' /></Link>

                    </div>
                  </div>



                 
                </NavDropdown>

                <Link className='nav-link' to={"/pricing"}>PRICING</Link>
                <Link className='nav-link' to={"/supportcenter"}>SUPPORT</Link>


                <NavDropdown title="RESOURCES" id="navbarScrollingDropdown">
                  
      <div className="outer">
        <div className="resourcedropdown">
          <Link to="https://www.getstark.co/blog/introducing-sidekick-v2-and-stark-premium/" > <img src={require('../assets/images/ccc.png')} alt="" className='requiredropimg' /></Link>
          <div className="drop1">
            <Link to="/blog" className='rdlink'><span className="sp1">
              <h6 className="sp1-h6">Blog</h6>
              <p className="sp1-p">Read about the latest updates to Stark and articles from our team.</p>
            </span></Link>
            <Link to="/library" className='rdlink'>
              <span className="sp1">
                <h6 className="sp1-h6">Library</h6>
                <p className="sp1-p">Learn about all things accessibility and inclusive design.</p>
              </span>
            </Link>
            <Link to="/wcagexplained" className='rdlink'>
              <span className="sp1">
                <h6 className="sp1-h6">The WCAG Explained</h6>
                <p className="sp1-p">Simple explanations of every WCAG criteria.</p>
              </span>

            </Link>
          </div>



          <div className="drop2">
            <Link to="/supportcenter" className='rdlink'>
              <span className="sp1">
                <h6 className="sp1-h6">Support Center</h6>
                <p className="sp1-p">Find answers to your questions plus tips and tricks on how to use Stark.</p>
              </span>
            </Link>
            <Link to="/resourcecommunity" className='rdlink'>
              <span className="sp1">
                <h6 className="sp1-h6">Community</h6>
                <p className="sp1-p">Join more than 3,500 accessibility folks from around the world.</p>
              </span>
            </Link>
            <Link to="/whitepaper" className='rdlink'>
              <span className="sp1">
                <h6 className="sp1-h6">Stark White Paper</h6>
                <p className="sp1-p">Managing and growing your accessibility posture at any scale.</p>
              </span>


            </Link>
          </div>


        </div>
      </div>


                 
                </NavDropdown>

              </Nav>
              <Form className="d-flex">

                <Link to='https://account.getstark.co/sign-in'><Button variant="outline-success" id='navbtn1'>LOG IN</Button></Link>
                <Link to='https://account.getstark.co/business-trial'><Button variant="outline-success" id='navbtn2'>START FREE TRIAL</Button></Link>
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </>
  )
}
