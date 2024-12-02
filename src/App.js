import { Console } from '@woowacourse/mission-utils';

class App {
  async getCharacterString() {
    const input = Console.readLineAsync('덧셈할 문자열을 입력해 주세요\n');
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
