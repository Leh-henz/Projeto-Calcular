import './App.css'
import Header from './componentes/header/Header'
import PostList from './componentes/postList/PostList'
import SideBox from './componentes/sideBox/SideBox'
function App() {

  return (
    <>
    <div className="App">
      <Header />
      <section style={{ display: "flex", gap: '50px' }}>
        <PostList />
        <SideBox />
      </section>
      
    </div>
    </>
  )
}

export default App