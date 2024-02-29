import './preview.scss';
import { useState, useEffect } from 'react';
import { LoremIpsum } from 'lorem-ipsum';
import textTransforms from '../utlis/textTransforms';
const lorem = new LoremIpsum()

export function Preview({type}) {
    const [previewText, setPreviewText] = useState(type);

        useEffect(()=>{
            const generatedText = lorem.generateWords(8)
            const converted = textTransforms[type](generatedText)
            setPreviewText(converted)
        },[type]);

    return (
        <>
            <div>
                <h2 className="preview-label">Preview</h2>
                {previewText}
       

               { type === 'spongebob' ?
                   ( <img src="/spongebob.png" alt="mocking spongebob image" className="img-spongebob"/>) : ''
                }
            </div>
        </>
    )
}