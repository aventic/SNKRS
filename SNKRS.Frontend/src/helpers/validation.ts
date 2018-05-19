class ValidationHelper {
    isRequied = (input: string): boolean => {
        return input.length > 0;
    };

    isEmail = (input: string): boolean => {
        return /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(input);
    };

    isMinLength = (input: string, length: number): boolean => {
        return input.length >= length;
    };

    isMaxLength = (input: string, length: number): boolean => {
        return input.length <= length;
    };
}

export default new ValidationHelper();
