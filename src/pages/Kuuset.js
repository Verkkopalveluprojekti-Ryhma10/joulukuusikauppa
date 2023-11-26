<<<<<<< Updated upstream
=======
import React, { useEffect, useState } from 'react';

  const Kuuset = () => {

    const [expanded, setExpanded] = useState(false);
    const [selectedSize, setSelectedSize] = useState('');
    const [quantity, setQuantity] = useState(1);
  
    const handleExpand = () => {
      setExpanded(!expanded);
    };
  
    const handleSizeChange = (event) => {
      setSelectedSize(event.target.value);
    };
  
    const handleQuantityChange = (event) => {
      event.preventDefault();
      event.stopPropagation();
      setQuantity(parseInt(event.target.value, 10));
    };
  
    const handleSizeQuantityClick = (event) => {
      event.stopPropagation();
    };
    
    const [TreeData, setTreeData] = useState([]);
    
    const fetchTreeData = async () => {
      console.log('Kokeillaan fetchiä')
      try {
        console.log('fetch')
        return await fetch('http://localhost:3001/categories/?subcategory=1')
        .then(console.log('fetch tehty'))
        .then( (res) => res.json())
        .then(console.log('result jsoni'))
        .then((d) => setTreeData(d))
        .then(console.log('treedata tallennettu'))
        .then(console.log(TreeData))
      } catch(error) {
        console.log('error:', error)
      }
    }
    
    useEffect(() => {
      fetchTreeData();
    }, []);

    const TreeList = TreeData.map((tree) => {

      <div key={tree.id} className={`TreeDiv ${expanded ? 'expanded' : ''}`} onClick={handleExpand}>
        <img src={tree.img_url} alt={tree.name} className={tree.name.toLowerCase()} />
        <h3>{tree.name}</h3>
        
        {expanded && (
        <div className="options" onClick={handleSizeQuantityClick}>
          <p>{tree.description}</p>
          <label>
            Valitse kuusen korkeus:
            <br />
            <input
              type="radio"
              value="80-120"
              checked={selectedSize === '80-120'}
              onChange={(e) => handleSizeChange(e)}
              id="1"
            />
            <label>80 - 120 cm   -   80€</label><br />       
          </label><br />
          <label>
            Määrä:
            <input type="number" value={quantity} onChange={(e) => handleQuantityChange(e)} />
          </label>

          <button>Add to Cart</button>
        </div>
      )}
      </div> 
    })

    return (
      <div className='kuuset-container'>
        {TreeList}
        Plop

      </div>
    );
  };
  
  export default Kuuset;
>>>>>>> Stashed changes
