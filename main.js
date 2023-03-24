import './style.scss'
import { sortList } from './src/components/sortList'

const input = document.querySelector('input')

const span = document.querySelector('span')

const list = []
span.addEventListener('click', () => {
  if (input.value !== '') {
    list.push(+input.value) //if not number,input.value = NaN
  }
  input.value = ''
  const sortedList = sortList(list)

  const tbody = document.querySelector('tbody')
  tbody.innerHTML = ''

  sortedList.forEach((element, index) => {
    const tr = document.createElement('tr')
    const th = document.createElement('th')
    const td = document.createElement('td')
    th.innerHTML = index + 1
    td.innerHTML = element
    tr.append(th, td)
    tbody.append(tr)
  });

})