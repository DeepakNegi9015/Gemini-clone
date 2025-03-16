import { createContext, useState } from "react"
import run from "../config/Gemini";


export const context = createContext();

const ContextProvider = (props) =>{

    const [input,setInput] = useState("");
    const [recentPrompt,setRecentPrompt] = useState("");
    const [prevPrompts,setPrevPrompts] = useState([]);
    const [showresult, setShowResult] = useState(false);
    const [loading,SetLoading] = useState(false);
    const [resultData,setResultData] = useState("");

    const delayPara = (index,nextWord)=>{

    }

    const onSent = async (prompt)=>{
        setResultData("")
        SetLoading(true)
        setShowResult(true)
        setRecentPrompt(input)
        setPrevPrompts(prev=>[...prev,input])
        const response =  await run(input)
        setResultData(response)
        SetLoading(false)
        setInput("")
    }
    // onSent("what is react js")


    const contextValue = {
        prevPrompts,
        setPrevPrompts,
        onSent,
        setRecentPrompt,
        recentPrompt,
        showresult,
        loading,
        resultData,
        input,
        setInput
    }

    return (
        <context.Provider value={contextValue}>
            {props.children}
        </context.Provider>
    )
}
export default ContextProvider;