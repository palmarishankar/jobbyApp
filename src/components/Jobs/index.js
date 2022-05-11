import Header from '../Header'
import JobItem from '../JobItem'

const Jobs = props => {
  const {employmentTypesList} = props
  return (
    <div>
      <Header />
      {employmentTypesList.map(eachEmployee => (
        <JobItem employeeType={eachEmployee} />
      ))}
    </div>
  )
}

export default Jobs
