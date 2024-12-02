const validateInputBlank = (input) => {
  if (input === null || input === '') {
    throw new Error('[ERROR] 입력이 빈칸입니다.');
  }
};

const validateNumber = (input) => {
  if (Number.isNaN(input) === false) {
    throw new Error('[ERROR] 숫자를 입력해주세요.');
  }
};

export { validateInputBlank, validateNumber };
