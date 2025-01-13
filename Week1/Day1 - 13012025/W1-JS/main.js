/**
 * การคำนวณเกรดนั้น จะมีการให้เกรดตามคะแนนในแต่ละช่วง ได้แก่
 * 1. 80-100 คะแนน ได้เกรด A
 * 2. 70-79 คะแนน ได้เกรด B
 * 3. 60-69 คะแนน ได้เกรด C
 * 4. 50-59 คะแนน ได้เกรด D
 * 5. ต่ำกว่า 50 คะแนน ได้เกรด F
 * 
 * ให้แก้ไข Function `calculateGrade` เพื่อให้ผลลัพธ์ถูกต้อง
 */

function calculateGrade(int) {
    if (int >= 80) {
      return "A";
    } else if (int >= 70) {
      return "B";
    } else if (int >= 60) {
      return "C";
    } else if (int >= 50) {
      return "D";
    } else {
      return "F";
    }
  }
  
  console.log(calculateGrade(100)); // A
  console.log(calculateGrade(99)); // A
  console.log(calculateGrade(70)); // B
  console.log(calculateGrade(69)); // C
  console.log(calculateGrade(55)); // D
  console.log(calculateGrade(49)); // F
  console.log(calculateGrade(0)); // F