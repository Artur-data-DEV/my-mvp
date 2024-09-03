// import { useTheme } from './ThemeContext';


// export default function Navbar() {
//   const { theme, toggleTheme } = useTheme();

//   return (
//     <nav className={`p-4 ${theme === 'light' ? 'bg-white' : 'bg-gray-800'} text-${theme === 'light' ? 'black' : 'white'}`}>
//       <ul className="flex justify-between">
//         <li><a href="/">Home</a></li>
//         <li><a href="/users">Users</a></li>
//         <li><a href="/about">About</a></li>
//         <li>
//           <button onClick={toggleTheme}>
//             Toggle Theme
//           </button>
//         </li>
//       </ul>
//     </nav>
//   );
// }

import Link from "next/link"

export default function Navbar(){
    return (
        <nav className="p-4 m-4 border-4 border-solid border-black">
        <ul className="flex justify-between">
            <li><Link href="/" target="_blank">Home</Link></li>
            <li><Link href="/users">Users</Link></li>
            <li><Link href="/about">About</Link></li>
        </ul>
    </nav>
    )
}