import React from 'react'
import '../assets/style/Resourcecommunity.css'
import Card from 'react-bootstrap/Card';

export default function Resourcecommunity() {
    return (
        <>
            <div className="countries countrydiv">

            <div className="communityheader">
        <div className="supporttext comtext">
          <h5 className="ch-5">JOIN THE COMMUNITY</h5>
          <h1 className="ch1-1">A world built by you, for you.</h1>
          <p className="cp-1">Come talk shop in meetups, join us on social, and contribute to the evergrowing community.</p>
          <button className="usbtn1">Host a meetup</button>
                    <button className="usbtn2">Join our community</button>
                
        </div>
        
      </div>





        
        <div className="countryimages">
        <img className='cm1' src={require('../assets/images/classroom.png')} alt="" />
        <img className='cm2' src={require('../assets/images/panel-1.png')} alt="" />
        <img className='cm3' src={require('../assets/images/panel-2.png')} alt="" />
        <img className='cm4' src={require('../assets/images/friends-1.png')} alt="" />
        <img className='cm5' src={require('../assets/images/friends-2.png')} alt="" />

            
        </div>





                <h1 className="countryh1-1">Community members from over 30 different countries</h1>

                <table className='countrytable'>
                    <tbody>
                        <tr>
                            <td><img src={require('../assets/images/country(1).png')} alt="" className="tablecountryimg" />Australia</td>
                            <td><img src={require('../assets/images/country(2).png')} alt="" className="tablecountryimg" />Berlin</td>
                            <td><img src={require('../assets/images/country(3).png')} alt="" className="tablecountryimg" />India</td>
                            <td><img src={require('../assets/images/country(4).png')} alt="" className="tablecountryimg" />Canada</td>
                            <td><img src={require('../assets/images/country(5).png')} alt="" className="tablecountryimg" />America</td>
                        </tr>
                        <tr>
                            <td><img src={require('../assets/images/country(6).png')} alt="" className="tablecountryimg" />Germany</td>
                            <td><img src={require('../assets/images/country(7).png')} alt="" className="tablecountryimg" />Italy</td>
                            <td><img src={require('../assets/images/country(8).png')} alt="" className="tablecountryimg" />Japan</td>
                            <td><img src={require('../assets/images/country(9).png')} alt="" className="tablecountryimg" />United Kingdom</td>
                            <td><img src={require('../assets/images/country(10).png')} alt="" className="tablecountryimg" />China</td>
                        </tr>
                        <tr>
                            <td><img src={require('../assets/images/country(11).png')} alt="" className="tablecountryimg" />Austin</td>
                            <td><img src={require('../assets/images/country(12).png')} alt="" className="tablecountryimg" />Malta</td>
                            <td><img src={require('../assets/images/country(13).png')} alt="" className="tablecountryimg" />Iceland</td>
                            <td><img src={require('../assets/images/country(14).png')} alt="" className="tablecountryimg" />Switzerland</td>
                            <td><img src={require('../assets/images/country(15).png')} alt="" className="tablecountryimg" />Romania</td>
                        </tr>
                        <tr>
                            <td><img src={require('../assets/images/country(16).png')} alt="" className="tablecountryimg" />Jamaica</td>
                            <td><img src={require('../assets/images/country(17).png')} alt="" className="tablecountryimg" />Greece</td>
                            <td><img src={require('../assets/images/country(18).png')} alt="" className="tablecountryimg" />Canada</td>
                            <td><img src={require('../assets/images/country(19).png')} alt="" className="tablecountryimg" />Belgium</td>
                            <td><img src={require('../assets/images/country(20).png')} alt="" className="tablecountryimg" />Bahrain</td>
                        </tr>
                        <tr>
                            <td><img src={require('../assets/images/country(21).png')} alt="" className="tablecountryimg" />Sweden</td>
                            <td><img src={require('../assets/images/country(10).png')} alt="" className="tablecountryimg" />Luxemburg</td>
                            <td><img src={require('../assets/images/country(12).png')} alt="" className="tablecountryimg" />Denmark</td>
                            <td><img src={require('../assets/images/country(15).png')} alt="" className="tablecountryimg" />Egypt</td>

                        </tr>

                    </tbody>
                </table>



                <table className='paultable'>
                    <tbody>
                        <tr>
                            <td className='pauldata'>“One of my favorite things this year has been conversation with the people in the community Stark is building. Come join the Slack group - it’s seriously the best!”</td>
                            <td className='pauldata'>“Cat, just a little appreciation note about how you run Stark's community. IMO it's one of the best-run content brands out there, from the tweets to the newsletter. Amazing work to you + the team!”</td>
                            <td className='pauldata'>“Oh, getting on this for sure! Thank you, Cat, for all you do for this community and those of us with accessibility needs.”</td>
                        </tr>
                        <tr>
                            <td><img className='paulimg' src={require('../assets/images/caitlyn.jpeg')} alt="" />Caityln </td>
                            <td><img className='paulimg' src={require('../assets/images/paul.jpeg')} alt="" />Paul Mederos</td>
                            <td><img className='paulimg' src={require('../assets/images/derek.jpeg')} alt="" />Derek Torsani</td>

                        </tr>
                    </tbody>
                </table>


                <h1 className="hostingh1-1">Hosting and Joining Stark Meetups</h1>
                <div className="hosting">

                    <Card style={{ width: '30rem' }} className='hostingmycards'>

                        <Card.Body>
                            <h5 className="hostingh5">WHAT IT IS</h5>
                            <Card.Title className='hostingtitle'>Meetups are places to amplify topics</Card.Title>
                            <Card.Text className='hostingtext'>
                                Whether it’s talking shop or educating others, this is the place where we get to speak about and amplify different important topics.
                            </Card.Text>

                        </Card.Body>
                    </Card>
                    <Card style={{ width: '30rem' }} className='hostingmycards'>

                        <Card.Body>
                            <h5 className="hostingh5">BENEFITS</h5>
                            <Card.Title className='hostingtitle'>Spread knowledge and engage others</Card.Title>
                            <Card.Text className='hostingtext'>
                                Hosting meetups has many benefits including giving our community the platform to spread the knowledge that they’ve acquired with so many others.
                            </Card.Text>

                        </Card.Body>
                    </Card>
                    <Card style={{ width: '30rem' }}>

                        <Card.Body>
                            <h5 className="hostingh5">THE GOAL</h5>
                            <Card.Title className='hostingtitle'>Building a strong community</Card.Title>
                            <Card.Text className='hostingtext'>
                                Our goal is to engage the community and hold a space where they can ask questions and learn about about accessibility, design, and much more.
                            </Card.Text>

                        </Card.Body>
                    </Card>
                    <Card style={{ width: '30rem' }}>

                        <Card.Body>
                            <h5 className="hostingh5">HOW TO HOST</h5>
                            <Card.Title className='hostingtitle'>Get in touch with us</Card.Title>
                            <Card.Text className='hostingtext'>
                                Want to host a meetup of your own? We’d love to hear everything you have to say. Reach out to us and we’ll get you all set up!
                            </Card.Text>

                        </Card.Body>
                    </Card>

                </div>



            <h1 className="globalh1">Become a part of our global community</h1>
            <div className="socialmedia">
            <a href=""><img className='socialimg' src={require('../assets/images/youtube.png')} alt="" /><br/> Youtube</a>
            <a href=""><img className='socialimg' src={require('../assets/images/twitter.png')} alt="" /><br/> Twitter</a>
            <a href=""><img className='socialimg' src={require('../assets/images/slack.png')} alt="" /><br/> Slack</a>
            <a href=""><img className='socialimg' src={require('../assets/images/instagram.png')} alt="" /><br/> Instagram</a>
            <a href=""><img className='socialimg' src={require('../assets/images/meetup.png')} alt="" /><br/> Meetup</a>
            </div>


<div className="communitylast">

    <div className='lasttext'>
        <h1 className="lasttexth1">Get involved with the Stark team</h1>
        <p className="lasttextp">We love hearing from all of you and are always looking for new ways to expand and collaborate with our community. Like what we’re up to and want to contribute? Get involved by partnering with us or contributing a resource!</p>
        <button className='lastbtn1'>Become a partner</button>
        <button className='lastbtn2'>Contribute a resource</button>
    </div>
    <div className='lastimg'><img className='lastimg1' src={require('../assets/images/100.png')} alt="" /></div>
</div>










            </div>



        </>


    )
}
