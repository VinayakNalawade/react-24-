import './index.css'

import CryptocurrencyItem from '../CryptocurrencyItem'

const CryptocurrenciesList = props => {
  const {currency} = props

  return (
    <ul className="currencyTable">
      <li className="currencyTableheadings">
        <p className="currencyTableName">Coin Type</p>
        <div className="currencyTablecurrencies">
          <p className="currencyvalue">USD</p>
          <p className="currencyvalue">EURO</p>
        </div>
      </li>
      {currency.map(each => (
        <CryptocurrencyItem item={each} key={each.id} />
      ))}
    </ul>
  )
}

export default CryptocurrenciesList
