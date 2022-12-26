import Spinner from 'react-bootstrap/Spinner';

function Loading() {
    return (<div className="Loader__container">
        <Spinner animation="border"/>
    </div>);
}

export default Loading;