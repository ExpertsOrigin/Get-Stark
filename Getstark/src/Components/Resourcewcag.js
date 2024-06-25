import React from 'react'
import '../assets/style/Resourcewcag.css'
export default function Resourcewcag() {
    return (
        <>
            <div className="wcag">

                <h1 className="wcagh1-1">
                    The WCAG Explained
                </h1>
                <p className="wcagp-1">Simplified and actionable explanations of every WCAG 2.2 criteria</p>
            </div>



            <div className="wcagtext">

                <aside className="wcagaside">
                    <a href="" className="intro">Intro</a>
                    <ol type='1'>
                        <li><select name="" id="" className='asidelist'>
                            <option value="">Percieveable</option>
                            <option value="">1.1 Text Alternative</option>
                            <option value="">1.2Time-based media</option>
                            <option value="">1.3 Adabtable</option>
                            <option value="">1.4 Distinguishable</option>
                            
                            
                            
                            
                            
                            </select></li>
                        <li><select name="" id="" className='asidelist'>
                            <option value="">Operable</option>
                            <option value="" >Keyboard Accessible</option>
                            <option value="" >Enough Time</option>
                            <option value="" >Navigable</option>
                            <option value="" >Input Modalities</option>
                            
                            
                            
                            
                            
                            </select></li> 
                        <li><select name="" id="" className='asidelist'>
                            <option value="">Understandable</option>
                            <option value="" >Readable</option>
                            <option value="" >Predictable</option>
                            <option value="" >Input Assistance</option>
                            
                            
                            
                            
                            
                            </select></li>
                        <li><select name="" id="" className='asidelist'>
                            <option value="">Robust</option>
                            <option value="" >Compatible</option>
                            
                            
                            
                            
                            
                            </select></li>

                    </ol>
                </aside>




                <div className="wcagmaintext">

            <h1 className="wcagtexth1-1">Intro</h1>
            <p className="wcagetextp-1">Any digital experiences on the web (and beyond) should be made in a way that allows people with disabilities to understand content and perform the same actions as people who are not disabled. The WCAG is a set of criteria and guidelines for satisfying those criteria written by a group of volunteers aimed at accomplishing that goal.</p>

            <p className="wcagetextp-1">
            The WCAG is based on and organized into four guiding principles. Perceivable, Operable, Understandable, and Robust. These principles inform everything about the WCAG. They're super important. The WCAG has detailed explanations for what each means, if you're interested in learning more.
            </p>


            <h1 className="wcagtexth1-1">What are A, AA, and AAA?</h1>
            <p className="wcagetextp-1">
            You can be compliant to varying degrees. We call these the A levels. A, AA, AAA (Often said Double A and Triple A). Currently AA is what you need to aim for. AAA is very strict and should be a target for your most important experiences. 
                </p>            


                <h1 className="wcagtexth1-1">What are the numbers?</h1>

 <p className="wcagetextp-1">
    It's like the Dewey Decimal System but for accessibility. Let's take this criterion as a starting example; 1.4.1 Use Of Color.
<br /><br/>
This is under the Perceivable category. Criteria under this category will have section numbers starting with 1, like so; 1.X.X. 
<br /><br/>

Perceivable is then divided into subcategories; Text Alternatives, Time Based Media (this means anything that plays over time, like audio or video), Adaptable, and Distinguishable.
<br /><br/>

1.4.1 is under a fourth subcategory and is the first criterion listed in that subcategory. So this 1. perceivable, 4. distinguishable, 1. use of color. Now the section numbers shouldn't be too scary, right?
 </p>

 <h1 className="wcagtexth1-1">How do I use this resource?</h1>
 <p className="wcagetextp-1">
 This is a collection of summaries of each and every criteria from the WCAG 2.2 designed for clarity, simplicity, and actionability. The WCAG is complex and detailed so we wanted to give you something that takes the awesome efforts that went into creating it and gives it to you in a really easy to understand package. <br /><br />    
 The summaries here are not comprehensive for implementation and compliance but instead intended to help you understand what the criterion asks for, why it exists, and some guidance towards figuring out how to implement it.<br /><br />
 At the bottom of every article you'll find links out to content created by W3C to understand the criterion and learn about specific implementation steps.
    </p> 



















                </div>



            </div>










        </>
    )
}
