import React from "react"
import ActionSheet from './ActionSheet';

class ActionSheetProvider extends React.Component {
  _actionSheetRef = null
  state = { showActionSheetWithOptions: null }

  componentDidMount() {
    if (this._actionSheetRef) {
      this.setState({ showActionSheetWithOptions: this._actionSheetRef.showActionSheetWithOptions })
    }
  }

  render() {
    const { showActionSheetWithOptions } = this.state
    const childProps = showActionSheetWithOptions
        ? { showActionSheetWithOptions }
        : {};
    return (
      <ActionSheet ref={component => (this._actionSheetRef = component)}>
      { React.cloneElement(React.Children.only(this.props.children), childProps)}
      </ActionSheet>
    );
  }
}

/**
 * The component passed as an argument will receive the `showActionSheetWithOptions` property.
 */
export default connectActionSheetDeclarative =
  (Component) => () => <ActionSheetProvider><Component /></ActionSheetProvider>;


