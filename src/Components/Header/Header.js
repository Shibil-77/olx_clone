import React,{useContext} from 'react';
import { useHistory,Link } from 'react-router-dom';
import './Header.css';
import OlxLogo from '../../assets/OlxLogo';
import Search from '../../assets/Search';
import Arrow from '../../assets/Arrow';
import SellButton from '../../assets/SellButton';
import SellButtonPlus from '../../assets/SellButtonPlus';
import { AuthContext, FirebaseContext } from '../../store/Context';
function Header() {
  const {user} = useContext(AuthContext)
  const {firebase} = useContext(FirebaseContext)
  const  history=useHistory ()
  return (
    <div className="headerParentDiv">
      <div className="headerChildDiv">
        <div className="brandName">
          <OlxLogo></OlxLogo>
        </div>
        <div className="placeSearch">
          <Search></Search>
          <input type="text" />
          <Arrow></Arrow>
        </div>
        <div className="productSearch">
          <div className="input">
            <input
              type="text"
              placeholder="Find car,mobile phone and more..."
            />
          </div>
          <div className="searchAction">
            <Search color="#ffffff"></Search>
          </div>
        </div>
        <div className="language">
          <span> ENGLISH </span>
          <Arrow></Arrow>
        </div>
        <div className="loginPage">
          <span>{user? user.email : <Link to='/login'>Login</Link> }</span>
          <hr />
        </div>
        {/* firebase */}
        {user&& <span onClick={()=>{
          firebase.auth().signOut();
          history.push('/login')
        }}>Logout</span>}
      <Link to='/create'>
       <div className="sellMenu">
          <SellButton></SellButton>
          <div className="sellMenuContent">
            <SellButtonPlus></SellButtonPlus>
            <span>SELL</span>
          </div>
        </div>
      </Link> 
      </div>
    </div>
  );
}

export default Header;
