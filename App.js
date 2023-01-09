import items from './data.json'
import './App.css';
import Modal from './Payment';
function App() {
  const handleClick = event => {
    event.currentTarget.disabled = true;

    console.log('button clicked');
  };
  return (
     <> <div className="container right">
      {items.data.map((item, index)=>(
      <ol key={index}>
        <div id = "box">
          <div id = "url">
            <img src= {item.url} alt = {item.name}/>
          </div>
          <p id = "name">{item.name}</p> 
          <p id = "price">{item.price}</p>
          <button className='btn-btn-default' onClick={handleClick}>Add to Cart</button>

    </div>
  
</ol>
))}
      </div>
      <div className='col-2'>
        <table class="container left">
          <th>Order<tr class="head"><td className='Name'>Name</td><td className='Price'>Price</td></tr></th>
          <tr><button type='submit' onClick={Modal}>Pay Now</button></tr>
        </table>
      </div>
      </>
  );
}

export default App;
