import './index.css'

const CryptocurrencyItem = props => {
  const {item} = props

  return (
    <li className="cryptocurrencyItem">
      <div className="currencyNameImg">
        <img
          className="currencyLogo"
          alt={item.currencyName}
          src={item.currencyLogo}
        />
        <p className="currencyName">{item.currencyName}</p>
      </div>
      <div className="currencyTablecurrencies">
        <p className="currencyvalueItems">{item.usdValue}</p>
        <p className="currencyvalueItems">{item.euroValue}</p>
      </div>
    </li>
  )
}

export default CryptocurrencyItem
