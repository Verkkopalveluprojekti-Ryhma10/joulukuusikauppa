import React, { useState } from 'react';
import Metsakuusi from '../assets/images/metsakuusi.jpg';
import Mustakuusi from '../assets/images/mustakuusi.jpg';
import Sinikuusi from '../assets/images/sinikuusi.jpg';
import Manty from '../assets/images/manty.jpg'

const Kuuset = () => {
    const [metsaExpanded, setMetsaExpanded] = useState(false);
    const [metsaSelectedSize, setMetsaSelectedSize] = useState('');
    const [metsaQuantity, setMetsaQuantity] = useState(1);

    const [mustaExpanded, setMustaExpanded] = useState(false);
    const [mustaSelectedSize, setMustaSelectedSize] = useState('');
    const [mustaQuantity, setMustaQuantity] = useState(1);

    const [siniExpanded, setSiniExpanded] = useState(false);
    const [siniSelectedSize, setSiniSelectedSize] = useState('');
    const [siniQuantity, setSiniQuantity] = useState(1);

    const [mantyExpanded, setMantyExpanded] = useState(false);
    const [mantySelectedSize, setMantySelectedSize] = useState('');
    const [mantyQuantity, setMantyQuantity] = useState(1);

    const handleExpand = (type) => {
        if (type === 'metsa') {
            setMetsaExpanded(!metsaExpanded);
        } else if (type === 'musta') {
            setMustaExpanded(!mustaExpanded);
        } else if (type === 'sini') {
            setSiniExpanded(!siniExpanded);
        } else if (type === 'manty') {
            setMantyExpanded(!mantyExpanded);
        }
    };

    const handleSizeChange = (type, event) => {
        let setSizeFunction;
        switch (type) {
            case 'metsa':
                setSizeFunction = setMetsaSelectedSize;
                break;
            case 'musta':
                setSizeFunction = setMustaSelectedSize;
                break;
            case 'sini':
                setSizeFunction = setSiniSelectedSize;
                break;
            case 'manty':
                setSizeFunction = setMantySelectedSize;
                break;
            default:
                break;
        }
        setSizeFunction(event.target.value);
    };

    const handleQuantityChange = (type, event) => {
        let setQuantityFunction;
        switch (type) {
            case 'metsa':
                setQuantityFunction = setMetsaQuantity;
                break;
            case 'musta':
                setQuantityFunction = setMustaQuantity;
                break;
            case 'sini':
                setQuantityFunction = setSiniQuantity;
                break;
            case 'manty':
                setQuantityFunction = setMantyQuantity;
                break;
            default:
                break;
        }
        event.preventDefault();
        event.stopPropagation();
        setQuantityFunction(parseInt(event.target.value, 10));
    };

    const handleSizeQuantityClick = (event) => {
        event.stopPropagation();
    };

    return (
        <div className='kuuset-container'>
            <div className={`MetsaDiv ${metsaExpanded ? 'expanded' : ''}`} onClick={() => handleExpand('metsa')}>
                <img src={Metsakuusi} alt="metsakuusi" className='metsakuusi' />
                <h3>Metsäkuusi</h3>

                {metsaExpanded && (
                <div className="options" onClick={handleSizeQuantityClick}>
                <p>Suomalainen viljelty metsäkuusi<br/>
                <br/>
                    - tiheäkasvuinen, teräväneulainen<br/>
                    - keskivihreä<br/>
                    - perinteinen, varma valinta<br/>
                </p>
                        <label>
                            Valitse kuusen korkeus:
                            <br />
                            <input
                                type="radio"
                                value="80-120"
                                checked={metsaSelectedSize === '80-120'}
                                onChange={(e) => handleSizeChange('metsa', e)}
                                id="1"
                            />
                            <label>80 - 120 cm   -   80€</label><br />

                            <input
                                type="radio"
                                value="110-150"
                                checked={metsaSelectedSize === '110-150'}
                                onChange={(e) => handleSizeChange('metsa', e)}
                                id="2"
                            />
                            <label>110 - 150 cm   -  100€</label><br />

                            <input
                                type="radio"
                                value="140-180"
                                checked={metsaSelectedSize === '140-180'}
                                onChange={(e) => handleSizeChange('metsa', e)}
                                id="3"
                            />
                            <label>140 - 180 cm   -  140€</label><br />

                            <input
                                type="radio"
                                value="170-210"
                                checked={metsaSelectedSize === '170-210'}
                                onChange={(e) => handleSizeChange('metsa', e)}
                                id="4"
                            />
                            <label>170 - 210 cm   -  160€</label><br />

                            <input
                                type="radio"
                                value="200-240"
                                checked={metsaSelectedSize === '200-240'}
                                onChange={(e) => handleSizeChange('metsa', e)}
                                id="5"
                            />
                            <label>200 - 240 cm   -  200€</label><br />
                        </label><br />

                        <label>
                            Määrä:
                            <input type="number" value={metsaQuantity} onChange={(e) => handleQuantityChange('metsa', e)} />
                        </label>

                        <button>Add to Cart</button>
                    </div>
                )}
            </div>


            <div className={`MustaDiv ${mustaExpanded ? 'expanded' : ''}`} onClick={() => handleExpand('musta')}>
                <img src={Mustakuusi} alt="mustakuusi" className='mustakuusi' />
                <h3>Mustakuusi</h3>

                {mustaExpanded && (
                    <div className="options" onClick={handleSizeQuantityClick}>
                        <label>
                            Valitse kuusen korkeus:
                            <br />
                            <input
                                type="radio"
                                value="80-120"
                                checked={mustaSelectedSize === '80-120'}
                                onChange={(e) => handleSizeChange('musta', e)}
                                id="1"
                            />
                            <label>80 - 120 cm   -   80€</label><br />

                            <input
                                type="radio"
                                value="110-150"
                                checked={mustaSelectedSize === '110-150'}
                                onChange={(e) => handleSizeChange('musta', e)}
                                id="2"
                            />
                            <label>110 - 150 cm   -  100€</label><br />

                            <input
                                type="radio"
                                value="140-180"
                                checked={mustaSelectedSize === '140-180'}
                                onChange={(e) => handleSizeChange('musta', e)}
                                id="3"
                            />
                            <label>140 - 180 cm   -  140€</label><br />

                            <input
                                type="radio"
                                value="170-210"
                                checked={mustaSelectedSize === '170-210'}
                                onChange={(e) => handleSizeChange('musta', e)}
                                id="4"
                            />
                            <label>170 - 210 cm   -  160€</label><br />

                            <input
                                type="radio"
                                value="200-240"
                                checked={mustaSelectedSize === '200-240'}
                                onChange={(e) => handleSizeChange('musta', e)}
                                id="5"
                            />
                            <label>200 - 240 cm   -  200€</label><br />
                        </label><br />

                        <label>
                            Määrä:
                            <input type="number" value={mustaQuantity} onChange={(e) => handleQuantityChange('musta', e)} />
                        </label>

                        <button>Add to Cart</button>
                    </div>
                )}
            </div>

            <div className={`SiniDiv ${siniExpanded ? 'expanded' : ''}`} onClick={() => handleExpand('sini')}>
                <img src={Sinikuusi} alt="sinikuusi" className='sinikuusi' />
                <h3>Sinikuusi</h3>

                {siniExpanded && (
                    <div className="options" onClick={handleSizeQuantityClick}>
                        <label>
                            Valitse kuusen korkeus:
                            <br />
                            <input
                                type="radio"
                                value="80-120"
                                checked={siniSelectedSize === '80-120'}
                                onChange={(e) => handleSizeChange('sini', e)}
                                id="1"
                            />
                            <label>80 - 120 cm   -   80€</label><br />

                            <input
                                type="radio"
                                value="110-150"
                                checked={siniSelectedSize === '110-150'}
                                onChange={(e) => handleSizeChange('sini', e)}
                                id="2"
                            />
                            <label>110 - 150 cm   -  100€</label><br />

                            <input
                                type="radio"
                                value="140-180"
                                checked={siniSelectedSize === '140-180'}
                                onChange={(e) => handleSizeChange('sini', e)}
                                id="3"
                            />
                            <label>140 - 180 cm   -  140€</label><br />

                            <input
                                type="radio"
                                value="170-210"
                                checked={siniSelectedSize === '170-210'}
                                onChange={(e) => handleSizeChange('sini', e)}
                                id="4"
                            />
                            <label>170 - 210 cm   -  160€</label><br />

                            <input
                                type="radio"
                                value="200-240"
                                checked={siniSelectedSize === '200-240'}
                                onChange={(e) => handleSizeChange('sini', e)}
                                id="5"
                            />
                            <label>200 - 240 cm   -  200€</label><br />
                        </label><br />

                        <label>
                            Määrä:
                            <input type="number" value={siniQuantity} onChange={(e) => handleQuantityChange('sini', e)} />
                        </label>

                        <button>Add to Cart</button>
                    </div>

                )}
            </div>
            <div className={`MantyDiv ${mantyExpanded ? 'expanded' : ''}`} onClick={() => handleExpand('manty')}>
                <img src={Manty} alt="manty" className='manty' />
                <h3>Mänty</h3>

                {mantyExpanded && (
                    <div className="options" onClick={handleSizeQuantityClick}>
                        <label>
                            Valitse kuusen korkeus:
                            <br />
                            <input
                                type="radio"
                                value="80-120"
                                checked={mantySelectedSize === '80-120'}
                                onChange={(e) => handleSizeChange('manty', e)}
                                id="1"
                            />
                            <label>80 - 120 cm   -   80€</label><br />

                            <input
                                type="radio"
                                value="110-150"
                                checked={mantySelectedSize === '110-150'}
                                onChange={(e) => handleSizeChange('manty', e)}
                                id="2"
                            />
                            <label>110 - 150 cm   -  100€</label><br />

                            <input
                                type="radio"
                                value="140-180"
                                checked={mantySelectedSize === '140-180'}
                                onChange={(e) => handleSizeChange('manty', e)}
                                id="3"
                            />
                            <label>140 - 180 cm   -  140€</label><br />

                            <input
                                type="radio"
                                value="170-210"
                                checked={mantySelectedSize === '170-210'}
                                onChange={(e) => handleSizeChange('manty', e)}
                                id="4"
                            />
                            <label>170 - 210 cm   -  160€</label><br />

                            <input
                                type="radio"
                                value="200-240"
                                checked={mantySelectedSize === '200-240'}
                                onChange={(e) => handleSizeChange('manty', e)}
                                id="5"
                            />
                            <label>200 - 240 cm   -  200€</label><br />
                        </label><br />

                        <label>
                            Määrä:
                            <input type="number" value={mantyQuantity} onChange={(e) => handleQuantityChange('manty', e)} />
                        </label>

                        <button>Add to Cart</button>
                    </div>
                    
                )}
            </div>
        </div>
    );
};

export default Kuuset;