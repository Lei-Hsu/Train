const info = {
  pid: "", // 身分證字號
  start: 1020, // 這邊輸入啟程起始站的編號
  end: 6000, // 這邊輸入啟程終點站的編號
  date: '2023/01/19', // 這邊設定日期(記得要用“”匡起來)
  first: 438, // 這邊輸入第一志願編號（如果不需要記得刪掉）
  second: 5250, // 這邊輸入第一志願編號（如果不需要記得刪掉）
  third: 448, // 這邊輸入第一志願編號（如果不需要記得刪掉）
  tickNum: 2, // 這邊輸入票數
}

const singleWay = () => {
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
  const tickNum = document.querySelector('[name="ticketOrderParamList[0].businessQty"]');
  tickNum.value = info.tickNum
}

singleWay()


