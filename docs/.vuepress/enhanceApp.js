import ComponentLibrary from 'anatta-component-library'
import DirectiveLibary from 'accessibility-directives'

export default ( {
  Vue,
  options,
  router,
  siteData
} ) => {
  Vue.use( ComponentLibrary )
  Vue.use( DirectiveLibary, [ 'FocusTrap' ] )
}