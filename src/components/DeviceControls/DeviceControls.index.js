// @flow
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import getDeviceById from 'src/selectors/deviceById'
import {
  fetchDevices,
  editDevices,
} from 'src/redux/modules/device'
import DeviceControls from './DeviceControls'

type StateProps = {
  device: Object,
  devices: Object,
}

function mapStateToProps (
  state: GlobalReducerState,
  ownProps: Object,
): StateProps {

  return {
    device: getDeviceById(state, ownProps.params.deviceId) || {},
    devices: state.device,
  }

}

type DispatchProps = {
  fetchDevices: Function,
  editDevices: Function,
};

function mapDispatchToProps (dispatch: any): DispatchProps {

  return {
    fetchDevices: bindActionCreators(fetchDevices, dispatch),
    editDevices: bindActionCreators(editDevices, dispatch),
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(DeviceControls)
export type ReduxProps = StateProps & DispatchProps
