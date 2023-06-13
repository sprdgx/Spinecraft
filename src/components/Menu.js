import { useStore } from "../hooks/useStore"

export const Menu = () => {
	const [saveWorld, resetWorld] = useStore((state) => [state.saveWorld, state.resetWorld])

	return (<div className="menu absolute">
		<button
			onClick={() => saveWorld()}
		>Save</button>
		<button
			onClick={() => resetWorld()}
		>Reset</button>
		<div className="Keyboards">
			<p>
				Use Z to walk Forwards 
			</p>
			<p>
			Use S to walk Backwards
			</p>
			<p>
			Use Q to walk Left
			</p>
			<p>
			Use D to walk Right
			</p>
			<p>
				Click your mouse to Add a Cube
			</p>
			<p>
				Press Alt to delete a Cube
			</p>
		</div>
	</div>)
}