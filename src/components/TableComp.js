import { useContext, useState } from "react";
import Table from "react-bootstrap/Table";
import { Link } from "react-router-dom";
import { MassageSelectContext } from "../context/MassageSelectProvider";

function TableComp() {
  const { setMassageId } = useContext(MassageSelectContext);
  const [hoveredRow, setHoveredRow] = useState(null);
  const handleMouseEnter = (index) => {
    setHoveredRow(index);
  };

  const handleMouseLeave = () => {
    setHoveredRow(null);
  };
  return (
    <Table striped id="comparatif" className="tabComp">
      <thead>
        <tr>
          <th></th>
          <th>MASSAGES</th>
          <th>TARIFS</th>
        </tr>
      </thead>
      <tbody>
        <tr
          onMouseEnter={() => handleMouseEnter(0)}
          onMouseLeave={handleMouseLeave}
          className={hoveredRow === 0 ? "hovered-row" : ""}
        >
          <td>1</td>
          <td>
            <Link to="/massages/5-continents" onClick={() => setMassageId("0")}>
              Massage des 5 continents®
            </Link>{" "}
          </td>
          <td>Tarif = 85€ (1H15)</td>
        </tr>
        <tr
          onMouseEnter={() => handleMouseEnter(1)}
          onMouseLeave={handleMouseLeave}
          className={hoveredRow === 1 ? "hovered-row" : ""}
        >
          <td>2</td>
          <td>
            <Link
              to="/massages/visage-skintao"
              onClick={() => setMassageId("1")}
            >
              Massage du visage SKINTAO EXCELLENCE®
            </Link>{" "}
          </td>
          <td>
            Ce massage se pratique à la carte ou en cure : Tarif = 70€ (60 min) et cure BOOST 35€ (30 min)
            <br />
            Le forfait de 3 massages : 180€
          </td>
        </tr>
        <tr
          onMouseEnter={() => handleMouseEnter(2)}
          onMouseLeave={handleMouseLeave}
          className={hoveredRow === 2 ? "hovered-row" : ""}
        >
          <td>3</td>
          <td>
            <Link
              to="/massages/belly-revolution"
              onClick={() => setMassageId("2")}
            >
              Belly Revolution®
            </Link>{" "}
          </td>
          <td>
            Ce massage se pratique à la carte ou en cure : Tarif = 60€ (50 min)
            <br />
            Le forfait de 3 massages : 160€
          </td>
        </tr>
        <tr
          onMouseEnter={() => handleMouseEnter(3)}
          onMouseLeave={handleMouseLeave}
          className={hoveredRow === 3 ? "hovered-row" : ""}
        >
          <td>4</td>
          <td>
            <Link
              to="/massages/drainant-vodder"
              onClick={() => setMassageId("3")}
            >
              Massage drainant méthode Vodder
            </Link>{" "}
          </td>
          <td>
            Ce massage se pratique à la carte ou en cure : Tarif = 60€ (50 min)
            <br />
            Le forfait de 5 massages : 275€
          </td>
        </tr>
        <tr
          onMouseEnter={() => handleMouseEnter(4)}
          onMouseLeave={handleMouseLeave}
          className={hoveredRow === 4 ? "hovered-row" : ""}
        >
          <td>5</td>
          <td>
            <Link to="/massages/pochons" onClick={() => setMassageId("4")}>
              Massage aux pochons
            </Link>{" "}
          </td>
          <td>Tarif = 85€ (1H30)</td>
        </tr>
        <tr
          onMouseEnter={() => handleMouseEnter(5)}
          onMouseLeave={handleMouseLeave}
          className={hoveredRow === 5 ? "hovered-row" : ""}
        >
          <td>6</td>
          <td>
            <Link to="/massages/dos-relaxant" onClick={() => setMassageId("5")}>
              Massage du dos relaxant
            </Link>{" "}
          </td>
          <td>Tarifs = 40€ (30 min) - 55€ (45 mim)</td>
        </tr>
      </tbody>
    </Table>
  );
}

export default TableComp;
