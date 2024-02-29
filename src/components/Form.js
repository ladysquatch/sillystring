import './form.scss';
import { Radio } from './Radio'
import { Preview } from './Preview'
import textTransforms from '../utlis/textTransforms';
import { useState } from 'react';

export function Form() {
    const [transformationType, setTransformationType] = useState('spongebob');
    const [textInput, setTextInput] = useState('');
    const [transformedText, setTransformedText] = useState('');

    function handleClickType(value) {
        setTransformationType(value)
    }
    function handleTextInput(e) {
        setTextInput(e.target.value)
    }

    function handleTransformText() {
        return setTransformedText(textTransforms[transformationType](textInput))
    }
    return (
        <>
        <div className="form-wrapper">
        <div className="radio-wrapper">
            <h2 className="label">Choose your format</h2>

            <Radio 
              value="spongebob"
              label="Sarcastic Spongebob"
              onClickRadio={handleClickType}
              checked={transformationType ==='spongebob'}
            />
            <Radio 
              value="friendly"
              label="Friendly Reminder"
              onClickRadio={handleClickType}
              checked={transformationType ==='friendly'}
            />        
            <Radio 
              value="abomination"
              label="Abomination"
              onClickRadio={handleClickType}
              checked={transformationType ==='abomination'}
            />     
             <Radio 
              value="tiny"
              label="Tiny Screaming"
              onClickRadio={handleClickType}
              checked={transformationType ==='tiny'}
            />   
             <Radio 
              value="sparkles"
              label="Sparkles Emphasis"
              onClickRadio={handleClickType}
              checked={transformationType ==='sparkles'}
            />    
             <Radio 
              value="mirror"
              label="Mirror mirror..."
              onClickRadio={handleClickType}
              checked={transformationType ==='mirror'}
            />           
            </div>
            <div className="input-wrapper">
                <Preview type={transformationType}/>
                <h2 className="label">Enter your text</h2>
                <textarea value={textInput} onChange={handleTextInput}></textarea>
                <button className="button" onClick={handleTransformText}>TRANSFORM</button>

                {transformedText}
            </div>
            </div>
        </>
    )
}