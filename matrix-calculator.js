// Калькулятор матрицы судьбы
class MatrixCalculator {
    constructor(birthDate) {
        this.birthDate = birthDate;
    }

    // Получить числовое значение из даты
    getNumberFromDate() {
        const dateStr = this.birthDate.split('.').join('');
        return dateStr.split('').map(Number);
    }

    // Рассчитать базовые числа матрицы
    calculateBaseNumbers() {
        const numbers = this.getNumberFromDate();
        
        // Первое базовое число - сумма всех цифр даты рождения
        const firstNumber = numbers.reduce((a, b) => a + b, 0);
        
        // Второе базовое число - сумма цифр первого числа
        const secondNumber = String(firstNumber).split('').map(Number).reduce((a, b) => a + b, 0);
        
        // Третье базовое число - разница между первым и удвоенной первой цифрой даты рождения
        const thirdNumber = firstNumber - (2 * numbers[0]);
        
        // Четвертое базовое число - сумма цифр третьего числа
        const fourthNumber = String(Math.abs(thirdNumber)).split('').map(Number).reduce((a, b) => a + b, 0);

        return {
            character: firstNumber,
            energy: secondNumber,
            interest: thirdNumber,
            health: fourthNumber,
            logic: this.calculateAdditionalNumber(firstNumber, secondNumber),
            work: this.calculateAdditionalNumber(secondNumber, thirdNumber),
            luck: this.calculateAdditionalNumber(thirdNumber, fourthNumber),
            duty: this.calculateAdditionalNumber(fourthNumber, firstNumber)
        };
    }

    // Вспомогательный метод для расчета дополнительных чисел
    calculateAdditionalNumber(num1, num2) {
        return String(Math.abs(num1 + num2)).split('').map(Number).reduce((a, b) => a + b, 0);
    }

    // Получить описание для каждого числа
    getDescriptions(numbers) {
        const descriptions = {
            character: this.getCharacterDescription(numbers.character),
            energy: this.getEnergyDescription(numbers.energy),
            interest: this.getInterestDescription(numbers.interest),
            health: this.getHealthDescription(numbers.health),
            logic: this.getLogicDescription(numbers.logic),
            work: this.getWorkDescription(numbers.work),
            luck: this.getLuckDescription(numbers.luck),
            duty: this.getDutyDescription(numbers.duty)
        };
        return descriptions;
    }

    // Методы для получения описаний каждого аспекта
    getCharacterDescription(num) {
        const descriptions = {
            1: "Лидер, независимый и оригинальный мыслитель",
            2: "Дипломат, чуткий и внимательный к деталям",
            // ... добавить описания для других чисел
        };
        return descriptions[num] || "Сложная и многогранная личность";
    }

    // Добавить аналогичные методы для других аспектов
    getEnergyDescription(num) { /* ... */ }
    getInterestDescription(num) { /* ... */ }
    getHealthDescription(num) { /* ... */ }
    getLogicDescription(num) { /* ... */ }
    getWorkDescription(num) { /* ... */ }
    getLuckDescription(num) { /* ... */ }
    getDutyDescription(num) { /* ... */ }
}
