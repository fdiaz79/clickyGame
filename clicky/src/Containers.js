import React from 'react';

const Containers = ({images, doOnClick}) => {
    console.log (images);
    const imagesList = images.length ? (
        images.map(image => {
            return(
                <div className="col-3" key={image.id} id="img-click">
                    <img src={image.source} alt={image.text} className="img-thumbnail" onClick={()=>doOnClick(image.id) } />
                </div>
            )
        })
    ) : (
        <p className="text-center"> No Images to display!!! </p>
    )
    const randomArr = [];
    const randomList = [];
    for (let i=0; i<imagesList.length; i++){
        let ranNum = Math.floor((Math.random()*imagesList.length));
        console.log(randomArr);
        console.log(ranNum);
        while(randomArr.indexOf(ranNum)!== -1){
            ranNum = Math.floor((Math.random()*imagesList.length));
        }
        randomList.push(imagesList[ranNum])
        randomArr.push(ranNum);
    }
    return(
        <div className="container">
            <div className="row">
                <div className="col-12 col-sm-2"></div>
                <div className="col-12 col-sm-8">
                    <div className="row">
                        { randomList }
                    </div>
                </div>
                <div className="col-12 col-sm-2"></div>
            </div>
        </div>
    )
}

export default Containers;