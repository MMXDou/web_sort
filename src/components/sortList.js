import { isNumber } from "../utils/utils";

export function sortList(list) {
    //1. 去壳
    const expendedList = list.flat(Infinity)
    //2. 过滤非数字
    const filterList = expendedList.filter(element => isNumber(element))
    //3. 去冗余
    const set = new Set(filterList)
    //转回 list为后续排序
    const setList = [...set]
    //4. 排序
    const sortList = [...setList].sort((a, b) => a - b)

    return sortList
}