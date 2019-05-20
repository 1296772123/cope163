import HomePage from '../pages/HomePage/HomePage'
import classification from '../pages/classification/classification'
import GeneralThings from '../pages/GeneralThings/GeneralThings'
import TheShoppingCart from '../pages/TheShoppingCart/TheShoppingCart'
import personal from '../pages/personal/personal'
import Search from '../pages/Search/Search'

export default [
  {path: '/homepage', component: HomePage, meta: {isShow: true}},
  {path: '/classification', component: classification, meta: {isShow: true}},
  {path: '/generalthings', component: GeneralThings, meta: {isShow: true}},
  {path: '/theshoppingcart', component: TheShoppingCart, meta: {isShow: true}},
  {path: '/search', component: Search},
  {path: '/personal', component: personal},
  {path: '', redirect: '/homepage'}
]
