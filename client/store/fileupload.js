import axios from 'axios'

const FILE_UPLOADED = 'FILE_UPLOADED'
const initState = {}

const fileUploaded = results => {
  let finalResults = null
  if (results) {
    finalResults = results
  } else {
    finalResults = {}
  }
  return {
    type: FILE_UPLOADED,
    results: finalResults
  }
}

export const fileUpload = formData => async dispatch => {
  try {
    const config = {
      header: {
        'content-type': 'multipart/form-data'
      }
    }
    const {data} = await axios.post('/api/fileupload', formData, config)
    dispatch(fileUploaded(data))
  } catch (err) {
    console.error(err)
  }
}

export default function(state = initState, action) {
  switch (action.type) {
    case FILE_UPLOADED:
      return action.results
    default:
      return state
  }
}
