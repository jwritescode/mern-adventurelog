import React, { Component } from 'react';
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    Form,
    FormGroup,
    Label,
    Input
} from 'reactstrap';
import { connect } from 'react-redux';
import { addLog } from '../actions/logActions';

class LogModal extends Component {
    state = {
        modal: false,
        pName: '',
        cName: '',
        cRace: '',
        cClass: '',
        cBackground: '',
        cLevel: '',
        cInit: '',
        cPPer: '',
        cAC: '',
        cHP: '',
        cNotes: ''
    };

    toggle = () => {
        this.setState({
            modal: !this.state.modal
        });
    };


    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    };

    onSubmit = e => {
        e.preventDefault();
        const newLog = {
            pName: this.state.pName,
            cName: this.state.cName,
            cRace: this.state.cRace,
            cClass: this.state.cClass,
            cBackground: this.state.cBackground,
            cLevel: this.state.cLevel,
            cInit: this.state.cInit,
            cPPer: this.state.cPPer,
            cAC: this.state.cAC,
            cHP: this.state.cHP,
            cNotes: this.state.cNotes
        }
      

        // Add Log via addLog action
        this.props.addLog(newLog);

        //close modal
        this.toggle();
    }

    render() {
        return(
            <div>
                <Button
                    color="dark"
                    style={{marginBottom: '2rem'}}
                    onClick={this.toggle}
                >Add Log</Button>
                <Modal
                    isOpen={this.state.modal}
                    toggle={this.toggle}
                >
                    <ModalHeader toggle={this.toggle}>Add To Adventure Log</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.onSubmit}>
                            <FormGroup>
                                <Label for="log">Log</Label>
                                <Input 
                                    type="text"
                                    name="pName"
                                    value={this.state.pName}
                                    //id="pName"
                                    placeholder="Add Player Name"
                                    onChange={this.onChange}
                                />
                                <Input 
                                    type="text"
                                    name="cName"
                                    value={this.state.cName}
                                    //id="cName"
                                    placeholder="Add Character Name"
                                    onChange={this.onChange}
                                />
                                <Input 
                                    type="text"
                                    name="cRace"
                                    value={this.state.cRace}
                                    //id="cRace"
                                    placeholder="Add Character Race"
                                    onChange={this.onChange}
                                />
                                <Input 
                                    type="text"
                                    name="cClass"
                                    value={this.state.cClass}
                                   // id="cClass"
                                    placeholder="Add Character Class"
                                    onChange={this.onChange}
                                />
                                <Input 
                                    type="text"
                                    name="cBackground"
                                    value={this.state.cBackground}
                                    //id="cBackground"
                                    placeholder="Add Character Background"
                                    onChange={this.onChange}
                                />
                                <Input 
                                    type="text"
                                    name="cLevel"
                                    value={this.state.cLevel}
                                    //id="cLevel"
                                    placeholder="Add Character Level"
                                    onChange={this.onChange}
                                />
                                <Input 
                                    type="text"
                                    name="cInit"
                                    value={this.state.cInit}
                                    //id="cInit"
                                    placeholder="Add Character Initiative"
                                    onChange={this.onChange}
                                />
                                <Input 
                                    type="text"
                                    name="cPPer"
                                    value={this.state.cPPer}
                                    //id="cPPer"
                                    placeholder="Add Character Passive Perception"
                                    onChange={this.onChange}
                                />
                                <Input 
                                    type="text"
                                    name="cAC"
                                    value={this.state.cAC}
                                    //id="cAC"
                                    placeholder="Add Character AC"
                                    onChange={this.onChange}
                                />
                                <Input 
                                    type="text"
                                    name="cHP"
                                    value={this.state.cHP}
                                   // id="cHP"
                                    placeholder="Add Character HP"
                                    onChange={this.onChange}
                                />
                                <Input 
                                    type="text"
                                    name="cNotes"
                                    value={this.state.cNotes}
                                    //id="cNotes"
                                    placeholder="Add Character Notes"
                                    onChange={this.onChange}
                                />
                                <Button
                                    color="dark"
                                    style={{marginTop: '2rem'}}
                                    block
                                >
                                    Add Log
                                </Button>
                            </FormGroup>
                        </Form>
                    </ModalBody>
                </Modal>
            </div>
        );
    }

}

const mapStateToProps = state => ({
    log: state.log
})

export default connect(mapStateToProps, { addLog })(LogModal);