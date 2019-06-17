import axios from 'axios'

const ALL_COMPANIES = 'ALL_COMPANIES'
const initState = []
const allCompanies = companies => ({
  type: ALL_COMPANIES,
  companies
})

export const getCompanies = () => async dispatch => {
  try {
    const {data} = await axios.get('/api/allcompanies')
    dispatch(allCompanies(data))
  } catch (err) {
    console.error(err)
  }
}

export default function(state = initState, action) {
  switch (action.type) {
    case ALL_COMPANIES:
      return action.companies
    default:
      return state
  }
}
