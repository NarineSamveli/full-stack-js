import * as React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

const mapStateToProps = ({ students }) => ({ students })

class Students extends React.Component {
  onRowClick (id) {
    console.log(id)
  }

  renderRows (students) {
    if (!students) {
      return null
    }

    const rows = students.entities.map((item) => (
      <div key={item.id} onClick={() => this.onRowClick(item.id)} className='Cur(p) Bgc(white) P(10px) Bd Bdc(black) My(5px)'>{item.name}</div>
    ))

    return rows
  }

  render () {
    return (
      <div className='H(100%) Bgc(#eee) P(50px)'>{this.renderRows(this.props.students.data)}</div>
    )
  }
}

Students.propTypes = {
  students: PropTypes.object.isRequired
}

export default connect(mapStateToProps)(Students)
