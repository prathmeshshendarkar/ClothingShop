import './directory-component.scss'
import Category from '../category/category-component'

const Directory = ({categories}) => {
    // console.log(categories);
    return (
        <div className='directory-container'>
            {categories.map((category) => {
                return (
                <Category key={category.id} category={category} />
                )
            })}
        </div>
    );
}

export default Directory