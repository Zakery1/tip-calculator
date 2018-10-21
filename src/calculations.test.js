

function withTax(subtotal, taxAmount) {
  return subtotal + taxAmount
}

test('adds 10 + .80 to equal 10.80', () => {
  expect(withTax(10, .80)).toBe(10.80);
});



function totalBill (withTax, gratuity) {
  return +(+withTax + +gratuity*(+withTax)).toFixed(2)
}

test('multiplies 10.80 times 10.80*.15 to be 12.42', () => {
  expect(totalBill(10.80, .15)).toBe(12.42)
})