//======================Hooks=================
import useShop from '../../hooks/useShop';
import { useEffect , useState } from 'react';

//=================Material UI=====================
import Badge, { badgeClasses } from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';


//=====================Router=====================
import { Link } from 'react-router-dom';

//=====================Motion=====================
import { motion } from 'framer-motion';

export default function NavBar() {
    const CartBadge = styled(Badge)`
      & .${badgeClasses.badge} {
        top: -12px;
        right: -6px;
      }
    `;
    const drawerWidth = 240; 
    //===========================Hooks===========================
    const [open, setOpen] = useState<boolean>(false);
    const {favorite, cart , setIsLoggedIn , isLoggedIn} = useShop(); //custom hook contain the context data

    //==========================Handlers==========================
    const handleDrawerOpen = () => {
        setOpen(true);
    };
    
    const handleDrawerClose = () => {
        setOpen(false);
    };

    
    //=====================Effects + Storage Data==================
    useEffect(() =>{
        localStorage.setItem('favoriteItems', JSON.stringify(favorite));
    }, [favorite])

    useEffect(() =>{
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart])

    useEffect(() =>{
        localStorage.setItem('isLoggedIn', JSON.stringify(isLoggedIn));
    },[isLoggedIn])

    return(
        <>
            <motion.nav initial={{opacity:0 , x:-100}} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0 }} transition={{duration:1 , ease:'easeOut' ,delay: 0.4}} className="bg-white text-text-color flex flex-row justify-between items-center text-center  w-full h-18 sticky top-0 z-50">
                <div className=" hidden md:flex flex-row text-center justify-between gap-8  ml-12 w-full items-center">
                    <div className="flex flex-row w-full gap-6">
                        <Link to={'/'} className="text-3xl font-semibold text-text-color">Shoply</Link>
                        <Link to={'/NewArrival'} className="text-[16px] text-text-color relative xl:top-2 hover:text-main cursor-pointer duration-500 transition hover:duration-500">New arrival</Link>
                        <a href='#Most-popular' className="text-[16px] text-text-color relative xl:top-2 hover:text-main cursor-pointer duration-500 transition hover:duration-500">Most popular</a>
                        <span className="text-[16px] text-text-color relative xl:top-2 hover:text-main cursor-pointer duration-500 transition hover:duration-500">About</span>
                        <a href="#Support" className="text-[16px] text-text-color relative xl:top-2 hover:text-main cursor-pointer duration-500 transition hover:duration-500">Support</a>
                    </div>
                    <div className="flex flex-row text-center gap-4 mr-12 justify-center items-center">
                        <button className='text-gray-700 hover:text-main-color cursor-pointer'>
                            <FavoriteBorderIcon  />
                            <CartBadge badgeContent={favorite.length}  color="primary" overlap="circular" />
                        </button>
                        <Link to={'/Cart'} className='text-gray-700 hover:text-main-color cursor-pointer mr-4'>
                            <ShoppingBagIcon  />
                            <CartBadge badgeContent={cart.length}   color="primary" overlap="circular" /> {/*add .length to solve the error */}
                        </Link>                                           
                        {isLoggedIn ? (
                            <button onClick={() => setIsLoggedIn(false)} className="cursor-pointer text-[16px] text-main bg-transparent duration-500 transition hover:duration-500 hover:bg-gray-200 hover:text-main hover:border-main border  w-18 h-9 text-center flex justify-center items-center rounded-md">LogOut</button>
                        ) : (
                            <Link to={'/LogIn'} className="cursor-pointer text-[16px] text-white bg-main duration-500 transition hover:duration-500 hover:bg-white hover:text-main hover:border-main border  w-18 h-9 text-center flex justify-center items-center rounded-md">LogIn</Link>
                        )}
                    </div> 
                </div>
               <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={handleDrawerOpen}
                edge="start"
                sx={[
                  {
                    mr: 2,
                    marginLeft:3
                  },
                  open && { display: 'none' },
                ]}
          >
            <MenuIcon />
          </IconButton>
            <Drawer sx={{
             width: drawerWidth,
             flexShrink: 0,
            '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}>
             
        
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            <MenuIcon />
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {['All mail', 'Trash', 'Spam'].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
            </motion.nav>
        </>
    )
}