import PropTypes from 'prop-types';
import { CiBookmark } from "react-icons/ci";
const Blog = ({blog, handleAddToBookmark, handleMarkAsRead }) => {
    const {title, cover, reading_time, author, author_img, posted_date, hashtag} = blog;
    return (
        <div className='mb-20'>
            <img src={cover} alt="" style={{ maxWidth: '100%', maxHeight: '60vh' }} />
            <div className='flex justify-between items-center'>
                <div className='flex items-center'>
                    <div>
                        <img className='w-14' src={author_img} alt="" />
                    </div>
                    <div className='ml-6'>
                        <h3 className='text-2xl '>{author}</h3>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div>
                    <span>{reading_time} min read</span>
                    <button 
                        onClick={()=> handleAddToBookmark(blog)} 
                        className='ml-2 text-red-600'
                        ><CiBookmark></CiBookmark></button>
                </div>
            </div>
            <h2 className="text-3xl">{title}</h2>
            <h4>{hashtag}</h4>
            <button 
                onClick={() => handleMarkAsRead(reading_time)}
                className='text-purple-600'
            >Mark as read </button>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookmark: PropTypes.func,
    handleMarkAsRead: PropTypes.func
}

export default Blog;