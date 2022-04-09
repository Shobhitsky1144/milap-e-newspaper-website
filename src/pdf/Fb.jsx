
import React,{useState} from 'react'
import MainHeader from "../header/MainHeader";
const Fb=()=>{

    return (
        <>
        <MainHeader/>
        <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fthedailymilap%2F&tabs=timeline&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"  className='iframe-size' scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
        </>
    )

}

export default Fb;