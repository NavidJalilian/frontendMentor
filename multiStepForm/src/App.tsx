import { useState } from "react";
import Form from "./components/Form/Form";
import Steps from "./components/Form/Steps";
import Form2 from "./components/Form/Form2";
function App() {
  return (
    <>
      <div className='window'>
        <div>
          <Steps />
        </div>
        <div>
          <Form2 />
          <Form />
        </div>
      </div>
    </>
  );
}

export default App;
