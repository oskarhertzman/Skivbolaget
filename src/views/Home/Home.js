import React, { useState, useEffect } from 'react'
import './styles/Home.scss'




var contentful = require('contentful');


export const Home = (props) => {

  const [bands, setBands] = useState([]);

  useEffect(() => {
    let client = contentful.createClient({
      space: 'm39lfmvapu06',
      accessToken: '19gu4QyhoZVHYEFBgkp3OgekwyOp2y-BJsarkUf8mbk'
    })

    client.getEntries({ content_type: 'band' }).then(res => {
      setBands(res.items);
    })
  }, [])


  console.log(bands);
  

  return (
    <div className="Home">
      <div className="Header">
        <h1>Skivbolaget</h1>
      </div>
      <div className="Body">
        {bands.map((band, index) => (
          <div>
            {band.name}
            </div>
        ))}
      </div>
    </div>

  )
};
export default Home;