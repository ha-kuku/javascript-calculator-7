const validateInputBlank = (input) => {
  if (input === null || input === '') {
    throw new Error('[ERROR] 입력이 빈칸입니다.');
  }
};

const validateNumber = (input) => {
  if (isNaN(Number(input))) {
    throw new Error('[ERROR] 숫자를 입력해주세요.');
  }
};

const validateInteger = (input) => {
  if (Number(input) < 0) {
    throw new Error('[ERROR] 양의 정수를 입력해주세요');
  }
};

export { validateInputBlank, validateNumber, validateInteger };
