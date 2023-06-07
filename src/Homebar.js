import React from 'react'
import  './Homebar'
function Product({text1,image1}) {
  return (
    <div className='product'>
      <div className ="productInfo">
      <p>{text1}</p>
      </div>
      
      <div className='n'>
<img className='r'src={image1} />
</div>
    </div>

      
  )
}

export default Product
