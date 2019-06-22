import App from './app'
import * as React from "react";
import {render} from 'react-dom'


const wrapper = document.getElementById("container");
wrapper ? render(<App />, wrapper) : false;