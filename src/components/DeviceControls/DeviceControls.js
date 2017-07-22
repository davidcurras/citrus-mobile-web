// @flow
import React, { Component } from 'react'
import AppBar from 'material-ui/AppBar'
import IconButton from 'material-ui/IconButton'
import ArrowBack from 'material-ui/svg-icons/navigation/arrow-back'
import { Link } from 'react-router'
import { List, ListItem } from 'material-ui/List'
import { SelectField, Toggle, Slider } from 'material-ui'
import { debounce } from 'lodash'
import MenuItem from 'material-ui/MenuItem'
import Divider from 'material-ui/Divider'
import css from './DeviceControls.style.css'
import type { ReduxProps } from './DeviceControls.index'

type Props = ReduxProps & {
  routes: Object,
}

class DeviceControls extends Component {

  constructor (props: Props) {

    super(props)
    this.showDeviceControls = this.showDeviceControls.bind(this)
    this.onChange = debounce(this.onChange.bind(this), 500)

  }

  componentDidMount () {

    this.props.fetchDevices()

  }

  onChange (type: Object, index: number, value: any) {

    const { editDevices, device } = this.props

    const edited = {
      ...device,
      type: {
        ...device.type,
        controls: [
          ...device.type.controls,
        ],
      },

    }
    const control = {
      ...device.type.controls[index],
      value,
    }

    edited.type.controls.splice(index, 1, control)
    editDevices(edited)

  }

  onChange: Function

  showDeviceControls () {

    const {
      device: {
        type = {},
      },
    } = this.props

    const { controls = [] } = type

    return controls.map((item, index) => {

      const { name, value } = item
      const itemType = item.type
      let control = null

      switch (itemType) {
        case 'button': {

          control = (
            <Toggle
              name="value"
              value={value}
              onToggle={(evt, val) => {

                this.onChange('button', index, val)

              }}
              style={{ width: '60%', marginTop: '5px' }}
            />
          )
          break

        }
        case 'slider': {

          control = (
            <Slider
              name="value"
              value={value}
              defaultValue={value}
              format={null}
              min={0}
              max={100}
              step={1}
              onChange={(evt, val) => {

                this.onChange('slider', index, val)

              }}
              style={{ width: '60%', margin: '5px', marginTop: 0 }}
            />
          )
          break

        }

        case 'select': {

          control = (
            <SelectField
              name="value"
              value={value}
              hintText={name}
              onChange={(evt, val) => {

                this.onChange('select', index, val)

              }}
              style={{ width: '60%', margin: '5px', height: '45px' }}
            >
              {item.options.map((option, i) => {

                return (
                  <MenuItem
                    key={i}
                    value={option}
                    primaryText={option}
                  />
                )

              })}
            </SelectField>
          )
          break

        }

        default:
          return null
      }


      return (
        <div key={index}>
          <ListItem
            primaryText={name}
            className={css.control}
            rightIcon={control}
          />
          <Divider />
        </div>

      )

    })

  }

  props: Props
  showDeviceControls: Function

  render () {

    const {
      device: {
        name: deviceName,
      },
    } = this.props

    return (
      <div className={css.container}>
        <AppBar
          iconElementLeft={
            <Link to={`/devices`}>
              <IconButton>
                <ArrowBack />
              </IconButton>
            </Link>

          }
          title={deviceName}
        />
        <List className={css.list}>
          {this.showDeviceControls()}
        </List>
      </div>
    )

  }

}

export default DeviceControls
