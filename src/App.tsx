import CardList from "./components/CardList"
import { GlobalStyle } from "./components/Styles"

const App = () => {
  return (
    <div>
      <GlobalStyle />
      <CardList size={18}/>
    </div>
  )
}

export default App