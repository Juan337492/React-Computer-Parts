import React from 'react';
import slugify from 'slugify';
import FEATURES from '../FEATURES';
import CustomizeItem from './CustomizeItem';


const USCurrencyFormat = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  });

  
class Customize extends React.Component {
  
    render(){
      
      const features = Object.keys(FEATURES)
       .map((feature, idx) => {
        return (<CustomizeItem feature = {feature} idx = {idx} updateFeature = {this.props.updateFeature}/>)
      });

        return(
            <div>
             <form className="main__form">
             <h2>Customize your laptop</h2>
            {features}
            </form>
            </div>
        )
    }
}

export default Customize;