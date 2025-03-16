import React, {useContext} from 'react'
import './main.css'
import { assets } from '../../assets/assets'
import { context } from '../../context/Context'

function Main() {

  const {onSent,recentPrompt,showresult,loading,resultData,setInput,input} = useContext(context)

  return (
    <div className="main">
      <div className="nav">
        <p>Gemini</p>
        <img className='hero' src={assets.profile} alt="" />
      </div>
      <div className="main-container">

      {!showresult?
        <>
          <div className="greet">
          <p><span>Hello,Deepak</span></p>
          <p>How can I help you?</p>
        </div>
        <div className="cards">
          <div className="card">
            <p>suggest beautifull places to see on a upcoming road trip</p>
            <img src={assets.compass} alt="" />
          </div>
          <div className="card">
            <p>Briefly summarize this concept: urban planning</p>
            <img src={assets.bulb} alt="" />
          </div>
          <div className="card">
            <p>Brainstorm team bonding activities for our work retreat</p>
            <img src={assets.msg} alt="" />
          </div>
          <div className="card">
            <p>Improve the readability of the following code</p>
            <img src={assets.code} alt="" />
          </div>
        </div>
        </>:
        <div className='result'>
          <div className="result-tilte">
            <img src={assets.profile} alt="" />
            <p>{recentPrompt}</p>
          </div>
          <div className="result-data">
            <img src={assets.gemini_icon} alt="" />
            {loading?
            <div className='loader'>
              <hr />
              <hr />
              <hr />
            </div>:
            <p dangerouslySetInnerHTML={{__html:resultData}}></p>
            }
            
          </div>
        </div>


      }



        

        <div className="main_bottom">
          <div className="search-box">
            <input onChange={(e)=>setInput(e.target.value)} value={input} type="text" placeholder='Enter a prompt here...'/>
            <div>
              <img src={assets.gallary} alt="" />
              <img src={assets.mic} alt="" />
              <img onClick={()=>onSent()} src={assets.send} alt="" />
            </div>
          </div>
          <p className='bottom-info'>
          Google Gemini is a family of advanced AI models developed by Google DeepMind.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Main