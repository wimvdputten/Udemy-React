import React from 'react';


class ImageList extends React.Component {

    componentDidMount() {
        console.log(this.props)
    }


    render() {
        const images = this.props.images.map(({id, description, urls}) => {
            return <img key={id} src={urls.regular} alt={description}/>
        });

        return <div>{images}</div>;
    }
}

export default ImageList;


