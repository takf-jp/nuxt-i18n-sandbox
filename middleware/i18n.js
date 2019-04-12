export default function ({isHMR, app, store, route, params, error, redirect}) {
  const defaultLocale = app.i18n.fallbackLocale
  //if middleware is called from hot module replacement, ignore it
  if (isHMR) return
  //get locale from params
  const locale = params.lang || defaultLocale
  if (store.state.locales.indexOf(locale) === -1) {
    return error({message: 'This page could not be found.', statusCode: 404})
  }

  //set locale
  store.commit('SET_LANG', locale)
  app.i18n.locale = store.state.locale
  // if route is /<defaultLocale>/... => redirect to /...
  if (locale === defaultLocale && route.fullPath.indexOf('/' + defaultLocale) === 0) {
    const toReplace = '^/' + defaultLocale + (route.fullPath.indexOf('/' + defaultLocale + '/') === 0 ? '/' : '')
    const re = new RegExp(toReplace)
    return redirect(route.fullPath.replace(re, '/'))
  }
}