import Link from 'next/link'
import './Banner.css'


export default function Banner() {
return (
        <div className="banner">
            <h1>Amazing Discounts on Garden Products!</h1>
            <Link className='link' href=''>Check out</Link>
        </div>
    )
}