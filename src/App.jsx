import { useState } from "react";
import Counter from "./component/Counter";
import Tab from "./component/Tab";
import Modal from "./component/Modal";
import DataTables from "./component/DataTables";

function App() {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <>
      <h1 className="text-2xl font-bold">1. Counter</h1>
      <Counter />

      <h1 className="text-2xl font-bold">2. Javascript Function</h1>
      <p>Script fungsi ada di src/utils/JavascriptFunction.js</p>

      <h1 className="text-2xl font-bold">3. Tab</h1>
      <Tab />

      <h1 className="text-2xl font-bold">4. Modal</h1>
      <button
        onClick={() => setModalOpen(true)}
        className="bg-black text-white p-3 cursor-pointer"
      >
        Open Modal
      </button>
      <Modal
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
        title="Sample Modal Title"
      >
        <p>This is the modal content body. You can put anything here.</p>
      </Modal>

      <h1 className="text-2xl font-bold">5. DataTables</h1>
      <DataTables />
    </>
  );
}

export default App;
