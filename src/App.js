import {AddPostForm} from './features/posts/AddPostForm'
import {PostsList} from './features/posts/PostsList'
import ButtonAppBar from './template/ButtonAppBar'
import Footer from './Footer'
import BasicCard from './template/BasicCard'
import CardHeader from './template/CardHeader'
import CardCSSGrid from './template/CardCSSGrid'
import CardCSSFlex from './template/CardCSSFlex'
import CardCSSFlexOverlap from './template/CardCSSFlexOverlap'
import CardTailwind from './template/CardTailwind'
import CardTailwindResponsive from './template/CardTailwindResponsive'
import CardTailwindImage from './template/CardTailwindImage'

function App() {
    return (
        <>
        <BasicCard />
        <CardHeader />
        <CardCSSGrid />
        <CardCSSFlex />
        <CardCSSFlexOverlap />
        <CardTailwind />
        <CardTailwindResponsive />
        <CardTailwindImage />
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