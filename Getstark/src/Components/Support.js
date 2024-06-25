import React from 'react'
import '../assets/style/Support.css'
import { Link } from 'react-router-dom'
import account from '../assets/Data/account'
import billing from '../assets/Data/billing'
import team from '../assets/Data/team'
import privacy from '../assets/Data/privacy'
import contact from '../assets/Data/contact'

export default function Support({ state }) {
  console.log(state)
  return (
    <>
      <div className="supportheader">
        <div className="supporttext">
          <h5 className="supporth5">SUPPORT</h5>
          <h1 className="supporth1">How can we help you?</h1>
          <p className="supportp">Get answers to all your Stark-related questions with
            step-by-step guides from our Support center.</p>
        </div>
      </div>

      <div className="supportmain">
        <aside className='supportaside'>
          <Link className='supportlinks' to={'/Getstarted'}>Getting started </Link>
          <Link className='supportlinks' to={'/account'}>Accounts</Link>
          <Link className='supportlinks' to={'/billing'}>Subscription and billing</Link>
          <Link className='supportlinks' to={'/team'}>Teams</Link>
          <Link className='supportlinks' to={'/privacy'}>Privacy</Link>
          <Link className='supportlinks' to={'/contact'}>Contact Us</Link>
        </aside>

        <div className="btncontent">









          

          {
            state.map((res) => {
              const { title, desc } = res;

              return (
                <>
                  <div className="mymargin accountdiv "><h1 className="myh1">{title}</h1><p className="myp">{desc}</p></div>
                 

                </>
              )
            })
          }

          {/* )
          } */}


        </div>
      </div>

    </>
  )
}
