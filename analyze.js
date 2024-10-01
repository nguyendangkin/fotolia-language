function analyze() {
    const inputWord = document.getElementById("inputWord").value.toLowerCase();
    const wordWithoutDiacritics = removeDiacritics(inputWord);
    let originalWord = "";
    let convertedWord = "";

    let i = 0;
    while (i < wordWithoutDiacritics.length) {
        let found = false;

        // Kiểm tra các nguyên âm ba
        if (i + 2 < wordWithoutDiacritics.length) {
            const threeChars = wordWithoutDiacritics.slice(i, i + 3);
            if (conversionRules[threeChars]) {
                originalWord += threeChars + " "; // Giữ nguyên khoảng trắng
                convertedWord += conversionRules[threeChars]; // Bỏ khoảng trắng
                i += 3;
                found = true;
            }
        }

        // Kiểm tra các phụ âm ghép và nguyên âm đôi
        if (!found && i + 1 < wordWithoutDiacritics.length) {
            const twoChars =
                wordWithoutDiacritics[i] + wordWithoutDiacritics[i + 1];
            if (conversionRules[twoChars]) {
                originalWord += twoChars + " "; // Giữ nguyên khoảng trắng
                convertedWord += conversionRules[twoChars]; // Bỏ khoảng trắng
                i += 2;
                found = true;
            }
        }

        // Kiểm tra từng ký tự đơn
        if (!found) {
            const char = wordWithoutDiacritics[i];
            originalWord += char + " "; // Giữ nguyên khoảng trắng
            convertedWord += conversionRules[char] || char; // Bỏ khoảng trắng
            i++;
        }
    }

    document.getElementById("originalWord").innerText = originalWord.trim();
    document.getElementById("convertedWord").innerText = convertedWord.trim();
}
