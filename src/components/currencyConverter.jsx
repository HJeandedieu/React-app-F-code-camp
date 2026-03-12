import { useState, useMemo} from 'react';

export function CurrencyConverter() {
  const rates = [
    {currency:"USD", value: 1},
    {currency:"EUR", value: 0.85},
    {currency:"GBP", value: 0.75},
    {currency:"JPY", value: 110}
  ]
  const [start, setStart] = useState("USD");
  const [target, setTarget] = useState("EUR");
  const [value, setValue] = useState(1);

  function handleStart(e){
    setStart(e.target.value);
  }

  function handleTarget(e){
    setTarget(e.target.value);
  }

  function handleChange(e){
    setValue(Number(e.target.value));
  }

  // MEMOIZED FUNCTION CALCULATION

  const convertedAmounts = useMemo(()=>{
    const startRate = rates.find(rate=> rate.currency === start).value;
    
    const result = {};

    rates.forEach(rate => {
      result[rate.currency] = value * (rate.value / startRate);
    });
    return result;
  }, [start, value])

  const convertedAmount = convertedAmounts[target];
  
  return (
    <div className="converterContainer">
      <div className="intro-text-converter">
        <h1>Currency Converter</h1>
        <p>{start} to {target} Conversion</p>
      </div>
      <div className="development">
        <label>Amount</label><br />
        <input
          type="number"
          onChange={handleChange}
          value={value}
          style={{ backgroundColor: 'rgb(14,14,14)', color: 'white' }}
        /><br />
        <div className="selection">
          <div className="selectionOne">
            <label>From</label><br />
            <select  
              name="start"  
              id="start"
              onChange={handleStart}
              value={start}
            >
              <option value="USD">USD</option>
              <option value="EUR">EUR</option>
              <option value="GBP">GBP</option>
              <option value="JPY">JPY</option>
            </select>
          </div>
          <div className="selectionTwo">
            <label>To</label><br />
            <select 
              name="target"
              id="target"
              onChange={handleTarget}
              value={target}
              >
              <option value="USD">USD</option>
              <option value="EUR">EUR</option>
              <option value="GBP">GBP</option>
              <option value="JPY">JPY</option>
            </select><br />
          </div>
        </div>
        <div className="converterResults">
          <p id="para">Converted Amount:</p>
          <p id="amount">{convertedAmount.toFixed(2)} {target}</p>
        </div>
      </div>
    </div>
  )
}