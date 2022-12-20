const info = {
  pid: "", // 身分證字號
  start: 1020, // 這邊輸入啟程起始站的編號
  end: 6000, // 這邊輸入啟程終點站的編號
  date: '2023/01/19', // 這邊設定日期(記得要用“”匡起來)
  first: 438, // 這邊輸入第一志願編號（如果不需要記得寫 0）
  second: 5250, // 這邊輸入第一志願編號（如果不需要記得寫 0）
  third: 448, // 這邊輸入第一志願編號（如果不需要記得寫 0）
  tickNum: 2, // 這邊輸入票數
  // 下面為回程
  returnStart: 6000, // 這邊輸入啟程起始站的編號
  returnEnd: 1020, // 這邊輸入啟程終點站的編號
  returnDate: '2023/01/29', // 這邊設定日期(記得要用“”匡起來)
  returnFirst: 421, // 這邊輸入第一志願編號（如果不需要記得寫 0）
  returnSecond: 5243, // 這邊輸入第一志願編號（如果不需要記得寫 0）
  returnThird: 477, // 這邊輸入第一志願編號（如果不需要記得寫 0）
  returnTickNum: 1, // 這邊輸入票數
}

const action = () => {
  // 設定身分證 pid
  const pid = document.querySelector('[name="pid"]')
  pid.value = info.pid

  // 設定起始站與終點站
  const start = document.querySelector('[name="ticketOrderParamList[0].startStation"]')
  const end = document.querySelector('[name="ticketOrderParamList[0].endStation"]')
  start.value = info.start
  end.value = info.end

  const date = document.querySelector('[name="ticketOrderParamList[0].rideDate"]')
  date.value = info.date

  // 設定前三順位車次
  const first = document.querySelector('[name="ticketOrderParamList[0].trainNoList[0]"]');
  const second = document.querySelector('[name="ticketOrderParamList[0].trainNoList[1]"]');
  const third = document.querySelector('[name="ticketOrderParamList[0].trainNoList[2]"]');
  first.value = info.first
  second.value = info.second
  third.value = info.third

  // 設定票數
  const tickNum = document.querySelector('[name="ticketOrderParamList[0].normalQty"]');
  tickNum.value = info.tickNum

  // 回程

  // 設定起始站與終點站
  const start2 = document.querySelector('[name="ticketOrderParamList[1].startStation"]')
  const end2 = document.querySelector('[name="ticketOrderParamList[1].endStation"]')
  start2.value = info.returnStart
  end2.value = info.returnEnd

  const date2 = document.querySelector('[name="ticketOrderParamList[1].rideDate"]')
  date2.value = info.returnDate

  // 設定前三順位車次
  const first2 = document.querySelector('[name="ticketOrderParamList[1].trainNoList[0]"]');
  const second2 = document.querySelector('[name="ticketOrderParamList[1].trainNoList[1]"]');
  const third2 = document.querySelector('[name="ticketOrderParamList[1].trainNoList[2]"]');
  first2.value = info.returnFirst
  second2.value = info.returnSecond
  third2.value = info.returnThird

  // 設定票數
  const tickNum2 = document.querySelector('[name="ticketOrderParamList[1].normalQty"]');
  tickNum2.value = info.returnTickNum
}

action()


