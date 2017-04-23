export default fn => (state, action) => {
	return fn[action.type](action, state)(state) || (x => x => x)
}
