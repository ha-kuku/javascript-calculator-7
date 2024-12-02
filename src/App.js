import { Console } from '@woowacourse/mission-utils';
import { validateInputBlank, validateNumber } from './Validation.js';

class App {
  async getCharacterString() {
    const input = await Console.readLineAsync('덧셈할 문자열을 입력해 주세요\n');
    validateInputBlank(input);

    input.split(',').map((string) => {
      validateNumber(string);
    });
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
