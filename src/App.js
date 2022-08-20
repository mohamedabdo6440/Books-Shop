
import React from 'react';
import BodyApp from './component/BodyApp/BodyApp';
import data from './data.json'

function App() {

  return (
    <div>
      <BodyApp />

      {
        data.results.map(d => {

          return (
            <div>

            </div>
          )

        })
      }
    </div>
  );


}


export default App

