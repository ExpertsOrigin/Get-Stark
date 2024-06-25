import React from 'react'
import "../assets/style/Frontpage.css"
// import frontimg1 from '../assets/Data/frontimg1'
// import frontimg2 from '../assets/Data/frontimg2'
// import frontimg3 from '../assets/Data/frontimg3'
// import frontimg4 from '../assets/Data/frontimg4'

import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

export default function Frontpage({ state }) {
  return (
    <>


      {/* @@@@   Section 1 @@@@ */}

      <section className="section1">
        <h1 className="section1h1">SuperCharge Accessibility</h1>
        <p className="section1p1">The world's best companies-from startup to the Fortune 100 - trust Stark to accelerate time to digital accessibility compliance.</p>

        <button className='section1btn1'>Sign up for free</button>
        <img src={require('../assets/images/41.png')} alt='img loading' className='section1img1' />

      </section>


      {/* @@@@ Section 2 @@@@ */}

      <section className="section2">
        <img src={require('../assets/images/52.png')} alt="" />
      </section>


      {/* @@@@  Section 3  @@@@ */}

      <section className="section3">
        <h1 className="section3h1">
          Speed up your accessibility workflow from months to minutes
        </h1>
        <p className="section3p1">
          Designers, developers, product managers, and accessibility experts at 30,000+ companies use Stark's suite of integrated accessibility tools in their daily product development cycle. Join them today!
        </p>
        <div className="logos">
          <div className="runningbar">
            <img src={require('../assets/images/2.png')} alt="img loading" />
            <img src={require('../assets/images/17.png')} alt="img loading" />
            <img src={require('../assets/images/4.png')} alt="img loading" />
            <img src={require('../assets/images/5.png')} alt="img loading" />
            <img src={require('../assets/images/6.png')} alt="img loading" />
            <img src={require('../assets/images/7.png')} alt="img loading" />
            <img src={require('../assets/images/8.png')} alt="img loading" />
            <img src={require('../assets/images/9.png')} alt="img loading" />
            <img src={require('../assets/images/10.png')} alt="img loading" />
            <img src={require('../assets/images/11.png')} alt="img loading" />
            <img src={require('../assets/images/12.png')} alt="img loading" />
            <img src={require('../assets/images/13.png')} alt="img loading" />
            <img src={require('../assets/images/14.png')} alt="img loading" />

          </div>

        </div>
        <div className="fivestars">
          <img src={require('../assets/images/1.png')} alt="img loading" />
          <span className="fivestarspan">
            <img src={require('../assets/images/19.png')} alt="img loading" />
            4.6 / 5 STARS ON G2

          </span>
          <h2 className="fivestarh2">
            “Stark revolutionized my Accessibility Practice.”
          </h2>
        </div>

        <h5 className="section3h5">
          EXPLORE THE STARK PLATFORM
        </h5>
        <h1 className="section3h1-2">
          The only end-to-end solution from design and code to live product
        </h1>

        <div className="section3cards">
          <div className="card1"> <Card style={{ width: '14.3rem' }}>
            <Card.Img variant="top" src={require('../assets/images/47.png')} />
            <Card.Body>
              <Card.Text>
                SPEED UP DESIGN & DEV
              </Card.Text>
              <Card.Title>Plug-ins & Integrations</Card.Title>
              <Card.Text>
                Meet your team where they work, from Figma and Sketch to GitHub and their browser of choice. An accessibility workflow built right into the tools they love. No need for them to switch or relearn.
              </Card.Text>

            </Card.Body>
          </Card>
          </div>
          <div className="card1"> <Card style={{ width: '15rem' }}>
            <Card.Img variant="top" src={require('../assets/images/48.png')} />
            <Card.Body>
              <Card.Text>
                IMPROVE COLLABORATION
              </Card.Text>
              <Card.Title>Projects, Reports & Insights</Card.Title>
              <Card.Text>
                Manage your team’s accessibility workflow in the Stark Web app. Monitor and manage progress with real-time reports and insights across all your projects from design to code.
              </Card.Text>

            </Card.Body>
          </Card></div>
          <div className="card1"> <Card style={{ width: '14.3rem' }}>
            <Card.Img variant="top" src={require('../assets/images/22.png')} />
            <Card.Body>
              <Card.Text>
                ACCELERATE WORKFLOWS
              </Card.Text>
              <Card.Title>AI-powered Automation</Card.Title>
              <Card.Text>
                Automated continuous scanning of design files and code repositories combined with AI-powered suggestions accelerates finding and fixing of accessibility issues in record time.
              </Card.Text>

            </Card.Body>
          </Card></div>
          <div className="card1"> <Card style={{ width: '14rem' }}>
            <Card.Img variant="top" src={require('../assets/images/26.png')} />
            <Card.Body>
              <Card.Text>
                MANAGE AT SCALE
              </Card.Text>
              <Card.Title>Compliance Center</Card.Title>
              <Card.Text>
                Manage your company's accessibility posture in one central hub. Assign and document individual controls based on the regulatory frameworks. Access evidence for easy auditing.
              </Card.Text>

            </Card.Body>
          </Card></div>
        <button className="section3btn1">Get started for free</button>
        </div>

        <div className="ecommerceimg">
          <img src={require('../assets/images/27.webp')} alt="" className='commerceimg' />
        </div>

        <h1 className="section3h1-3">
          Continuous Accessibility for your entire team
        </h1>
        <p className="section3p2">
          Get real-time reports that help manage accessibility at scale without slowing down the velocity of your team. Stark gives your up-to-date insights into the accessibility of all your design files, code repositories and live sites or applications, all in one central place for efficient collaboration across departments.
        </p>
        <button className="section3btn4">
          Start a free trial
        </button>

        <div className="section3img5">
          <img src={require('../assets/images/45.png')} alt="" />
        </div>

        <h1 className="section3h1-4">
          Integrated into the tools you already use
        </h1>

        <p className="section3p3">
          Whether it's Figma or Sketch, your favorite web browser, or even GitHub and beyond, Stark integrates into the tools your team already uses for maximum efficiency and no learning curve. Our AI-powered integrations help your teammates find and fix accessibility issues as early as the first designs and all across the development cycle.
        </p>

        <button className="section3btn4">
          Get started for free
        </button>


        <div className="section3img5">
          <img src={require('../assets/images/32.png')} alt="" />
        </div>

        <h1 className="section3h1-5">
          An enterprise-grade platform you can trust
        </h1>

        <p className="section3p4">
          The entire Stark platform and all our integrations are built with enterprise-grade security. From SSO and our fully GDPR / SOC2-certified platform to our zero-trust policy that underpins all our tool integrations, we ensure maximum security and privacy for our customers’ data and IP.
        </p>


        <button className="section3btn4">
          Start a free trial
        </button>


        <div className="section3fourcards">
          <h5 className="fourcardsh5">WHY STARK?</h5>

          <h1 className="section3h1-6">
            Build and ship inclusive software, accelerate time-to-compliance.
          </h1>

          <div className="shipdive">
            <div className="shipdivcard1"><Card className='divingcards' style={{ width: '26rem' }}>
              <Card.Img variant="top" className='shipingimg' src={require('../assets/images/43.png')} />
              <Card.Body>
                <Card.Title>Increase Velocity</Card.Title>
                <Card.Text>
                  Stark is the only end-to-end platform that helps your team find and fix accessibility issues from design and code to the live product. All this, while being up to 10x faster than any other tool in the market.
                </Card.Text>
              </Card.Body>
            </Card></div>
            <div className="shipdivcard2"><Card className='divingcards' style={{ width: '26rem' }}>
              <Card.Img variant="top" className='shipingimg' src={require('../assets/images/20.png')} />
              <Card.Body>
                <Card.Title>Accelerate Compliance</Card.Title>
                <Card.Text>
                  Reports and Insights are available in real-time for every project in Stark. Plus, time-stamped historic reports are available at any time for up-to-date compliance reporting across departments.
                </Card.Text>
              </Card.Body>
            </Card></div>
            <div className="shipdivcard3"><Card className='divingcards' style={{ width: '26rem' }}>
              <Card.Img variant="top" className='shipingimg' src={require('../assets/images/49.png')} />
              <Card.Body>
                <Card.Title>Reduce Cost</Card.Title>
                <Card.Text>
                  Stark's fully integrated solution enables fixing of accessibility issues as early as first design drafts, reducing 56% of issues that typically make it into code where remediation costs can be up 100x higher.
                </Card.Text>
              </Card.Body>
            </Card></div>
            <div className="shipdivcard4"><Card className='divingcards' style={{ width: '26rem' }}>
              <Card.Img variant="top" className='shipingimg' src={require('../assets/images/46.png')} />
              <Card.Body>
                <Card.Title>Mitigate Risk</Card.Title>
                <Card.Text>
                  The entire Stark platform and all our integrations are built with enterprise-grade security. From SSO and our fully SOC2-certified platform stack to our zero-trust policy that underpins all our tool.
                </Card.Text>
              </Card.Body>
            </Card></div>
          </div>
        </div>
      </section>
      <section className="frontlast">

        <div className="showmyimg">

          {
            state.map((res) => {
              const { img } = res;

              return (

                <>
                  <img src={img} alt="" />

                </>
              )
            })
          }
        </div>
        <div className="lastitem1">

        </div>
        <div className="lastitem2">
        </div>
      </section>
      <section className="lastsection">
        <div className="item2text">
          <div className="emptydiv"></div>
          <div className="textdiv">
            <p className="textdivp-1">STREAMLINING WORKFLOWS, CONSOLIDATING TOOLS</p>
            <h1 className="textdivh1-1">
              We scale with you across departments
            </h1>
            <div className="lastmapping">
              <Link className='last-link' to={'/frontimg1'}><div className="mymargin accountdiv lastmymargin"><h1 className="myh1">Designers</h1><p className="myp">Create accessible designs in record time right in Figma, Sketch, and Adobe XD.</p></div></Link>
              <Link className='last-link' to={'/frontimg2'}><div className="mymargin accountdiv lastmymargin"><h1 className="myh1">Developers</h1><p className="myp">Test and audit your code from early implementation to live product.</p></div></Link>
              <Link className='last-link' to={'/frontimg3'}><div className="mymargin accountdiv lastmymargin"><h1 className="myh1">Product Managers</h1><p className="myp">Manage accessibility in real-time across all your projects.</p></div></Link>
              <Link className='last-link' to={'/frontimg4'}><div className="mymargin accountdiv lastmymargin"><h1 className="myh1">Compliance Managers</h1><p className="myp">Monitor, manage and audit your accessibility posture in one place.</p></div></Link>

            </div>

          </div>
        </div>

      </section>


















    </>
  )
}
