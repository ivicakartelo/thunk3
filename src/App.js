import {AddPostForm} from './features/posts/AddPostForm'
import {PostsList} from './features/posts/PostsList'
import ButtonAppBar from './ButtonAppBar'
import Footer from './Footer'
import BasicCard from './BasicCard'
import CardHeader from './template/CardHeader'
import CardCSSGrid from './template/CardCSSGrid'
import CardCSSFlex from './template/CardCSSFlex'
import CardCSSFlexOverlap from './template/CardCSSFlexOverlap'

function App() {
    return (
        <>
        <div className="h-screen bg-gray-200 py-16">
            <h1 className="mb-10 text-center text-3xl font-extrabold tracking-tight text-gray-900">This is design by Tailwind CSS</h1>
            <p className="text-center">Somme text here</p>
            <ul className="pt-10 text-center">
                <li className="mx-4 inline text-gray-500">Google</li>
                <li className="mx-4 inline text-gray-500">Apple</li>
                <li className="mx-4 inline text-gray-500">Meta</li>
            </ul>
            <button className="mx-auto mt-10 block bg-green-500 px-5 py-3 font-bold uppercase text-white">Find out more</button>
        </div>
        <CardCSSFlexOverlap />
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