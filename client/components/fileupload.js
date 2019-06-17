import React, {Component, Fragment} from 'react'
import {connect} from 'react-redux'
import {fileupload} from '../store'

class aFileUpload extends Component {
  constructor(props) {
    super(props)
    this.state = {
      file: null
    }
    this.handleFileChange = this.handleFileChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleFileChange(event) {
    this.setState({file: event.target.files[0]})
  }

  handleSubmit(e) {
    event.preventDefault()
    const formData = new FormData()
    formData.append('rates', this.state.file)
    this.props.fileUpload(formData)
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="file">Select File</label>
          <input name="file" type="file" onChange={this.handleFileChange} />
          <button type="submit">Sumbit</button>
        </form>
        {Object.keys(this.props.results).length > 0 ? (
          <Fragment>
            <h2>Results:</h2>
            <ul>
              {Object.keys(this.props.results).map(resultItemName => {
                const resultValue = this.props.results[resultItemName]
                return (
                  <li
                    key={resultItemName}
                  >{`${resultItemName}: ${resultValue}`}</li>
                )
              })}
            </ul>
          </Fragment>
        ) : null}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  results: state.upload
})

const mapDispatchToProps = dispatch => ({
  fileUpload: formData => dispatch(fileUpload(formData))
})

const FileUpload = connect(mapStateToProps, mapDispatchToProps)(aFileUpload)

export default FileUpload
