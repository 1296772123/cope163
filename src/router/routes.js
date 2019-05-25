import HomePage from '../pages/HomePage/HomePage'
import classification from '../pages/classification/classification'
import GeneralThings from '../pages/GeneralThings/GeneralThings'
import TheShoppingCart from '../pages/TheShoppingCart/TheShoppingCart'
import personal from '../pages/personal/personal'
import Search from '../pages/Search/Search'

import categorySub from '../pages/classification/CategoryList/CategoryList'

import Phone from '../pages/personal/personalPhone/personalPhone'
import Email from '../pages/personal/personalEmail/personalEmail'
import Register from '../pages/personal/personalRegister/personalRegister'

export default [
  {path: '/homepage', component: HomePage, meta: {isShow: true}},
  {
    path: '/classification',
    component: classification,
    meta: {isShow: true},
    children: [
      {
        path: '/classification/:id',
        component: categorySub,
        meta: {isShow: true},
      },

    ]
  },
  {path: '/generalthings', component: GeneralThings, meta: {isShow: true}},
  {path: '/theshoppingcart', component: TheShoppingCart, meta: {isShow: true}},
  {path: '/search', component: Search},
  {
    path: '/personal',
    component: personal,

    children: [
      {
        path: '/personal/phone',
        component: Phone,
      },
      {
        path: '/personal/email',
        component: Email,
      },
      {
        path: '/personal/register',
        component: Register,
      },
    ]

    // children: [
    //   {
    //     path: '/personal',
    //     component: PhoneOrEmail,
    //   },
    // ]
  },
  {path: '', redirect: '/homepage'}
]
