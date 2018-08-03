import React, {Component} from 'react';
import Form from './Form';
import Preview from './Preview';

class Main extends Component {
  constructor(props){
    super(props);
    console.log(props);
  }

  render() {
    console.log(this.props);
    const {optionsSkills, optionsPalettes, optionsTypography, dataObject} = this.props;
    const {changeInputsDataName}= this.props;
    const {changeInputsDataJob}= this.props;
    return (
    <div className="main__form">
    <Preview
      optionsPalettes={optionsPalettes}
      optionsTypography={optionsTypography}
      dataObject={dataObject}
      optionsSkills={optionsSkills}/>
     <Form
      optionsPalettes={optionsPalettes}
      optionsTypography={optionsTypography}
      dataObject={dataObject}
      optionsSkills={optionsSkills}
      changeInputsDataName={changeInputsDataName}
      changeInputsDataJob={changeInputsDataJob} />
    </div>
  );
  }
}

export default Main;
