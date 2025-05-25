import { Link } from 'react-router';

const ConcertList = (props) => {
    return (
        <div>
            <h1>Concert List</h1>
           <div>
        {!props.concerts.length ? (
          <h2>No Concerts Yet!</h2>
        ) : (
          <ul>
            {props.concerts.map((concert) => (
              <li 
                key={concert._id} 
                style={ {cursor: 'pointer', color: "#646CFF"}} 
                onClick={()=> props.handleSelectConcert(concert)}>
                  <Link to={`/concerts/${concert._id}`}>
                  {concert.venueName}
                  </Link>
                  
                  </li>
            ))}
          </ul>
        )}
      </div>
  
        </div>
    )
}

export default ConcertList;