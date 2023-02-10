import * as React from 'react';
import { Link, HeadFC, PageProps } from "gatsby"

const Announcement = () => {
    return (
        <div className='announcement'>
            <div className='announcement-wrapper'>
                <Link to = "/" className='announcement-link'>Announcement</Link>
            </div>
        </div>
    )
}

export default Announcement