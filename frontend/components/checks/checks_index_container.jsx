import React from 'react';
import { connect } from 'react-redux';
import CheckIndex from './check_index';
import { fetchChecks, createCheck, closeCheck } from '../../actions/check_actions'
import reverse from 'lodash';


const mapStateToProps = (state, ownProps) => {
  // debugger
  let allChecks = Object.keys(state.entities.checks).map(id => state.entities.checks[id])
  let tableId = ownProps.location.pathname.split('/')[2]
  let checksUnordered = allChecks.filter( check => check.tableId === tableId)
  let times = checksUnordered.map( check => check.dateCreated )
  let timesSorted = times.sort().reverse()
  let checks = [];
  for (let i = 0; i < timesSorted.length; i++ ){
    for (let j = 0; j < timesSorted.length; j ++) {
      if (times[i] === checksUnordered[j].dateCreated){
        checks.push(checksUnordered[j])
      }
    }
  }
  let errors = state.errors.checks
  return {
    checks,
    tableId,
    errors
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchChecks: () => dispatch(fetchChecks()),
    createCheck: (tableId) => dispatch(createCheck(tableId)),
    closeCheck: (id) => dispatch(closeCheck(id)),
    clearErrors: () => dispatch(clearErrors())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CheckIndex)
