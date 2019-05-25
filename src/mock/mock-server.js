/**
 * mock数据服务器模块，用于暴露mock接口，返回数据
 */
import Mock from 'mockjs'
import Category from './category'
import CategoryList from './categoryList'
import HomeData from './homeData'

Mock.mock('/category', {code: 0, data: Category})
Mock.mock('/CategoryList', {code: 0, data: CategoryList})
Mock.mock('/HomeData', {code: 0, data: HomeData})

