function getDiacriticMark(word) {
    const diacriticMap = {
        á: "a",
        à: "i",
        ả: "u",
        ã: "e",
        ạ: "o",
        ấ: "a",
        ầ: "i",
        ẩ: "u",
        ẫ: "e",
        ậ: "o",
        ắ: "a",
        ằ: "i",
        ẳ: "u",
        ẵ: "e",
        ặ: "o",
        é: "a",
        è: "i",
        ẻ: "u",
        ẽ: "e",
        ẹ: "o",
        ế: "a",
        ề: "i",
        ể: "u",
        ễ: "e",
        ệ: "o",
        í: "a",
        ì: "i",
        ỉ: "u",
        ĩ: "e",
        ị: "o",
        ó: "a",
        ò: "i",
        ỏ: "u",
        õ: "e",
        ọ: "o",
        ố: "a",
        ồ: "i",
        ổ: "u",
        ỗ: "e",
        ộ: "o",
        ớ: "a",
        ờ: "i",
        ở: "u",
        ỡ: "e",
        ợ: "o",
        ú: "a",
        ù: "i",
        ủ: "u",
        ũ: "e",
        ụ: "o",
        ứ: "a",
        ừ: "i",
        ử: "u",
        ữ: "e",
        ự: "o",
        ý: "a",
        ỳ: "i",
        ỷ: "u",
        ỹ: "e",
        ỵ: "o",
    };

    for (let char of word) {
        if (diacriticMap[char]) {
            return diacriticMap[char];
        }
    }
    return "";
}

function analyze() {
    const inputWord = document.getElementById("inputWord").value;
    const words = inputWord.split(/\s+/);
    let originalWords = [];
    let convertedWords = [];

    for (let word of words) {
        let originalWord = "";
        let convertedWord = "";
        let i = 0;

        while (i < word.length) {
            let found = false;

            // Kiểm tra các tổ hợp ba ký tự
            if (i + 2 < word.length) {
                const threeChars = word.slice(i, i + 3).toLowerCase();
                if (conversionRules[removeDiacritics(threeChars)]) {
                    originalWord += threeChars + " "; // Giữ nguyên khoảng trắng
                    convertedWord +=
                        conversionRules[removeDiacritics(threeChars)];
                    i += 3;
                    found = true;
                }
            }

            // Kiểm tra các tổ hợp hai ký tự
            if (!found && i + 1 < word.length) {
                const twoChars = word.slice(i, i + 2).toLowerCase();
                if (conversionRules[removeDiacritics(twoChars)]) {
                    originalWord += twoChars + " "; // Giữ nguyên khoảng trắng
                    convertedWord +=
                        conversionRules[removeDiacritics(twoChars)];
                    i += 2;
                    found = true;
                }
            }

            // Xử lý ký tự đơn
            if (!found) {
                const char = word[i].toLowerCase();
                originalWord += char + " "; // Giữ nguyên khoảng trắng
                convertedWord +=
                    conversionRules[removeDiacritics(char)] || char;
                i++;
            }
        }

        let diacriticMark = getDiacriticMark(word);
        if (diacriticMark) {
            convertedWord += "-" + diacriticMark;
        }

        originalWords.push(originalWord);
        convertedWords.push(convertedWord);
    }

    document.getElementById("originalWord").innerText = originalWords.join(" ");
    document.getElementById("convertedWord").innerText =
        convertedWords.join(" ");
}
