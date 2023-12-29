import React from 'react'
import { useEffect , useState } from 'react'

const URL = `http://api.weatherapi.com/v1/current.json?key=47a53ef1aeff4b29ba811204220210&q=London&aqi=no`;

function Deneme() {

    const [temp, setTemp] = useState(0);
    useEffect(() => {
        const fetchData = async () => {
            const result = await fetch(URL)
            result.json().then(json => {
                setTemp(json.current.temp_f);
            })
        }
        fetchData();
    }, []);

  return (
    <div>
      Temp = {temp}
    </div>
  )
}
export default Deneme