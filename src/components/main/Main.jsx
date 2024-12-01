import React, { useContext } from 'react'
import './Main.css';
import { assets } from '../../assets/assets';
import { Context } from '../../context/context';

const main = () => {

    const { onSent, recentPrompt, showResult, loading, resultData, setInput, input } = useContext(Context);

    return (
        <div className="Main">
            <div className="nav">
                <p>Gemini</p>
                <img src={assets.user_icon} alt="" />
            </div>

            <div className="main-container">
                {!showResult
                    ? <>
                        <div className="greet">
                            <p><span>Hello, Prerana</span></p>
                            <p>How can i help you today?</p>
                        </div>

                        <div className="cards">
                            <div className="card">
                                <p>Suggest Beautiful Places to see on an upcoming road trip</p>
                                <img src={assets.compass_icon} alt="" />
                            </div>
                            <div className="card">
                                <p>If animals could talk, which animal do you think would be the rudest?</p>
                                <img src={assets.bulb_icon} alt="" />
                            </div>
                            <div className="card">
                                <p>What’s the strangest dream you’ve ever had?</p>
                                <img src={assets.message_icon} alt="" />
                            </div>
                            <div className="card">
                                <p>What’s the most useless talent you have?</p>
                                <img src={assets.code_icon} alt="" />
                            </div>
                        </div>
                    </>
                    :
                    <div className="result">
                        <div className="result-title">
                            <img src={assets.user_icon} alt="" />
                            <p>{recentPrompt}</p>
                        </div>
                        <div className="result-data">
                            <img src={assets.gemini_icon} alt="" />
                            {loading
                                ? <div className="loader">
                                    <hr />
                                    <hr />
                                    <hr />
                                    </div>
                                : <p></p>

                            }
                            <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
                        </div>
                    </div>

                }


                <div className="main-bottom">
                    <div className="search-box">
                        <input onChange={(e) => setInput(e.target.value)} value={input} type="text" placeholder='Enter promt here' />
                        <div>
                            <img src={assets.gallery_icon} alt="" />
                            <img src={assets.mic_icon} alt="" />
                           {input?<img   onClick={() => onSent()} src={assets.send_icon} alt="" />:null} 
                        </div>
                    </div>

                    <p className="bottom-info">
                        Gemini can make mistakes. Check important info.
                    </p>
                </div>
            </div>

        </div>
    )
}

export default main