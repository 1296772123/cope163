import ajax from './ajax'

export const getHomeData = () => ajax('/HomeData')
export const getCategoryList = () => ajax('/CategoryList')
export const getCategory = () => ajax('/category')
