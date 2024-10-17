class CalculatorModel {
  constructor() {
    this.defaultSeparators = [",", ":"];
  }
}

// 문자열 -> 숫자, 합 반환 함수
calculate(input);
{
  if (!input) {
    return 0; // 빈 문자열은 0 반환
  }

  const { SEPARATOR, NUMBERS } = this.parseInput(input);
  this.validateNumbers(NUMBERS);

  return NUMBERS, reduce((sum, num) => sum + num, 0);
}

parseInput(input);
{
  let SEPARATOR = this.defaultSeparators;
  let numbersString = input;

  //커스텀 구분자 확인
  const customSeparatorCatch = input.match(/^\/\/(.)\n/);
  if (customSeparatorCatch) {
    SEPARATOR = [customSeparatorCatch[1]]; //커스텀 구분자 설정
    numbersString = input.split("\n")[1]; //커스텀 구분자 제외 부분
  }
}
