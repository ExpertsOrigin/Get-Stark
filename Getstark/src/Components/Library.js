import React from 'react'
import '../assets/style/Library.css'
import Card from 'react-bootstrap/Card';
export default function Library() {
    return (
        <>
            <div className="librarymain">
                <aside className='libraryaside'>
                    <h5 className="asideh5">Search Library</h5>
                    <input type="text" placeholder='search' />
                    <a href="" className='librarya' >Home</a>
                    <a href="" className='librarya' >Collection</a>
                    <select name="" id="" className='libraryselect'>
                        <option value="">Categories</option>
                        <option value="">All</option>
                        <option value="">Blogs & Articles</option>
                        <option value="">Books</option>
                        <option value="">Checklists</option>

                    </select>

                    <div className="contributestark">
                        <h4 className="contributeh4">Contribute to Stark</h4>
                        <p className="contributep">Got any accessibility resources or news?</p>
                        <button className="contributebtn">Submit a Resource</button>
                    </div>
                </aside>







                <div className="librarycards">

                    <h1 className="libraryh1-1">New in the Library</h1>
                    <a href="">View all</a>
                    <p className="libraryp">Newly added accessibility resources, guides, and more.</p>
                    <div className="librarysixcards">
                        <Card className='cardsin' style={{ width: '18rem' }}>
                            <Card.Img variant="top" className="cardsmyimg" src={require('../assets/images/daisy_high_e2e14faca3.jpg')} />
                            <Card.Body>
                                <Card.Title>Resources</Card.Title>
                                <Card.Title>Inclusive Publishing</Card.Title>


                            </Card.Body>
                        </Card>

                        <Card className='cardsin' style={{ width: '18rem' }}>
                            <Card.Img variant="top" className="cardsmyimg" src={require('../assets/images/Screenshot_2023_03.png')} />
                            <Card.Body>
                                <Card.Title>Resources</Card.Title>
                                <Card.Title>The APLN Accessible Publishing...</Card.Title>


                            </Card.Body>
                        </Card>

                        <Card className='cardsin' style={{ width: '18rem' }}>
                            <Card.Img variant="top" className="cardsmyimg" src={require('../assets/images/uni_profile_93228_9c84b19231.jpg')} />
                            <Card.Body>
                                <Card.Title>Resources</Card.Title>
                                <Card.Title>Making Accessible Books</Card.Title>


                            </Card.Body>
                        </Card>

                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" className="cardsmyimg" src={require('../assets/images/daisy_high_e2e14faca3.jpg')} />
                            <Card.Body>
                                <Card.Title>Resources</Card.Title>
                                <Card.Title>The DAISY Consortium's Accessible...</Card.Title>


                            </Card.Body>
                        </Card>

                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" className="cardsmyimg" src={require('../assets/images/language_please_.png')} />
                            <Card.Body>
                                <Card.Title>Resources</Card.Title>
                                <Card.Title>Language, Please: Style Guide & Resources for...</Card.Title>


                            </Card.Body>
                        </Card>

                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" className="cardsmyimg" src={require('../assets/images/library_author_google.png')} />
                            <Card.Body>
                                <Card.Title>BLOGS & ARTICLES</Card.Title>
                                <Card.Title>4 steps to more inclusive, precise language</Card.Title>


                            </Card.Body>
                        </Card>

                        <div className="librarydown">


                            <h1 className="libraryh1-1">Featured Collections</h1>
                            <a href="">View all</a>
                            <p className="libraryp">Handpicked and curated collections around accessibility.</p>


<div className="finelibrary">
    
<Card className='librarydowncards1' style={{ width: '18rem' }}>

<Card.Body>
    <Card.Title>Disability Employment</Card.Title>


</Card.Body>
</Card>



<Card className='librarydowncards2' style={{ width: '18rem' }}>

<Card.Body>
    <Card.Title>Making Accessible Color Combos</Card.Title>


</Card.Body>
</Card>



<Card className='librarydowncards3' style={{ width: '18rem' }}>

<Card.Body>
    <Card.Title>Tips and Tricks for Inclusive Social Media</Card.Title>


</Card.Body>
</Card>


</div>








                        </div>







                    </div>







                </div>

            </div>
        </>
    )
}
