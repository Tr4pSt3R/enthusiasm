import * as React from 'react';

export interface Props {
  enthusiasmLevel: number;
}

interface State {
  currentEnthusiasmLevel: number
}

class Enthusiasm extends React.Component<Props> {
    constructor(props: Props) {
        super(props);
        this.state = {
          currentEnthusiasmLevel: props.enthusiasmLevel || 0
        }
    }

    showEnthusiasm = () => {
      this.setState({currentEnthusiasmLevel: this.state.currentEnthusiasmLevel + 1})
    };

    curbEnthusiasm = () => {
      if (this.state.currentEnthusiasmLevel <= 0) return;

      this.setState({currentEnthusiasmLevel: this.state.currentEnthusiasmLevel - 1})
    };

    generateEnthusiasm = (level: number):string => {
        if (level <= 0) {
            return '';
        } else {
            return ( '!' + this.generateEnthusiasm(level - 1));
        }
    };

    render(){
      return (
        <div>
          <span id='happyBoard'>Hello Prince{this.generateEnthusiasm(this.state.currentEnthusiasmLevel)}</span>
          <button id='yay' onClick={this.showEnthusiasm}>Yay</button>
          <button id='boo' onClick={this.curbEnthusiasm}>Boo</button>
        </div>
      );
    }
}

export default Enthusiasm;
