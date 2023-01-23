import {Component} from 'react'

import Loader from 'react-loader-spinner'

import CryptocurrenciesList from '../CryptocurrenciesList'

import './index.css'

class CryptocurrencyTracker extends Component {
  state = {currency: [], isLoading: true}

  componentDidMount() {
    this.fetchCurrency()
  }

  fetchCurrency = async () => {
    const list = await fetch('https://apis.ccbp.in/crypto-currency-converter')

    const rawlist = await list.json()

    const currency = rawlist.map(each => ({
      currencyName: each.currency_name,
      usdValue: each.usd_value,
      euroValue: each.euro_value,
      id: each.id,
      currencyLogo: each.currency_logo,
    }))

    this.setState({currency, isLoading: false})
  }

  render() {
    const {isLoading, currency} = this.state

    return (
      <div className="mainContainer">
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="Rings" height="80" width="80" color="#ffffff" />
          </div>
        ) : (
          <>
            <h1 className="mainheading">Cryptocurrency Tracker</h1>
            <img
              className="mainimg"
              src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
              alt="cryptocurrency"
            />
            <CryptocurrenciesList currency={currency} />
          </>
        )}
      </div>
    )
  }
}

export default CryptocurrencyTracker
