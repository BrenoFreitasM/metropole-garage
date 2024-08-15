import React, {useState} from 'react';
import './App.css'
import {debugData} from "../utils/debugData";
import {fetchNui} from "../utils/fetchNui";
import { useNuiEvent } from '../hooks/useNuiEvent';
import Vehicles from './Vehicles';

// This will set the NUI to visible if we are
// developing in browser
debugData([
  {
    action: 'setVisible',
    data: true,
  }
])

interface ReturnClientDataCompProps {
  data: any
}

interface Car {
  name: string;
  code: string;
  image: string;
}

const ReturnClientDataComp: React.FC<ReturnClientDataCompProps> = ({data}) => (
  <>
    <h5>Returned Data:</h5>
    <pre>
      <code>
        {JSON.stringify(data, null)}
      </code>
    </pre>
  </>
)

interface ReturnData {
  x: number;
  y: number;
  z: number;
}

const App: React.FC = () => {
  const [clientData, setClientData] = useState<ReturnData | null>(null);
  const [selectedCar, setSelectedCar] = useState<Car | null>(null);
  

  const handleGetClientData = () => {
    fetchNui<ReturnData>('getClientData').then(retData => {
      console.log('Got return data from client scripts:')
      console.dir(retData)
      setClientData(retData)
    }).catch(e => {
      console.error('Setting mock data due to error', e)
      setClientData({ x: 500, y: 300, z: 200})
    })
  }

  const handleSelectCar = (car: Car) => {
    setSelectedCar(car);
    console.log('Selected Car:', car);
  };

  useNuiEvent('setVisible', (data: any ) => {
    console.log('setVisible', data)
  })

  const [ email, setEmail ] = useState("")

  return (
    <div className="nui-wrapper">
      <div className='popup-thing'>
          <h1 className='veiculos-title'>Veículos</h1>
          {/* <button onClick={handleGetClientData}>Obtenha dados do cliente</button>
          {clientData && <ReturnClientDataComp data={clientData} />} */}
          
        {/* <Cars onSelectCar={handleSelectCar} /> */}
        {/* {selectedCar && (
          <div>
            <h2>Carro Selecionado</h2>
            <p>{selectedCar.name}</p>
            <img src={selectedCar.image} alt={selectedCar.name} />
          </div>
        )} */}
        {/* <Carousel cars={[]} onSelectCar={function (car: Car): void {
          throw new Error('Function not implemented.');
        } } /> */}

        <Vehicles/>
      </div>
    </div>
  );
}

export default App;
