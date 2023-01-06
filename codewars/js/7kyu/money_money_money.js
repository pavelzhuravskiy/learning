const calculateYears = (principal, interest, tax, desired) => {
  let count = 0;
  while (principal < desired) {
    count++;
    principal = principal + principal * (interest - interest * tax);
  }
  return count;
};