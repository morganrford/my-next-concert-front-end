const BandDetail = (props) => {

    if(!props.selectedBand) {
        return (
            <div>
                <h2>No Band Details</h2>
            </div>
        )
    }
    return (
        <div>
            <h1>{props.selectedBand.bandName}</h1>
            <ul>
                <li>
                    Band Name: {props.selectedBand.bandName}
                </li>
                <li>Genre: {props.selectedBand.genre}</li>
                <li>Members: {props.selectedBand.members}</li>
            </ul>
            <button onClick={()=> props.handleBandFormView(props.selectedBand)}>Edit Band</button>
            <button onClick={()=>props.handleDeleteBand(props.selectedBand._id)}>Delete Band</button>
        </div>
    )
}

export default BandDetail;