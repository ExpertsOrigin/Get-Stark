import React from 'react'
import '../assets/style/Pricing.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


export default function Pricing() {
    return (
        <>
            {/* @@@@  section = one  @@@@ */}

            <section className="sone">
                <h1 className="soneh1-1">Pricing Plans</h1>

                <p className="sonep1">
                    Whether you're a small but mighty team, or 100,000 strong, we’ve got a plan to support what you need. Sign up and get started today.
                </p>

                <div className="sonecards1">



                    <div className="mycard1">
                        <Card className='pricingcards' style={{ width: '18rem' }}>
                            <Card.Body>
                                <Card.Title>Starter</Card.Title>
                                <Card.Text>
                                    For individuals getting started with accessibility.
                                </Card.Text>
                                <Card.Title>Free</Card.Title>
                                <Card.Text>
                                    Forever
                                </Card.Text>
                                <Button variant="primary">Create a free account</Button>
                                <Card.Text>Access to all of Stark's non-automated tooling</Card.Text>
                                <Card.Text>Smart Suggestions</Card.Text>
                                <Card.Text>WCAG Scans in browser</Card.Text>
                                <Card.Text>Accessibility Checklist widget in FigJam</Card.Text>
                                <Card.Text>Access to Slack Community</Card.Text>

                            </Card.Body>
                        </Card>
                    </div>




                    <div className="mycard2">
                        <Card className='pricingcards' style={{ width: '18rem' }}>
                            <Card.Body>
                                <Card.Title>Preminum</Card.Title>
                                <Card.Text>
                                    For individuals looking to automate and accelerate accessibility.
                                </Card.Text>
                                <Card.Title>$180</Card.Title>
                                <Card.Text>
                                    per year (or $18 paid monthly)
                                </Card.Text>
                                <Button variant="primary">Purchase Premium</Button>
                                <Card.Text>Everything in Starter, plus...</Card.Text>
                                <Card.Text>Sidekick to auto-remediate design issues with AI suggestions</Card.Text>
                                <Card.Text>1 Project with assets</Card.Text>
                                <Card.Text>Real-time reports and insights</Card.Text>
                                <Card.Text>Automatic WCAG scans and reports in browser</Card.Text>
                                <Card.Text>Live code highlighting in browser web dev console</Card.Text>


                            </Card.Body>
                        </Card>
                    </div>

                    <div className="mycard3" id='card3border'>
                        <Card className='pricingcards' style={{ width: '18rem' }}>
                            <Card.Body>
                                <Card.Title>Business</Card.Title>
                                <Card.Text>
                                    For smaller teams needing to comply with confidence.
                                </Card.Text>
                                <Card.Title>$198</Card.Title>
                                <Card.Text>
                                    per user / year
                                </Card.Text>
                                <Button variant="primary">Start a free 30-day trial</Button>
                                <Card.Text>Everything in Premium, plus...</Card.Text>
                                <Card.Text>Unlimited Projects for collaboration across design, code, PM, and QA</Card.Text>
                                <Card.Text>Shared real-time accessibility reports and insights for Figma files, code repos and live URLs</Card.Text>
                                <Card.Text>Centralized team management and admin</Card.Text>
                                <Card.Text>Consolidated billing</Card.Text>
                                <Card.Text>Customizable Add-Ons, such as SSO, Ticketing integration, and Compliance Center</Card.Text>

                            </Card.Body>
                        </Card>
                    </div>



                </div>

                <div className="soneenterprise">
                    <h3 className='enterpriseh3'>Enterprise</h3>
                    <p className="enterprisep">Scaling organizations with custom workflows and security.</p>
                    <button className="enterprisebtn">Talk to Sales</button>


                    <table className='comparing  enterprisetable'>
                        <tbody>
                            <tr>
                                <td className='enterprisetabletr'><i className="fa-solid fa-circle-check"></i> Everything in Business, plus...</td>
                                <td className='enterprisetabletr'><i className="fa-solid fa-circle-check"></i> Dedicated enterprise account manager and priority support</td>
                                <td className='enterprisetabletr'><i className="fa-solid fa-circle-check"></i> Enterprise-grade security, SOC2 and GDPR certified</td>
                            </tr>
                            <tr>
                                <td className='enterprisetabletr' ><i className="fa-solid fa-circle-check"></i> Compliance Center to manage accessibility posture</td>
                                <td className='enterprisetabletr' ><i className="fa-solid fa-circle-check"></i> Customizable terms and security reviews</td>
                            </tr>
                        </tbody>
                    </table>

                </div>


                <div className="sonebusinessplan">
                    <h1 className="soneplanh1">Business Plan Add-Ons</h1>
                    <p className="soneplanp1">Pick a plan and add-ons that fits your needs. All our plans are flexible and can be changed at any time.</p>

                    <div className="plancards">

                        <div className="plancard1">
                            <Card style={{ width: '21.5rem' }}>
                                <Card.Img variant="top" className='cardsimages' src={require('../assets/images/73.png')} />
                                <Card.Body>
                                    <Card.Title>Single Sign On (SSO)</Card.Title>
                                    <Card.Text>
                                        Manage your entire Stark team with support for nearly every identity provider. Starting at 10 users.


                                    </Card.Text>
                                    <Card.Title>$84 per user / year</Card.Title>
                                </Card.Body>
                            </Card>
                        </div>



                        <div className="plancard1">
                            <Card style={{ width: '21.5rem' }}>
                                <Card.Img variant="top" className='cardsimages' src={require('../assets/images/74.png')} />
                                <Card.Body>
                                    <Card.Title>Ticketing Integration</Card.Title>
                                    <Card.Text>
                                        Track accessibility issues across design and development with your existing ticketing system. Starting at 10 users.


                                    </Card.Text>
                                    <Card.Title>$84 per user / year</Card.Title>
                                </Card.Body>
                            </Card>
                        </div>


                        <div className="plancard1">
                            <Card style={{ width: '21.5rem' }}>
                                <Card.Img variant="top" className='cardsimages' src={require('../assets/images/72.png')} />
                                <Card.Body>
                                    <Card.Title>Compliance Center</Card.Title>
                                    <Card.Text>
                                        Monitor and manage the accessibility posture of your entire organization with evidence-based tracking.


                                    </Card.Text>
                                    <Card.Title>$5,580 per framework / year</Card.Title>
                                </Card.Body>
                            </Card>
                        </div>
                    </div>
                </div>


                <div className="compareplan">
                    <h1 className="compareplanh1">Compare Plans</h1>
                    <p className="comparep1">Check out all the features by plan to determine what fits your needs of you or your team.</p>


                    <div className="comparetable">

                        <table className='comparing'>
                            <tbody>

                                <div className="tablediv">
                                    <h2 className="tableh2-4">
                                        Design
                                    </h2>
                                    <p className="tablep-1">
                                        Use Stark in Figma, Sketch and Adobe XD to fix over 90% of accessibility issues in the design phase.
                                    </p>
                                </div>

                                <tr>
                                    <td className='comparetd'>Sidekick AI Assistant: 10x faster accessibility workflow</td>
                                    <td><i className="fa-solid fa-minus"></i></td>
                                    <td><i className="fa-solid fa-circle-check"></i></td>
                                    <td><i className="fa-solid fa-circle-check"></i></td>
                                    <td><i className="fa-solid fa-circle-check"></i></td>
                                </tr>


                                <tr>
                                    <td>AI-powered scanning of frames and pages				</td>
                                    <td><i className="fa-solid fa-minus"></i></td>
                                    <td><i className="fa-solid fa-circle-check"></i></td>
                                    <td><i className="fa-solid fa-circle-check"></i></td>
                                    <td><i className="fa-solid fa-circle-check"></i></td>
                                </tr>


                                <tr>
                                    <td>Automatic Headings annotations</td>
                                    <td><i className="fa-solid fa-minus"></i></td>
                                    <td><i className="fa-solid fa-circle-check"></i></td>
                                    <td><i className="fa-solid fa-circle-check"></i></td>
                                    <td><i className="fa-solid fa-circle-check"></i></td>
                                </tr>


                                <tr>
                                    <td>Contrast Checker</td>
                                    <td><i className="fa-solid fa-circle-check"></i></td>
                                    <td><i className="fa-solid fa-circle-check"></i></td>
                                    <td><i className="fa-solid fa-circle-check"></i></td>
                                    <td><i className="fa-solid fa-circle-check"></i></td>
                                </tr>


                                <tr>
                                    <td>Vision Simulator & Generator</td>
                                    <td><i className="fa-solid fa-circle-check"></i></td>
                                    <td><i className="fa-solid fa-circle-check"></i></td>
                                    <td><i className="fa-solid fa-circle-check"></i></td>
                                    <td><i className="fa-solid fa-circle-check"></i></td>
                                </tr>


                                <tr>
                                    <td>Typography Analysis</td>
                                    <td><i className="fa-solid fa-circle-check"></i></td>
                                    <td><i className="fa-solid fa-circle-check"></i></td>
                                    <td><i className="fa-solid fa-circle-check"></i></td>
                                    <td><i className="fa-solid fa-circle-check"></i></td>
                                </tr>


                                <tr>
                                    <td>Touch Targets Analysis</td>
                                    <td><i className="fa-solid fa-circle-check"></i></td>
                                    <td><i className="fa-solid fa-circle-check"></i></td>
                                    <td><i className="fa-solid fa-circle-check"></i></td>
                                    <td><i className="fa-solid fa-circle-check"></i></td>
                                </tr>


                                <tr>
                                    <td>Alt-Text Annotations</td>
                                    <td><i className="fa-solid fa-circle-check"></i></td>
                                    <td><i className="fa-solid fa-circle-check"></i></td>
                                    <td><i className="fa-solid fa-circle-check"></i></td>
                                    <td><i className="fa-solid fa-circle-check"></i></td>
                                </tr>


                                <tr>
                                    <td>Headings Annotations</td>
                                    <td><i className="fa-solid fa-circle-check"></i></td>
                                    <td><i className="fa-solid fa-circle-check"></i></td>
                                    <td><i className="fa-solid fa-circle-check"></i></td>
                                    <td><i className="fa-solid fa-circle-check"></i></td>
                                </tr>


                                <tr>
                                    <td>Landmarks Annotations</td>
                                    <td><i className="fa-solid fa-circle-check"></i></td>
                                    <td><i className="fa-solid fa-circle-check"></i></td>
                                    <td><i className="fa-solid fa-circle-check"></i></td>
                                    <td><i className="fa-solid fa-circle-check"></i></td>
                                </tr>


                                <tr>
                                    <td>Focus Order Annotations</td>
                                    <td><i className="fa-solid fa-circle-check"></i></td>
                                    <td><i className="fa-solid fa-circle-check"></i></td>
                                    <td><i className="fa-solid fa-circle-check"></i></td>
                                    <td><i className="fa-solid fa-circle-check"></i></td>
                                </tr>

                                <h2 className="tableh2-4">Development</h2>
                                <p className="tablep-2">Use Stark in the browser and integrated into your Github workflow to test accessibility both manually and fully automated.</p>

                                Development
                                <tr>
                                    <td>GitHub Integration with Continuous Monitoring</td>
                                    <td><i className="fa-solid fa-circle-check"></i></td>
                                    <td><i className="fa-solid fa-circle-check"></i></td>
                                    <td><i className="fa-solid fa-circle-check"></i></td>
                                    <td><i className="fa-solid fa-circle-check"></i></td>
                                </tr>


                                <tr>
                                    <td>Live URL Scanning</td>
                                    <td><i className="fa-solid fa-circle-check"></i></td>
                                    <td><i className="fa-solid fa-circle-check"></i></td>
                                    <td><i className="fa-solid fa-circle-check"></i></td>
                                    <td><i className="fa-solid fa-circle-check"></i></td>
                                </tr>


                                <tr>
                                    <td>Automatic WCAG Audit</td>
                                    <td><i className="fa-solid fa-circle-check"></i></td>
                                    <td><i className="fa-solid fa-circle-check"></i></td>
                                    <td><i className="fa-solid fa-circle-check"></i></td>
                                    <td><i className="fa-solid fa-circle-check"></i></td>
                                </tr>


                                <tr>
                                    <td>Downloadable WCAG Audit Report</td>
                                    <td><i className="fa-solid fa-circle-check"></i></td>
                                    <td><i className="fa-solid fa-circle-check"></i></td>
                                    <td><i className="fa-solid fa-circle-check"></i></td>
                                    <td><i className="fa-solid fa-circle-check"></i></td>
                                </tr>


                                <tr>
                                    <td>Web Dev Tools with Live Code Highlighting</td>
                                    <td><i className="fa-solid fa-circle-check"></i></td>
                                    <td><i className="fa-solid fa-circle-check"></i></td>
                                    <td><i className="fa-solid fa-circle-check"></i></td>
                                    <td><i className="fa-solid fa-circle-check"></i></td>
                                </tr>


                                <tr>
                                    <td>Contrast Checker with Live Preview</td>
                                    <td><i className="fa-solid fa-circle-check"></i></td>
                                    <td><i className="fa-solid fa-circle-check"></i></td>
                                    <td><i className="fa-solid fa-circle-check"></i></td>
                                    <td><i className="fa-solid fa-circle-check"></i></td>
                                </tr>


                                <tr>
                                    <td>Typography Analysis with Live Preview</td>
                                    <td><i className="fa-solid fa-circle-check"></i></td>
                                    <td><i className="fa-solid fa-circle-check"></i></td>
                                    <td><i className="fa-solid fa-circle-check"></i></td>
                                    <td><i className="fa-solid fa-circle-check"></i></td>
                                </tr>


                                <tr>
                                    <td>Alt-Text Analysis</td>
                                    <td><i className="fa-solid fa-circle-check"></i></td>
                                    <td><i className="fa-solid fa-circle-check"></i></td>
                                    <td><i className="fa-solid fa-circle-check"></i></td>
                                    <td><i className="fa-solid fa-circle-check"></i></td>
                                </tr>


                                <tr>
                                    <td>Touch Targets Analysis</td>
                                    <td><i className="fa-solid fa-circle-check"></i></td>
                                    <td><i className="fa-solid fa-circle-check"></i></td>
                                    <td><i className="fa-solid fa-circle-check"></i></td>
                                    <td><i className="fa-solid fa-circle-check"></i></td>
                                </tr>


                                <tr>
                                    <td>Focus Order Analysis with Live Preview</td>
                                    <td><i className="fa-solid fa-circle-check"></i></td>
                                    <td><i className="fa-solid fa-circle-check"></i></td>
                                    <td><i className="fa-solid fa-circle-check"></i></td>
                                    <td><i className="fa-solid fa-circle-check"></i></td>
                                </tr>


                                <tr>
                                    <td>Landmarks Analysis with Live Preview</td>
                                    <td><i className="fa-solid fa-circle-check"></i></td>
                                    <td><i className="fa-solid fa-circle-check"></i></td>
                                    <td><i className="fa-solid fa-circle-check"></i></td>
                                    <td><i className="fa-solid fa-circle-check"></i></td>
                                </tr>


                                <tr>
                                    <td>Vision Simulator with Live Preview</td>
                                    <td><i className="fa-solid fa-circle-check"></i></td>
                                    <td><i className="fa-solid fa-circle-check"></i></td>
                                    <td><i className="fa-solid fa-circle-check"></i></td>
                                    <td><i className="fa-solid fa-circle-check"></i></td>
                                </tr>


                                <tr>
                                    <td>Headings Analysis</td>
                                    <td><i className="fa-solid fa-circle-check"></i></td>
                                    <td><i className="fa-solid fa-circle-check"></i></td>
                                    <td><i className="fa-solid fa-circle-check"></i></td>
                                    <td><i className="fa-solid fa-circle-check"></i></td>
                                </tr>


                                <tr>
                                    <td>Design-Dev Handoff in Figma Dev Mode</td>
                                    <td><i className="fa-solid fa-circle-check"></i></td>
                                    <td><i className="fa-solid fa-circle-check"></i></td>
                                    <td><i className="fa-solid fa-circle-check"></i></td>
                                    <td><i className="fa-solid fa-circle-check"></i></td>
                                </tr>
                                <h2 className="tableh2-4">Project Management and Compliance</h2>
                                <p className="tablep-3">Proactively manage accessibility end-to-end across your entire company without compromising velocity and compliance.</p>

                                <tr>
                                    <td>Compliance Center</td>
                                    <td><i className="fa-solid fa-minus"></i></td>
                                    <td><i className="fa-solid fa-minus"></i></td>
                                    <td><i className="fa-solid fa-plus"></i></td>
                                    <td><i className="fa-solid fa-circle-check"></i></td>
                                </tr>

                                <tr>
                                    <td>W3C Maturity Model Framework</td>
                                    <td><i className="fa-solid fa-minus"></i></td>
                                    <td><i className="fa-solid fa-minus"></i></td>
                                    <td><i className="fa-solid fa-plus"></i></td>
                                    <td><i className="fa-solid fa-circle-check"></i></td>
                                </tr>
                                <tr>
                                    <td>Time-stamped controls for audit purposes</td>
                                    <td><i className="fa-solid fa-minus"></i></td>
                                    <td><i className="fa-solid fa-minus"></i></td>
                                    <td><i className="fa-solid fa-plus"></i></td>
                                    <td><i className="fa-solid fa-circle-check"></i></td>
                                </tr>

                                <tr>
                                    <td>Shared team projects for collaboration</td>
                                    <td><i className="fa-solid fa-minus"></i></td>
                                    <td><i className="fa-solid fa-minus"></i></td>
                                    <td><i className="fa-solid fa-circle-check"></i></td>
                                    <td><i className="fa-solid fa-circle-check"></i></td>
                                </tr>

                                <tr>
                                    <td>Unlimited real-time Reports & Insights</td>
                                    <td><i className="fa-solid fa-minus"></i></td>
                                    <td><i className="fa-solid fa-minus"></i></td>
                                    <td><i className="fa-solid fa-circle-check"></i></td>
                                    <td><i className="fa-solid fa-circle-check"></i></td>
                                </tr>
                                <tr>
                                    <td>Shareable reports</td>
                                    <td><i className="fa-solid fa-minus"></i></td>
                                    <td><i className="fa-solid fa-minus"></i></td>
                                    <td><i className="fa-solid fa-circle-check"></i></td>
                                    <td><i className="fa-solid fa-circle-check"></i></td>
                                </tr>

                                <tr>
                                    <td>Historic report data per asset and project</td>
                                    <td><i className="fa-solid fa-minus"></i></td>
                                    <td><i className="fa-solid fa-minus"></i></td>
                                    <td><i className="fa-solid fa-circle-check"></i></td>
                                    <td><i className="fa-solid fa-circle-check"></i></td>
                                </tr>


                                <tr>
                                    <td>Continuous scanning of Figma files</td>
                                    <td><i className="fa-solid fa-minus"></i></td>
                                    <td><i className="fa-solid fa-circle-check"></i></td>
                                    <td><i className="fa-solid fa-circle-check"></i></td>
                                    <td><i className="fa-solid fa-circle-check"></i></td>
                                </tr>


                                <tr>
                                    <td>Continuous scanning of GitHub repositories</td>
                                    <td><i className="fa-solid fa-minus"></i></td>
                                    <td><i className="fa-solid fa-circle-check"></i></td>
                                    <td><i className="fa-solid fa-circle-check"></i></td>
                                    <td><i className="fa-solid fa-circle-check"></i></td>
                                </tr>


                                <tr>
                                    <td>Continuous scanning of Live URLs</td>
                                    <td><i className="fa-solid fa-minus"></i></td>
                                    <td><i className="fa-solid fa-circle-check"></i></td>
                                    <td><i className="fa-solid fa-circle-check"></i></td>
                                    <td><i className="fa-solid fa-circle-check"></i></td>
                                </tr>


                                <h2 className="tableh2-4">Admin & Security</h2>
                                <p className="tablep-4">Customizability and enterprise-grade security that scales with your organization’s accessibility workflow.</p>

                                <tr>
                                    <td>Customizable terms and security reviews</td>
                                    <td><i className="fa-solid fa-minus"></i></td>
                                    <td><i className="fa-solid fa-minus"></i></td>
                                    <td><i className="fa-solid fa-minus"></i></td>
                                    <td><i className="fa-solid fa-circle-check"></i></td>
                                </tr>


                                <tr>
                                    <td>Multi-Team management</td>
                                    <td><i className="fa-solid fa-minus"></i></td>
                                    <td><i className="fa-solid fa-minus"></i></td>
                                    <td><i className="fa-solid fa-plus"></i></td>
                                    <td><i className="fa-solid fa-circle-check"></i></td>
                                </tr>


                                <tr>
                                    <td>SSO</td>
                                    <td><i className="fa-solid fa-minus"></i></td>
                                    <td><i className="fa-solid fa-minus"></i></td>
                                    <td><i className="fa-solid fa-plus"></i></td>
                                    <td><i className="fa-solid fa-circle-check"></i></td>
                                </tr>


                                <tr>
                                    <td>Beta access to latest features</td>
                                    <td><i className="fa-solid fa-minus"></i></td>
                                    <td><i className="fa-solid fa-minus"></i></td>
                                    <td><i className="fa-solid fa-plus"></i></td>
                                    <td><i className="fa-solid fa-circle-check"></i></td>
                                </tr>

                                <tr>
                                    <td>Dedicated Account Manager</td>
                                    <td><i className="fa-solid fa-minus"></i></td>
                                    <td><i className="fa-solid fa-minus"></i></td>
                                    <td><i className="fa-solid fa-plus"></i></td>
                                    <td><i className="fa-solid fa-circle-check"></i></td>
                                </tr>


                                <tr>
                                    <td>Admin Dashboard</td>
                                    <td><i className="fa-solid fa-minus"></i></td>
                                    <td><i className="fa-solid fa-minus"></i></td>
                                    <td><i className="fa-solid fa-circle-check"></i></td>
                                    <td><i className="fa-solid fa-circle-check"></i></td>
                                </tr>

                                <tr>
                                    <td>Group Billing</td>
                                    <td><i className="fa-solid fa-minus"></i></td>
                                    <td><i className="fa-solid fa-minus"></i></td>
                                    <td><i className="fa-solid fa-circle-check"></i></td>
                                    <td><i className="fa-solid fa-circle-check"></i></td>
                                </tr>
                                <tr>
                                    <td>Priority Support</td>
                                    <td><i className="fa-solid fa-minus"></i></td>
                                    <td><i className="fa-solid fa-minus"></i></td>
                                    <td><i className="fa-solid fa-circle-check"></i></td>
                                    <td><i className="fa-solid fa-circle-check"></i></td>
                                </tr>
                                <tr>
                                    <td>Sign in with Google</td>
                                    <td><i className="fa-solid fa-circle-check"></i></td>
                                    <td><i className="fa-solid fa-circle-check"></i></td>
                                    <td><i className="fa-solid fa-circle-check"></i></td>
                                    <td><i className="fa-solid fa-circle-check"></i></td>
                                </tr>
                                <tr>
                                    <td>Sign in with Email</td>
                                    <td><i className="fa-solid fa-circle-check"></i></td>
                                    <td><i className="fa-solid fa-circle-check"></i></td>
                                    <td><i className="fa-solid fa-circle-check"></i></td>
                                    <td><i className="fa-solid fa-circle-check"></i></td>
                                </tr>
                            </tbody>
                        </table>




                    </div>

                </div>

                <div className="ready">
                    <img src={require('../assets/images/26.png')} alt="" />
                    <p className="readyp"><b>Ready to give Stark a spin?</b> Kickstart your accessibility initiatives with a free trial for you and your team!</p>
                    <button>Start a free trial</button>
                </div>


            </section>



        </>
    )
}
