import React from 'react';
import slugify from 'slugify';
import FEATURES from '../FEATURES';



const USCurrencyFormat = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  });

  
class Customize extends React.Component {
  
    render(){
      
      const features = Object.keys(FEATURES)
       .map((feature, idx) => {
        const featureHash = feature + '-' + idx;
        const options = FEATURES[feature].map(item => {
          const itemHash = slugify(JSON.stringify(item));
          return (
            <div key={itemHash} className="feature__item">
              <input
                type="radio"
                id={itemHash}
                className="feature__option"
                name={slugify(feature)}
                onChange={e => this.props.updateFeature(feature, item)}
              />
              <label htmlFor={itemHash} className="feature__label">
                {item.name} ({USCurrencyFormat.format(item.cost)})
              </label>
            </div>
          );
        });
        return (
          <fieldset className="feature" key={featureHash}>
            <legend className="feature__name">
              <h3>{feature}</h3>
            </legend>
            {options}
          </fieldset>
        );
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