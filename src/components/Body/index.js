import React from "react"
import { withState } from "recompose"
import { inc, dec, evolve, pipe, objOf } from "ramda"
import { render, reducer } from "../../utils"
import styled from "styled-components"

const Body = styled.header`
  width: 100%;
`

const init = {
	button: '',
	count: 100
}

const enhance = withState("props", "update", init)
const asyncDom = pipe(objOf('button'), evolve)
const increment = evolve({ count: inc })
const decrement = evolve({ count: dec })

const onClick = update =>
  import("../Button").then(({ default: button }) => update(asyncDom(button)))

export default enhance(({ props: { button, count}, update }) => (
	<Body>
		{count}
    {button}
    <button onClick={() => onClick(update)}>Async load component</button>
		<button onClick={() => update(increment)}>Increment</button>
		<button onClick={() => update(decrement)}>Decrement</button>
	</Body>
))
