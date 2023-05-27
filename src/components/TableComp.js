import { useContext } from "react";
import Table from "react-bootstrap/Table";
import { Link } from "react-router-dom";
import { MassageSelectContext } from "../context/MassageSelectProvider";

function TableComp() {
  const{setMassageId}=useContext(MassageSelectContext)
  return (
    <Table striped id="comparatif" className="tabComp" >
      <thead>
        <tr>
          <th></th>
          <th>MASSAGES</th>
          <th>TARIFS</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td><Link to="/massages/5-continents" onClick={()=>setMassageId("0")} >Massage des 5 continents®</Link> </td>
          <td>
            Tarif = 85€ (1H15)
            <br />
            Le forfait de 3 massages : 225€
          </td>
        </tr>
        <tr>
          <td>2</td>
          <td><Link to="/massages/visage-japonais" onClick={()=>setMassageId("1")} >Massage du visage japonais</Link> </td>
          <td>
            Ce massage se pratique à la carte ou en cure : Tarif = 65€ (1H00)
            <br />
            Le forfait de 3 massages : 165€
          </td>
        </tr>
        <tr>
          <td>3</td>
          <td><Link to="/massages/belly-revolution" onClick={()=>setMassageId("2")} >Belly Revolution®</Link> </td>
          <td>
            Ce massage se pratique à la carte ou en cure : Tarif = 60€ (45mn)
            <br />
            Le forfait de 3 massages : 160€
          </td>
        </tr>
        <tr>
          <td>4</td>
          <td><Link to="/massages/drainant-vodder" onClick={()=>setMassageId("3")} >Massage drainant méthode Vodder</Link> </td>
          <td>
            Ce massage se pratique à la carte ou en cure : Tarif = 50€ (1H00)
            <br />
            Le forfait de 5 massages : 210€
          </td>
        </tr>
        <tr>
          <td>5</td>
          <td><Link to="/massages/pochons" onClick={()=>setMassageId("4")} >Massage aux pochons</Link> </td>
          <td>
            Tarif = 85€
            <br />
            Le forfait de 3 soins : 225€ (1H30)
          </td>
        </tr>
      </tbody>
    </Table>
  );
}

export default TableComp;