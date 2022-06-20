import store from '../store'

const isAuthenticatedGuard = async( to:any, from:any, next:any ) => {  
  const user = localStorage.getItem('User');

  if(user) next() 
  else next({name: 'Login'})
    // const { ok } = await store.dispatch('auth/checkAuthentication')

    // if ( ok ) next()
    // else next({ name: 'login' })
}

export default isAuthenticatedGuard