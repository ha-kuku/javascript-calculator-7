import { Console } from '@woowacourse/mission-utils';
import { validateInputBlank, validateInteger, validateNumber } from './Validation.js';

class App {
  async getCharacterString() {
    const input = await Console.readLineAsync('덧셈할 문자열을 입력해 주세요\n');
    validateInputBlank(input);

    const numbers = input.split(/[,;]/).map((string) => {
      const trimmed = string.trim();
      validateNumber(trimmed);
      validateInteger(trimmed);
      return Number(trimmed);
    });

    const sum = numbers.reduce((acc, cur) => acc + cur, 0);
    Console.print(`결과 : ${sum}`);
  }

  async run() {
    try {
      await this.getCharacterString();
    } catch (err) {
      Console.print(err.message);
      throw err;
    }
  }
}

export default App;
