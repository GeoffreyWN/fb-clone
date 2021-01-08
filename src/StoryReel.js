import React from 'react';
import Story from './Story';
import './StoryReel.css'

function StoryReel() {
    return (
        <div className="storyReel">
            <Story profileSrc="https://www.flaticon.com/svg/static/icons/svg/672/672718.svg" image="https://cdn.pixabay.com/photo/2018/07/31/22/08/lion-3576045_960_720.jpg" title="Dan Greatest" />

            <Story profileSrc="https://www.flaticon.com/svg/static/icons/svg/3089/3089803.svg" image="https://cdn.pixabay.com/photo/2019/04/25/20/12/sport-4155825_960_720.jpg" title="Mary Cool" />

            <Story profileSrc="https://www.flaticon.com/svg/static/icons/svg/4003/4003884.svg" image="https://cdn.pixabay.com/photo/2014/12/15/17/16/pier-569314__340.jpg" title="Sammy Smooth" />

            <Story profileSrc="https://www.flaticon.com/svg/static/icons/svg/33/33339.svg" image="https://cdn.pixabay.com/photo/2016/04/15/10/35/horse-1330690__340.jpg" title="Fra Care" />

            <Story profileSrc="https://www.flaticon.com/svg/static/icons/svg/765/765797.svg" image="https://cdn.pixabay.com/photo/2016/08/03/14/24/roses-1566792__340.jpg" title="Bree Glam" />
        </div>
        
    )
}

export default StoryReel
