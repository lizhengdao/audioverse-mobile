import { connect } from 'react-redux'

import { loadSeries } from '../../actions'
import { getSeries, getSeriesPagination } from '../../reducers/selectors'

import Series from './Series'

const mapStateToProps = (state) => ({
  items: getSeries(state),
  pagination: getSeriesPagination(state)
})

const mapDispatchToProps = (dispatch) => ({
  load: () => dispatch(loadSeries(false, false)),
  loadMore: () => dispatch(loadSeries(true, false)),
  refresh: () => dispatch(loadSeries(false, true))
})

export default connect(mapStateToProps, mapDispatchToProps)(Series)
