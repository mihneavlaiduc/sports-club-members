import { useDispatch } from "react-redux";
import { saveIdToEdit } from "../../actions";

const CardTemplate = (props) => {

  const dispatch = useDispatch();

  return (
    <div className="member-card">
      <div id="member-card-top">
        <div className="profile-picture">
          <div className="profile-picture-text">
            {props.firstName[0]}
            {props.lastName[0]}
          </div>
        </div>
        <div className="card-info">
          <div id="card-info-name">
            {" "}
            {props.firstName} {props.lastName}
          </div>
          <div className="card-info-id">ID:{props.id}</div>
          <div className="card-info-email">
            {props.firstName.toLowerCase()}.{props.lastName.toLowerCase()}
            @softivision.ro
          </div>
        </div>
      </div>
      <div id="member-card-bot">
        <button className="delete-button">Delete</button>
        <button onClick={() => dispatch(saveIdToEdit(props.id))} className="edit-button">
          Edit
        </button>
      </div>
    </div>
  );
};
export default CardTemplate;
