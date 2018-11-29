import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { connect } from 'react-redux';
import { getLogs, deleteLog } from '../actions/logActions';
import PropTypes from 'prop-types';



class AdventureLog extends Component {
  

    componentDidMount() {
        this.props.getLogs();
    }

    onDeleteClick = (id) => {
        this.props.deleteLog(id);
    }

    render() {
        
        const { logs } = this.props.log;
        return(
        
            <Container>
            
                <ListGroup>
                    <TransitionGroup className="adventure-log">
                        {logs.map(({ _id, pName, cName, cRace, cClass, cBackground, cLevel, cInit, cPPer, cAC, cHP, cNotes, date }) => (
                            <CSSTransition key={_id} timeout={500} classNames="fade">
                                <ListGroupItem>
                                    Player: {pName}<br />
                                    Character: {cName}<br />
                                    Race: {cRace}<br />
                                    Class: {cClass}<br />
                                    Background: {cBackground}<br />
                                    Level: {cLevel}<br />
                                    Initiative: {cInit}<br />
                                    Passive Perception: {cPPer}<br />
                                    AC: {cAC}<br />
                                    HP: {cHP}<br />
                                    Notes: {cNotes}<br />
                                    Log Creation Date: {date}<br />
                                    <Button
                                        className="remove-btn"
                                        color="danger"
                                        size="small"
                                        onClick={this.onDeleteClick.bind(this, _id)}
                                    >
                                    &times;
                                    </Button> Delete Log
                                </ListGroupItem>
                            </CSSTransition>
                        ))}
                    </TransitionGroup>
                </ListGroup>
            </Container>
        );
    }
}

AdventureLog.propTypes = {
    getLogs: PropTypes.func.isRequired,
    log: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    log: state.log
});

export default connect(
    mapStateToProps, 
    { getLogs, deleteLog }
)(AdventureLog);