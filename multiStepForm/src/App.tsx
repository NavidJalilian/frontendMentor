import { useState } from "react";
import Form from "./components/Form/Form";
import Steps from "./components/Form/Steps";
function App() {
  return (
    <>
      <div className='window'>
        <div>
          <Steps />
        </div>
        <div>
          <Form />
        </div>
      </div>
    </>
  );
}

export default App;
