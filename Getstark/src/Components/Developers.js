import React from 'react'
import Card from 'react-bootstrap/Card';

export default function Developers() {
  return (
    <>
    <div className="usheader">
                <div className="ushtext pmtext">
                    <h6 className="ush6-1">FOR Developers</h6>
                    <h1 className="ush1-1 pmh1">Ready. Set. Accessible Code.</h1>
                    <p className="usp-1">Stark makes the handoff from designer to developer seamless, and accelerates the implementation of accessible code. Advanced dev tools and continuous accessibility integrations in GitHub ensure an end-to-end accessibility workflow your team actually loves – fully private and secure.</p>

                    <button className="usbtn1">Sign up for free</button>
                    <button className="usbtn2">Start a free trial</button>
                </div>
                <div className="ushimg">
                    <img src={require('../assets/images/97.png')} alt="img loading" />
                </div>
            </div>
    

    
            <div className="ussection1">
                <div className="uss1img">
                    <img src={require('../assets/images/96.png')} alt="" />
                </div>
                <h1 className="uss1h1-1 pms2h1">Advanced dev tooling that takes your accessibility up a notch</h1>
                <p className="uss1p-1">Whether you’re testing on staging or production, Stark enables you to scan for accessibility issues directly in the browser. With code highlighting for issues, live preview to test fixes, and lightning fast WCAG audits, it’s a web dev powerhouse.</p>
                <button className="uss1btn1">Get started for free</button>
            </div>



            <div className="ussection1">
                <div className="uss1img">
                    <img src={require('../assets/images/98.png')} alt="" />
                </div>
                <h1 className="uss1h1-1 pms2h1">Smoothest design to developer hand-off in the business</h1>
                <p className="uss1p-1">Whether you design in Figma, Sketch, or Adobe XD, Stark takes the guesswork out of accessibility annotations. And in Figma's Dev Mode, annotations translate directly into code snippets for developers to take over. Specs never seemed so spectacular.</p>
                <button className="uss1btn1">Get started for free</button>
            </div>



            <div className="ussection1">
                <div className="uss1img">
                    <img src={require('../assets/images/78.png')} alt="img loading" />
                </div>
                <h1 className="uss1h1-1">Real-time reports and insights to keep your projects on track</h1>
                <p className="uss1p-1">Real-time accessibility reports and insights of your design files and code repos streamline collaboration across departments in one place. Managing accessibility at scale without slowing down your team’s velocity just got rocket fuel added to it.</p>
                <button className="uss1btn1">Get started for free</button>
            </div>





            <div className="ussection1">
                <div className="uss1img">
                    <img src={require('../assets/images/79.png')} alt="img loading" />
                </div>
                <h1 className="uss1h1-1 magich">Come for the features, stay for the magic</h1>
                <div className="magic">
                    <div className="magic1">
                        <p className="magicp"><img src={require('../assets/images/80.png')} alt="" /> Vision Simulator + Generator   </p>
                        <p className="magicp"><img src={require('../assets/images/81.png')} alt="" /> Sidekick AI accessibility assistant</p>
                        <p className="magicp"><img src={require('../assets/images/82.png')} alt="" /> Contrast Checker with AI suggestions</p>
                        <p className="magicp"><img src={require('../assets/images/83.png')} alt="" /> Typography Checker                        </p>
                        <p className="magicp"><img src={require('../assets/images/84.png')} alt="" /> Touch Targets Checker</p>
                        <p className="magicp"><img src={require('../assets/images/85.png')} alt="" /> Alt-Text Annotations with AI suggestions</p>
                        <p className="magicp"><img src={require('../assets/images/86.png')} alt="" /> Landmarks Annotations</p>
                        <p className="magicp"><img src={require('../assets/images/87.png')} alt="" /> Focus Order Annotations</p>
                        <p className="magicp"><img src={require('../assets/images/88.png')} alt="" /> ARIA & Notes Annotations</p>
                        <p className="magicp"><img src={require('../assets/images/89.png')} alt="" /> Headings Annotations</p>
                    </div>

                    <div className="magic2">
                        <p className="magicp"><img src={require('../assets/images/90.png')} alt="" /> Browser Extension </p>
                        <p className="magicp"><img src={require('../assets/images/91.png')} alt="" /> Web Dev Tools with code highlighting</p>
                        <p className="magicp"><img src={require('../assets/images/92.png')} alt="" /> WCAG Audit & Report</p>
                        <p className="magicp"><img src={require('../assets/images/91.png')} alt="" /> Figma Dev Mode Hand-off</p>
                        <p className="magicp"><img src={require('../assets/images/84.png')} alt="" /> GitHub Integrations with code scanning</p>
                        <p className="magicp"><img src={require('../assets/images/89.png')} alt="" /> Projects with real-time Reports & Insights</p>
                        <p className="magicp"><img src={require('../assets/images/91.png')} alt="" /> Compliance Center</p>
                        <p className="magicp"><img src={require('../assets/images/92.png')} alt="" /> Ticketing and PM system Integrations</p>
                        <p className="magicp"><img src={require('../assets/images/87.png')} alt="" /> And so much more ...</p>

                    </div>
                </div>
            </div>





            <div className="section3fourcards">
                <h5 className="fourcardsh5">WHY STARK?</h5>

                <h1 className="section3h1-6">
                    Build and ship inclusive software, accelerate time-to-compliance.
                </h1>

                <div className="shipdive">
                    <div className="shipdivcard1"><Card style={{ width: '26rem' }}>
                        <Card.Img variant="top" className='shipcardsimg final-card-img' src={require('../assets/images/43.png')} />
                        <Card.Body>
                            <Card.Title>Increase Velocity</Card.Title>
                            <Card.Text>
                                Stark is the only end-to-end platform that helps your team find and fix accessibility issues from design and code to the live product. All this, while being up to 10x faster than any other tool in the market.
                            </Card.Text>
                        </Card.Body>
                    </Card></div>
                    <div className="shipdivcard2"><Card style={{ width: '26rem' }}>
                        <Card.Img variant="top" className='shipcardsimg final-card-img' src={require('../assets/images/20.png')} />
                        <Card.Body>
                            <Card.Title>Accelerate Compliance</Card.Title>
                            <Card.Text>
                                Reports and Insights are available in real-time for every project in Stark. Plus, time-stamped historic reports are available at any time for up-to-date compliance reporting across departments.
                            </Card.Text>
                        </Card.Body>
                    </Card></div>
                    <div className="shipdivcard3"><Card style={{ width: '26rem' }}>
                        <Card.Img variant="top" className='shipcardsimg final-card-img' src={require('../assets/images/49.png')} />
                        <Card.Body>
                            <Card.Title>Reduce Cost</Card.Title>
                            <Card.Text>
                                Stark's fully integrated solution enables fixing of accessibility issues as early as first design drafts, reducing 56% of issues that typically make it into code where remediation costs can be up 100x higher.
                            </Card.Text>
                        </Card.Body>
                    </Card></div>
                    <div className="shipdivcard4"><Card style={{ width: '26rem' }}>
                        <Card.Img variant="top" className='shipcardsimg final-card-img' src={require('../assets/images/46.png')} />
                        <Card.Body>
                            <Card.Title>Mitigate Risk</Card.Title>
                            <Card.Text>
                                The entire Stark platform and all our integrations are built with enterprise-grade security. From SSO and our fully SOC2-certified platform stack to our zero-trust policy that underpins all our tool.
                            </Card.Text>
                        </Card.Body>
                    </Card></div>
                </div>


            </div>





            <div className="ussection3">

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
                    </Card></div>
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
                </div>
                <button className="section3btn1">Get started for free</button>


            </div>



            <div className="ready">
                        <img src={require('../assets/images/26.png')} alt="" />
                        <p className="readyp"><b>Ready to give Stark a spin?</b> Kickstart your accessibility initiatives with a free trial for you and your team!</p>
                        <button>Start a free trial</button>
                    </div>




    
    
    </>
  )
}
