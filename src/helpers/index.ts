function calculateTotal(arr: string[]) {
  return arr.reduce(
    (acc, el) => acc + Math.round(Number(el.replace("$", "").replace(",", ""))),
    0
  );
}

function transformSumToString(num: number) {
  return `$ ${num}`;
}

export { calculateTotal, transformSumToString };
