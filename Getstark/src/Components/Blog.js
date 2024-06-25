import React from 'react'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import state from '../assets/Data/blogmain';

export default function Blog({ state }) {
  return (

    <>
      <div className="supportheader">
        <div className="supporttext">
          <h5 className="supporth5">Support</h5>
          <h1 className="supporth1">Making a Stark difference</h1>

        </div>
      </div>

      <div className="supportmain">
        <aside className='supportaside'>
          <Link className='supportlinks' to={'/blogmain'}>Latest and Greatest</Link>
          <Link className='supportlinks' to={'/blogmain'}>Announcements</Link>
          <Link className='supportlinks' to={'/blogmain'}>Product</Link>
          <Link className='supportlinks' to={'/blogmain'}>Community</Link>
          <Link className='supportlinks' to={'/blogmain'}>Guides</Link>
          <Link className='supportlinks' to={'/blogmain'}>Interviews</Link>
          <Link className='supportlinks' to={'/blogmain'}>Case Studies</Link>
          <Link className='supportlinks' to={'/blogmain'}>Engineering</Link>
        </aside>

        <div className="btncontent">


          {
            state.map((res) => {
              const { title, desc, img } = res;

              return (
                <>
                  <Card style={{ width: '38.75rem' }}>
                    <Card.Img variant="top" src={img} />
                    <Card.Body>
                      <Card.Title className='titleh1'>{title}</Card.Title>
                      <Card.Text>
                        {desc}
                      </Card.Text>
                      <a href="https://www.getstark.co/blog/authenticated-url-scanning/">read more</a>
                    </Card.Body>
                  </Card>
                </>
              )
            })
          }
        </div>

      </div>


    </>

  )
}
