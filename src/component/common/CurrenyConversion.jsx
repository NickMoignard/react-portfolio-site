import axios from 'axios'
import React from "react";


// Refactor to js function to allow for storage, so we don't need to do multiple calls to API
class CurrenyConversion extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            countryName: 'AUD',
            countryCode: '',
            value: '0'
        }
    }


getGeoInfo = async () => {
    await axios.get('https://ipapi.co/json/').then((response) => {
        let data = response.data;
        this.setState({
            countryName: data.currency,
            countryCode: data.country_calling_code
        });
        this.forceUpdate();
    }).catch((error) => {
        console.log(error);
    });
    await axios.get(`http://data.fixer.io/api/latest?access_key=38c34d79cfd8c8bd9f8d8fce23c678c9&symbols=${this.state.countryName},AUD`).then((response) => {
        let data = response.data; 
        this.setState({
            value: Math.round((this.props.val/data['rates']['AUD'])*data['rates'][this.state.countryName])
        })
    });
};

// getConv = async () => {
//     await axios.get(`http://data.fixer.io/api/latest?access_key=38c34d79cfd8c8bd9f8d8fce23c678c9&symbols=${this.state.countryName},AUD`).then((response) => {
//         let data = response.data; 
//         this.setState({
//             value: (this.props.val/data['rates']['AUD'])*data['rates'][this.state.countryName]
//         })
//     });
// };

componentDidMount(){
    this.getGeoInfo();
}

render() {
    return (
        <div currency={this.state.countryName} style={{display: 'inline'}}>
            {this.state.value} {this.state.countryName}
        </div>
    )
}
}

export default CurrenyConversion;