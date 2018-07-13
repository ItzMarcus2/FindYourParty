import React from "react";
import "./FestFeed.css";
import { test } from '../../../functions/database/FestFunctions';
import { parties } from "../../../functions/Functions";
import FestCard from "./festCard/FestCard";
import { connect } from "react-redux";

const mapStateToProps = state => {
  return { parties: state.parties, userRef: state.userRef };
};

class festFeed extends React.Component {
  async updateData() {
    await parties();
  }

  componentDidMount() {
    this.updateData();
    test();
  }

  render() {
    return (
      <div className="fest-container">
        <div className="fest-info-container">
          {this.props.parties &&
            this.props.parties.map(party => {
              return (
                <FestCard
                  key={party.id}
                  avatar="http://www.trendycovers.com/covers/converse_shoes_photography_facebook_cover_1389423906.jpg"
                  title={party.title}
                  host={party.host}
                  type={party.type}
                  date={party.date}
                  description={party.description}
                  partyID={party.id}
                  history={this.props.history}
                />
              );
            })}
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps)(festFeed);
