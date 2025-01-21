const englishDigits = "0123456789";
const persianDigits = "۰۱۲۳۴۵۶۷۸۹";
export const toPersianDigits = (input) => {
    if (input.length === 0) {
        return "";
    }
    let result = "";
    for (let i = 0; i < input.length; i++) {
        const char = input[i];
        const index = englishDigits.indexOf(char);
        if (index !== -1) {
            result += persianDigits[index];
        }
        else {
            result += char;
        }
    }
    return result;
};
