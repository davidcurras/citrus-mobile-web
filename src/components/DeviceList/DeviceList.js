// @flow
import React, { Component } from 'react'
import { Link } from 'react-router'
import { List, ListItem } from 'material-ui/List'
import AppBar from 'material-ui/AppBar'
import ActionInfo from 'material-ui/svg-icons/action/info'
import Divider from 'material-ui/Divider'
import css from './DeviceList.style.css'
import type { ReduxProps } from './DeviceList.index'

type Props = {
  fetchDevices: Function,
} & ReduxProps

class DeviceList extends Component {

  componentDidMount () {

    this.props.fetchDevices()

  }

  showDevices () {

    const {
      devices: {
        list: devices,
      },
    } = this.props

    return devices.map((item, index) => {

      const { id, name, type } = item

      return (
        <Link to={`/device/${id}/controls`} key={id}>
          <ListItem
            primaryText={`${name} (${type.name})`}
            rightIcon={<ActionInfo />}
          />
          <Divider />
        </Link>

      )

    })

  }

  props: Props
  showDevices: Function

  render () {

    return (
      <div className={css.container}>
        <AppBar
          title="Devices"
        />
        <div className={css.tableDevice}>
          <List>
            {this.showDevices()}
          </List>
        </div>
      </div>
    )

  }

}

export default DeviceList
