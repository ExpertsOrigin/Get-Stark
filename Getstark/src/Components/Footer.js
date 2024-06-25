import React from 'react'
import '../assets/style/Footer.css'
export default function Footer() {
  return (
    <>
      <div className="footer">
        <div className="footer1 ">
          <div className="footer1text"><ul className='footerul'><h6>USE CASES</h6><li>For Designers</li><li>For Developers</li><li>For Product Managers</li><li>For Compliance Managers</li></ul></div>
          <div className="footer1text"><ul className='footerul'><h6>RESOURCES</h6><li>Blog</li><li>Library</li><li>Release Notes</li><li>Slack Community</li></ul></div>
          <div className="footer1text"><ul className='footerul'><h6>HELP</h6><li>My Account</li><li>Support Docs</li><li>Contact Us</li><li>Feature Requests</li></ul></div>
          <div className="footer1text"><ul className='footerul'><h6>COMPANY</h6><li>Stark Framework</li><li>Privacy Policy</li><li>Terms of Service</li><li>Code of Conduct</li></ul></div>

          <div className="footer1text"><ul className='footerul'><h6>SECURITY</h6><li>Security Overview</li><li>Cookie Policy</li><li>GDPR</li><li>Status</li></ul></div>
          <div className="footer1text"><ul className='footerul'><h6>DESIGN INTEGRATIONS</h6><li>Stark for Figma</li><li>Stark for FigJam</li><li>Stark for Sketch</li><li>Stark for Adobd XD</li></ul></div>
          <div className="footer1text"><ul className='footerul'><h6>DEVELOPER INTEGRATIONS</h6><li>Stark for Chrome</li><li>Stark for Firefox</li><li>Stark for Edge</li><li>Stark for Safari</li><li>Stark for Arc</li><li>Stark for Brave</li></ul></div>

        </div>


        <div className="lasticons">
          <div className="lasticonimg">
            <img src={require('../assets/images/54.png')} alt="" />
            <img src={require('../assets/images/57.png')} alt="" />
            <img src={require('../assets/images/51.png')} alt="" />
            <img src={require('../assets/images/44.png')} alt="" />
            <img src={require('../assets/images/50.png')} alt="" />

          </div>

          <p className="lasticonp">MADE REMOTELY WITH LOVE BY STARK LAB, INC. COPYRIGHT 2023</p>
        </div>



      </div>



    </>
  )
}
