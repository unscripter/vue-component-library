import ComponentLibrary from 'anatta-component-library'

console.log( "ComponentLibrary", ComponentLibrary )
export default ( {
  Vue,
  options,
  router,
  siteData
} ) => {
  Vue.use( ComponentLibrary )
}