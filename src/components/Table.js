import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

function Table({ title, composant, illustrations, tarifs, id }) {
  // L'id dans ce composant Bootstrap ajoute derrière -tab-description, attention à l'ancre dans l'url de navigation
  return (
    <Tabs defaultActiveKey="description" id={id} className="mb-3 tabs" fill>
      <Tab eventKey="description" title={title} tabClassName="tab">
        {composant}
      </Tab>
      <Tab eventKey="illustrations" title="Illustrations" tabClassName="tab">
        <div className="min-vh-25">
          {illustrations ? (
            illustrations.map((item, i) => (
              <img key={i} src={item} alt={item} className="m-5"/>
            ))
          ) : (
            <p className="text-center">AUCUNE ILLUSTRATION POUR LE MOMENT</p>
          )}
        </div>
      </Tab>
      <Tab eventKey="tarifs" title="Tarifs" tabClassName="tab">
        <div
          className="text-center min-height-200 fs-2"
          dangerouslySetInnerHTML={{ __html: tarifs }}
        ></div>
      </Tab>
    </Tabs>
  );
}

export default Table;
