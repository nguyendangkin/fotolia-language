function removeDiacritics(str) {
    const accentsMap = [
        { base: "a", letters: /[áàảãạ]/g },
        { base: "â", letters: /[ấầẩẫậ]/g },
        { base: "ă", letters: /[ắằẳẵặ]/g },
        { base: "e", letters: /[éèẻẽẹ]/g },
        { base: "ê", letters: /[ếềểễệ]/g },
        { base: "i", letters: /[íìỉĩị]/g },
        { base: "o", letters: /[óòỏõọ]/g },
        { base: "ô", letters: /[ốồổỗộ]/g },
        { base: "ơ", letters: /[ớờởỡợ]/g },
        { base: "u", letters: /[úùủũụ]/g },
        { base: "ư", letters: /[ứừửữự]/g },
        { base: "y", letters: /[ýỳỷỹỵ]/g },
    ];
    accentsMap.forEach((accent) => {
        str = str.replace(accent.letters, accent.base);
    });
    return str;
}
