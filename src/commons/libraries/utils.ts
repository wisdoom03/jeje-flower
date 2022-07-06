export const getMyDate = (myDate: string) => {
      // myDate는 다른데서 사용못함 매개변수라서!
      const aaa = new Date(myDate)
      const yyyy = aaa.getFullYear()
      const mm = aaa.getMonth() + 1   // 0부터 시작하기때문에 1을 더해줘야한다
      const dd = aaa.getDate() // 일
      // const day = aaa.getDay()  // 요일
      return `${yyyy}년 ${mm}월 ${dd}일`
   }