import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faEnvelope,
  faPhone,
  faPencil,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";

import CardAvatar from "./CardAvatar";
import useAppContext from "../context/AppContext";

const ContactCard = ({ contact, id }) => {
  const { full_name, email, phone, address } = contact;
  const { store, actions } = useAppContext();

  return (
    <div className="card p-2">
      <div className="row g-0 col-12">
        <div className="col-md-3">
          <div className="card-body d-flex justify-content-center align-items-center ">
            <CardAvatar />
          </div>
        </div>
        <div className="col-md-7">
          <div className="card-body text-md-start">
            <h3 className="card-title">{full_name}</h3>
            <h4 className="card-title">
              <FontAwesomeIcon className="me-3" icon={faLocationDot} />
              {address}
            </h4>
            <h5 className="card-title">
              <FontAwesomeIcon className="me-3" icon={faPhone} />
              {phone}
            </h5>
            <h5 className="card-title">
              <FontAwesomeIcon className="me-3" icon={faEnvelope} />
              {email}
            </h5>
          </div>
        </div>
        <div className="col-md-2 d-flex flex-col justify-content-center align-items-center">
          <div className="card-body d-flex justify-content-center ">
            <FontAwesomeIcon
              className="mx-3 icon-button"
              icon={faPencil}
              size="xl"
              onClick={() => {
                actions.setIdToModify(id);
                actions.setPromptOpen(true);
              }}
            />
            <FontAwesomeIcon
              className="mx-3 icon-button"
              icon={faTrash}
              onClick={() => {
                actions.setIdToModify(id);
                actions.setAlertOpen(true);
              }}
              size="xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
