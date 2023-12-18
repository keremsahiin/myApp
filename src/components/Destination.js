import "./DestinationStyle.css";
import Image1 from "../assets/u5.png"
import Image2 from "../assets/u4.png"
import Image3 from "../assets/u3.jpg"
import Image4 from "../assets/u2.jpg"
import DestinationData from "./DestinationData";

const Destination = () => {
    return ( 
        <div className="destination">
            <h1>Deneme</h1>
            <p>asdadasd asdadadasd adsdada lorem asdoıandıoad</p>
            <DestinationData
            className = "first-des"
            heading = "DENEME"
            text = "Xmmxzcmzopcmzopcm ompzxocmpzocmzc pzomcpzocmpzocmAASasASsASAS."
            img1 = {Image1}
            img2 = {Image2}
            />
            <DestinationData
            className = "first-des-reverse"
            heading = "XXXXXXX"
            text = "ASDASDASDADSXZCXZCXZCXZCRTETERVCHHFGHFGVBVCBCVB"
            img1 = {Image3}
            img2 = {Image4}
            />
        </div>
    )
}
export default Destination;