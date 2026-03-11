const { useState, useMemo } = React;

export function CurrencyConverter() {
  return (
    <div>
    <input
      type="text"
    />   

    <select name="from" id="from" >
      <option value="USD">USD</option>
      <option value="EUR">EUR</option>
      <option value="GBP">GBP</option>
      <option value="JPY">JPY</option>
    </select>
    <select name="to" id="to">
      <option value="USD">USD</option>
      <option value="EUR">EUR</option>
      <option value="GBP">GBP</option>
      <option value="JPY">JPY</option>
    </select>   
    </div>
  )
}