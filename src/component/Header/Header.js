
import imageHeader from './image.webp';
import { Link } from 'react-router-dom';
import '../../index.css';

function Header() {

    return (
        <>

            <div class="container header p-5  h-50">
                <div class="row">
                    <div class="col-md-6">

                        <h1 style={{ fontSize: '25px', fontWeight: '800', padding: '10px' }}>Build Your Library</h1>
                        <p style={{ padding: '5px' }}>Buy tow selected books and get on for free</p>
                        <button class="btn" style={{ backgroundColor: '#7e6a80 ', color: 'azure' }}><Link style={{ color: 'white' }} to="/allbooks">View all...</Link></button>
                    </div>
                    <div class="col-md-6">
                        <img src={imageHeader} alt="" class="w-100 h-100" />
                    </div>
                </div>


                <div class="container text-left popular ">
                    <h3 style={{ fontSize: '20px', fontWeight: '700' }}><Link to='/populer'>Popular Now..</Link></h3>
                </div>

            </div>

        </>
    )
}
export default Header;