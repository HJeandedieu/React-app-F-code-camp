const { useState, useMemo } = React;

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
    <div>
      <h1>Currency Converter</h1>
      <h2>{start} to {target} Conversion</h2>
      <input
        type="number"
        onChange={handleChange}
        value={value}
      /><br />
      <label>Start Currency:</label><br />
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
      </select><br />
      <label>TargetCurrency:</label><br />
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
      <h2>Converted Amount: {convertedAmount.toFixed(2)} {target}</h2>
    </div>
  )
}