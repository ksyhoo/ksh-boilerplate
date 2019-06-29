import {Router} from '@reach/router'
import * as React from 'react'
import Loadable from "react-loadable"
import {Loading} from './loading'

const Main = Loadable({
  loader: () => import("./App"),
  loading: Loading
})

const Routes = () => {
    return (
      <Router basepath=''>
        <Main path="/"/>
      </Router>
    )
}

export default Routes

