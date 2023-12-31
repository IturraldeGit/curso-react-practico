import { NavLink } from "react-router-dom";
import { useContext } from 'react'
import { ShoppingCartContext } from '../../Context'
import { ShoppingBagIcon } from '@heroicons/react/24/solid'

const Navbar = () => {
    const context = useContext(ShoppingCartContext)
    const activeStyle = 'underline underline-offset-4'

    return (
        <nav className="flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-light bg-white">
            <ul className="flex items-center gap-3">
                <li className="font-semibold text-lg">
                    <NavLink to='/'>
                        Shopi
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to='/'
                        onClick={() => context.setSearchByCategory()}
                        className={({ isActive }) => 
                            isActive ? activeStyle : undefined
                        }  
                    >
                        All
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to='/clothes'
                        onClick={() => context.setSearchByCategory('Clothes')}
                        className={({ isActive }) => 
                            isActive ? activeStyle : undefined
                        }      
                    >
                        Clothes
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/electronics'
                        onClick={() => context.setSearchByCategory('Electronics')}
                        className={({ isActive }) => 
                            isActive ? activeStyle : undefined
                        }      
                    >
                        Electronics
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/furnitures'
                        onClick={() => context.setSearchByCategory('Furniture')}
                        className={({ isActive }) => 
                            isActive ? activeStyle : undefined
                        }      
                    >
                        Furnitures
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/shoes'
                        onClick={() => context.setSearchByCategory('Shoes')}
                        className={({ isActive }) => 
                            isActive ? activeStyle : undefined
                        }      
                    >
                        Shoes
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/others'
                        onClick={() => context.setSearchByCategory('Others')}
                        className={({ isActive }) => 
                            isActive ? activeStyle : undefined
                        }      
                    >
                        Others
                    </NavLink>
                </li>
            </ul>
            <ul className="flex items-center gap-3">
                <li className="text-black/60">
                    daniel_iturralde_b@hotmail.com
                </li>
                <li>
                    <NavLink
                        to='/my-orders'
                        className={({ isActive }) => 
                            isActive ? activeStyle : undefined
                        }      
                    >
                        My Orders
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/my-account'
                        className={({ isActive }) => 
                            isActive ? activeStyle : undefined
                        }      
                    >
                        My Account
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/sign-in'
                        className={({ isActive }) => 
                            isActive ? activeStyle : undefined
                        }
                    >
                        Sign In
                    </NavLink>
                </li>
                <li className='flex items-center'>
                    <ShoppingBagIcon className="h-6 w-6 text-black"></ShoppingBagIcon>
                    <div>{context.cartProducts.length}</div>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar