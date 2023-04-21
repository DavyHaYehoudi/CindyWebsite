import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

function Table({ title, composant, illustrations, tarifs }) {
  return (
    <Tabs
      defaultActiveKey="description"
      id="fill-tab-example"
      className="mb-3 tabs"
      fill
    >
      <Tab eventKey="description" title={title} tabClassName="tab">
        {composant}
      </Tab>
      <Tab eventKey="illustrations" title="Illustrations" tabClassName="tab">
        {illustrations ? (
          illustrations
        ) : (
          <p>Les illustrations sont en cours d'importation.</p>
        )}
      </Tab>
      <Tab eventKey="tarifs" title="Tarifs" tabClassName="tab">
        <div className="text-center" dangerouslySetInnerHTML={{ __html: tarifs }}></div>
      </Tab>
    </Tabs>
  );
}

export default Table;
