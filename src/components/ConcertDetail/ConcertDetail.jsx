const ConcertDetail = (props) => {
    if(!props.selected) {
        return (
            <div>
                <h2>No Details</h2>
            </div>
        )
    }
    return (
        <div>
            <h1>Concert Detail</h1>
            <ul>
                <li>
                    Venue Name: {props.selected.venueName}
                </li>
            </ul>
        </div>
    )
}

export default ConcertDetail;