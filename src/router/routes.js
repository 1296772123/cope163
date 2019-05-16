import HomePage from '../pages/HomePage/HomePage'
import classification from '../pages/classification/classification'
import GeneralThings from '../pages/GeneralThings/GeneralThings'
import TheShoppingCart from '../pages/TheShoppingCart/TheShoppingCart'
import personal from '../pages/personal/personal'

export default [
  {path: '/homepage', component: HomePage},
  {path: '/classification', component: classification},
  {path: '/generalthings', component: GeneralThings},
  {path: '/theshoppingcart', component: TheShoppingCart},
  {path: '/personal', component: personal},
  {path: '', redirect: '/homepage'}
]
