import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ViewingsList from "./viewingsList";
import { createViewing } from "./functions/CreateViewing";
import { deleteViewing } from "./functions/DeleteViewing";
import { CardWrap } from "./styled";
import { connect } from "react-redux";
import Loading from "../generic/loading";
import CreateViewing from './createViewing'
import { getViewings } from "./functions/GetViewings";
function Viewings(props) {
  const [data, setData] = useState(null);
  const [viewings, setViewings] = useState(null);
  const [loading, setLoading] = useState(false);
  const [modal, setModal] = useState(null);
  const [flash, setFlash] = useState(null);
  const [reduxUser, setReduxUser] = useState(props.reduxUser);

  useEffect(() => {
    getViewings(setLoading, setViewings);
  }, [props.user]);

  const handleCreateViewing = e => {
    createViewing(e, data, props, setViewings, viewings, setFlash, setModal)
  };
  const handleDeleteViewing = item => {
    deleteViewing(item, props, setViewings);
  };

  return props.user ? (
    <section style={{ textAlign: "center" }}>
      <h3>All Viewings: </h3>
      {props.user.admin && props.user.properties.length ? (
        <CreateViewing 
          setModal={setModal}
          modal={modal}
          data={data} 
          setData={setData}
          props={props}
          handleCreateViewing={handleCreateViewing}
          reduxUser={reduxUser}
          flash={flash}
          setFlash={setFlash}
        />
      ) : props.user.admin && (
        <div>
          Add your <Link to="/admin">property</Link> to create viewings{" "}
        </div>
      )}
      {loading ? (
        <Loading />
      ) : (
        <CardWrap>
          {viewings &&
            viewings.map(item => (
              <ViewingsList
                item={item}
                props={props}
                handleDeleteViewing={handleDeleteViewing}
                key={item._id}
              />
            ))}
        </CardWrap>
      )}
    </section>
  ) : (
    <div style={{ textAlign: "center" }}>
      Please <Link to="/login">login</Link> to see Viewings
    </div>
  );
}

const mapStateToProps = state => ({
  reduxUser: state.user
});

export default connect(mapStateToProps)(Viewings);
