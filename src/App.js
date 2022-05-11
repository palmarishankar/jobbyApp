import {Switch, Route} from 'react-router-dom'
import {ReactPlayer} from 'react-player'

import Login from './components/Login'
import Home from './components/Home'
import Jobs from './components/Jobs'
import JobItem from './components/JobItem'

import './App.css'

const employmentTypesList = [
  {
    label: 'Full Time',
    employmentTypeId: 'FULLTIME',
  },
  {
    label: 'Part Time',
    employmentTypeId: 'PARTTIME',
  },
  {
    label: 'Freelance',
    employmentTypeId: 'FREELANCE',
  },
  {
    label: 'Internship',
    employmentTypeId: 'INTERNSHIP',
  },
]

const salaryRangesList = [
  {
    salaryRangeId: '1000000',
    label: '10 LPA and above',
  },
  {
    salaryRangeId: '2000000',
    label: '20 LPA and above',
  },
  {
    salaryRangeId: '3000000',
    label: '30 LPA and above',
  },
  {
    salaryRangeId: '4000000',
    label: '40 LPA and above',
  },
]

const App = () => (
  <div>
    <Switch>
      <Route exact path="/login" component={Login} />
      <Route exact path="/" component={Home} />

      <Route
        exact
        path="/jobs"
        component={Jobs}
        employmentTypesList={employmentTypesList}
      />
      <Route exact path="/JobItem" component={JobItem} />
    </Switch>
    )
  </div>
)

export default App
