import { ThemeProvider } from "./lib/provider"
import { Test } from "./test"

import "./index.css"
import Header from "./header"

export default () => {
	return (
		<>
			<head>
				<meta charSet="utf-8" />
				<title>Qwik Blank App</title>
			</head>
			<body>
				<ThemeProvider
					themes={[
						["theme-blue", "theme-red", "theme-green"],
						["blue", "red", "green", "purple"],
						["dark", "light"],
					]}
					attribute="class"
				>
					
					<Header/>
					<Test />
				</ThemeProvider>
			</body>
		</>
	)
}
