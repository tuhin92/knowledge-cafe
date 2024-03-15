import profile from '../../assets/images/profile.png'
const Header = () => {
    return (
        <header style={{ borderBottom: '2px solid black' }} className='flex justify-between items-center p-4 max-w-7xl mx-auto'>
            <h1 className='text-4xl font-bold'>Knowledge Cafe</h1>
            <img src={profile} alt="" />
        </header>
    );
};

export default Header;