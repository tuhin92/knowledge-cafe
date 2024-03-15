import PropTypes from 'prop-types';
const Blog = ({blog}) => {
    const {title, cover, reading_time, author, author_img, posted_date, hashtag} = blog;
    return (
        <div>
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
                </div>
            </div>
            <h2 className="text-3xl">{title}</h2>
            <h4>{hashtag}</h4>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired
}

export default Blog;