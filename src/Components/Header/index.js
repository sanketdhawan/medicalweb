import { Link } from "react-router-dom";
import Logo from "../../assets/images/logoMain.svg";
import Countrydropdown from "../CountrydropDown";
import { IoSearchSharp } from "react-icons/io5";
import Button from '@mui/material/Button';
import { IoDocumentTextSharp } from "react-icons/io5";
import { FaUser } from "react-icons/fa6";
import { IoCartSharp } from "react-icons/io5";
import { IoHeart } from "react-icons/io5";


const Header = () => {
    return (
        <>
            <div className="headerWrapper">
                <div className="top-strip bg-pink">
                    <div className="container">
                        <p className="mb-0 mt-0 text-center"> 30% discount all products spatial for February</p>
                    </div>
                </div>
                <header className="header">
                    <div className="container w-100">
                        <div className="row">
                            <div className="logoWrapper d-flex align items-center col-sm-2">
                                <Link to={'/'}><img src={Logo} alt="Logo"></img></Link>
                            </div>
                            <div className="col-sm-10 d-flex align-items-center part2">
                                <Countrydropdown></Countrydropdown>

                                {/* Header search start here */}
                                <div className="headerSearch ml-3 mr-3">
                                    <input type="text" placeholder="Search For Products..." />
                                    <Button><IoSearchSharp /></Button>
                                </div>
                                {/* Header search start here */}

                                <div className="part3 d-flex align-items-center ">
                                    <Button>
                                    <span className='ml-auto'><IoDocumentTextSharp /></span>
                                        <div className="prescription d-flex flex-column">
                                            <span className='upload'>Upload Now</span>
                                        </div>
                                    </Button>
                                </div>

                                <div className="part4 d-flex align-items-center ml-auto">
                                    <Button className="fav ml-3"><IoHeart/></Button>
                                </div>
                                <div className="part4 d-flex align-items-center ml-auto">
                                    <Button className="cart ml-3"><IoCartSharp/></Button>
                                </div>
                                <div className="part4 d-flex align-items-center ml-auto ">
                                    <Button className="circle ml-3"><FaUser/></Button>
                                </div>
                            </div>
                        </div>

                    </div>
                </header>
            </div>
        </>
    )

}
export default Header;