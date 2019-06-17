import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getCompanies} from '../store'

class CompaniesList extends Component {
  componentDidMount() {
    this.props.getCompanies()
  }
  render() {
    return (
      <div>
        <h1>Company Stock Rates Are:</h1>
        {this.props.companies.map(company => {
          return (
            <tabel key={company.id}>
              <thead>
                <tr>
                  <th colSpan="3">{`(${company.companyId}) ${
                    company.companyName
                  }`}</th>
                </tr>
                <tr>
                  <th>Date</th>
                  <th>Rate</th>
                  <th>Additional Information</th>
                </tr>
              </thead>
              <tbody>
                {company.stockrate.map(share => {
                  return (
                    <tr key={share.id}>
                      <td>{share.date}</td>
                      <td>{share.amount}</td>
                      <td>{share.additionalInfo}</td>
                    </tr>
                  )
                })}
              </tbody>
            </tabel>
          )
        })}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  companies: state.companies
})

const mapDispatchToProps = dispatch => ({
  getCompanies: () => dispatch(getCompanies())
})

const AllCompaniesList = connect(mapStateToProps, mapDispatchToProps)(Component)

export default AllCompaniesList
