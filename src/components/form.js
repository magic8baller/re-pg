import React, { Fragment, useState } from 'react'
import useForm from '@utils/use-form'
import tw, { styled, css } from 'twin.macro'
import { calculateMonthlyPayment, initialVals } from '../utils'
import mortgageJs from 'mortgage-js'

const mortgageCalculator = mortgageJs.createMortgageCalculator()
export const initialVals = {
  totalPrice: Util.numberValueOrDefault(price, 0, DefaultPrice),
  downPayment: Util.numberValueOrDefault(downPayment, 0, DefaultDownPayment),
  interestRate: Util.numberValueOrDefault(interestRate, 0, DefaultInterestRate),
  months: Util.numberValueInSetOrDefault(
    months,
    ValidTermMonths,
    DefaultTermMonths
  ),
  taxRate: Util.numberValueOrDefault(taxRate, 0, DefaultTaxRate),
  insuranceRate: Util.numberValueOrDefault(
    insuranceRate,
    0,
    DefaultInsuranceRate
  ),
  mortgageInsuranceRate: Util.numberValueOrDefault(
    mortgageInsuranceRate,
    0,
    DefaultMortgageInsuranceRate
  ),
  additionalPrincipal: Util.numberValueOrDefault(
    additionalPrincipalPayment,
    0,
    DefaultAdditionalPrincipalPayment
  )
}
//  {
//   propertyValue: 0,
//   interestRate: 0,
//   downPayment: 0,
//   loanTerm: 0,
//   annualInsurance: 0,
//   annualTax: 0
// }
// import DollarInput from "./DollarInput";
// import PercentageInput from "./PercentageInput";
// import TermOption from "./TermOption";
// import ReportModal from "./ReportModal";
const FormTest = () => {
  const [propertyValue, setPropertyValue] = useState(0)
  const [interestRate, setInterestRate] = useState(0)
  const [downPayment, setDownPayment] = useState(0)
  const [loanTerm, setLoanTerm] = useState(0)
  const [annualInsurance, setInsurance] = useState(0)
  const [annualTax, setTax] = useState(0)
  const [showReport, setShowReport] = useState(false)
  const [monthlyPayment, setMonthlyPayment] = useState(0)
  const ifSubmitDisabled =
    values.propertyValue === 0 ||
    values.loanTerm === 0 ||
    values.downPayment === 0 ||
    values.interestRate === 0

  const calculate = e => {
    e.preventDefault()
    setMonthlyPayment(calculateMonthlyPayment(values))
    setShowReport(true)
  }

  return (
    <Fragment>
      <form
        // onSubmit={calculate}
        className="App"
        tw="bg-green-200 p-4 mx-auto"
        css={[
          css`
            input,
            button {
              border: black solid 1px;
              border-radius: 4px;
              ${tw`m-2`}
            }
            button {
              ${tw`p-2`}
            }
          `
        ]}
      >
        <div>
          <label>Property Value</label>
          <input
            type="text"
            inputMode="decimal"
            name="propertyValue"
            value={values.propertyValue}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Interest Rate</label>
          <input
            type="text"
            inputMode="decimal"
            name="interestRate"
            value={values.interestRate}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Down Payment</label>
          <input
            type="text"
            inputMode="decimal"
            name="downPayment"
            value={values.downPayment}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Annual Insurance</label>
          <input
            type="text"
            inputMode="decimal"
            name="annualInsurance"
            value={values.annualInsurance}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Annual Taxes</label>
          <input
            type="text"
            inputMode="decimal"
            name="annualTax"
            value={values.annualTax}
            onChange={handleChange}
          />
        </div>
        <div className="input-group">
          <label>Amortized For</label>
          <div className="radio-group">
            <label>15</label>

            <input
              tw="p-3"
              type="number"
              name="loanTerm"
              value={values.loanTerm}
              onChange={handleChange}
            />
            {/* <label>30</label>
            <input
            tw='p-2'
            type="radio"
              name="loanTerm"
              value={}
              
              onChange={handleChange}
            /> */}
          </div>
        </div>

        <button type="submit">Submit</button>
      </form>
      <StyledResults show={showReport}>
        <div>Your monthly payment is {monthlyPayment}</div>
      </StyledResults>
    </Fragment>
  )
}
const StyledResults = styled.div`
  ${tw`hidden`}
  ${({ show }) => show && tw`block container hover:border-black`}
color: purple;
  ${tw`border rounded`}
`
export default FormTest
