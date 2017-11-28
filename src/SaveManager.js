import React from 'react';

const SUCCESS = 'SUCCESS';
const FAILURE = 'FAILURE';
const WAITING = 'WAITING';
const IDLE    = 'IDLE';

function SaveButton({ onClick }) {
    return(
        <button className="pv2 ph3" onClick={onClick}>
        Save
        </button>
    )
}

function AlertBox({ status }) {
    if (status ===  FAILURE){
        return <div className="mv2">Save failed</div>;
    }else if (status === SUCCESS) {
        return <div className="mv2">Save successful</div>;
    }else if (status === WAITING) {
        return <div className="mv2">Saving...</div>;
    }else if (status === IDLE) {
        return <div className="mv2"></div>;
    }else{
        return null
    }
}

class SaveManager extends React.Component{
    constructor(){
        super();
        this.state = { saveStatus: IDLE };
        this.save = this.saveIt.bind(this);
    }

    saveIt(event){
        event.preventDefault();
        this.setState(() => ({saveStatus: WAITING}));
        // this.props.saveFunction(this.props.data).then(
        //     success => this.setState(() => ({saveStatus: SUCCESS})),
        //     failure => this.setState(() => ({saveStatus: FAILURE}))
        // );
        this.props.saveFunction(this.props.data).
            then(success => this.setState(() => ({saveStatus: SUCCESS}))).
            catch(failure => this.setState(() => ({saveStatus: FAILURE})));
    }

    render(){
        return(
            <div className="flex flex-column mv2">
                <SaveButton onClick={this.save} />
                <AlertBox status={this.state.saveStatus} />
            </div>
        )
    }
}

export default SaveManager;
