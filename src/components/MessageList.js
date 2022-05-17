import React from "react";
import { connect } from "react-redux";

function MessageList(props) {
  const arr = props.studentmessage;
  const listItems = arr.map((message, index) => <li key={index}>{message}</li>);
  return (
    <section>
      <div className="commentbox">
        <ul className="list">{listItems}</ul>
      </div>
    </section>
  );
}

const mapStatetoprops = (state) => {
  return {
    studentmessage: state.message,
  };
};

export default connect(mapStatetoprops)(MessageList);
