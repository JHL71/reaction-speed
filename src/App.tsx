import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { v4 as uuidv4 } from 'uuid';
import AppRouter from "./components/Router";

function App() {

  return (
    <div>
      <AppRouter />
    </div>
  );
}

export default App;
