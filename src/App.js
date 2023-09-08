import {AddPostForm} from './features/posts/AddPostForm'
import {PostsList} from './features/posts/PostsList'
import ButtonAppBar from './ButtonAppBar'
import Footer from './Footer'
import BasicCard from './BasicCard'
import CardHeader from './template/CardHeader'
import CardCSSGrid from './template/CardCSSGrid'
import CardCSSFlex from './template/CardCSSFlex'
import CardCSSFlexOverlap from './template/CardCSSFlexOverlap'
import CardTailwind from './template/CardTailwind'
import CardTailwindResponsive from './template/CardTailwindResponsive'

function App() {
    return (
        <>
        <CardTailwindResponsive />
        <CardTailwind />
        <ButtonAppBar />
        <div className='container'>
            <div className='distance'>
                <AddPostForm />
            </div>
            
            <div className='distance'>
                <PostsList />
            </div>
            
        </div>
        <Footer />
        </>
    )
}
export default App