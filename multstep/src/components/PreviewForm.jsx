import {
    BsFillEmojiHeartEyesFill,
    BsFillEmojiSmileFill,
    BsFillEmojiNeutralFill,
    BsFillEmojiFrownFill,    
} from 'react-icons/bs'

import './PreviewForm.css';

const PreviewForm = () => {
    return (
        <div className='preview-form'>
            <div className="form-control score-container">
            <label className='radio-container'>
                <input type="radio" value='unsatisfied' name='preview' required/>
                <BsFillEmojiFrownFill />
                <p>Insatisfeito</p>
                </label>

                <label className='radio-container'>
                <input type="radio" value='neutral' name='preview' required/>
                <BsFillEmojiNeutralFill />
                <p>Poderia ser melhor</p>
                </label>
                
                <label className='radio-container'>
                <input type="radio" value='satisfied' name='preview' required/>
                <BsFillEmojiSmileFill />
                <p>Satisfeito</p>
                </label>

                <label className='radio-container'>
                <input type="radio" value='very_satisfied' name='preview' required/>
                <BsFillEmojiHeartEyesFill />
                <p>Muito satisfeito</p>
                </label>
            </div>
            <div className="form-control">
                <label htmlFor="comment">Comentário:</label>
                <textarea name="comment" id="comment" placeholder='Conte como foi a sua experiência com o produto...' required></textarea>
            </div>
        </div>
    )
}

export default PreviewForm;