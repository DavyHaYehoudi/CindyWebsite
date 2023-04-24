import Table from "react-bootstrap/Table";

function TableComp() {
  return (
    <Table striped id="comparatif">
      <thead>
        <tr>
          <th>#</th>
          <th>MASSAGE</th>
          <th>TARIFS</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Massage des 5 continents®</td>
          <td>
            Tarif = 85€ (1H15)
            <br />
            Le forfait de 3 massages : 225€
          </td>
        </tr>
        <tr>
          <td>2</td>
          <td>Massage du visage japonais </td>
          <td>
            Ce massage se pratique à la carte ou en cure : Tarif = 65€ (1H00)
            <br />
            Le forfait de 3 massages : 165€
          </td>
        </tr>
        <tr>
          <td>3</td>
          <td>Belly Revolution®</td>
          <td>
            Ce massage se pratique à la carte ou en cure : Tarif = 60€ (45mn)
            <br />
            Le forfait de 3 massages : 160€
          </td>
        </tr>
        <tr>
          <td>4</td>
          <td>Massage drainant méthode Vodder</td>
          <td>
            Ce massage se pratique à la carte ou en cure : Tarif = 50€ (1H00)
            <br />
            Le forfait de 5 massages = 210€
          </td>
        </tr>
        <tr>
          <td>5</td>
          <td>Massage aux pochons</td>
          <td>
            Tarif 85€
            <br />
            Le forfait de 3 SOINS 225€ Durée 1h30
          </td>
        </tr>
      </tbody>
    </Table>
  );
}

export default TableComp;
