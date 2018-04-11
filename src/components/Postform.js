import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {createPost} from "../actions/postActions";

class Postform extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: '',
            body: ''
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e) {
        this.setState({[e.target.name]: e.target.value});
    }

    onSubmit(e) {
        e.preventDefault();

        this.props.createPost({
            title: this.state.title,
            body: this.state.body
        });
    }

    render() {
        return (
            <div>
                <h1>Add Post</h1>
                <form onSubmit={this.onSubmit}>
                    <div>
                        <label htmlFor="">Title: </label><br/>
                        <input name="title" type="text" onChange={this.onChange} value={this.state.title}/>
                    </div>
                    <br/>
                    <div>
                        <label htmlFor="">Body: </label><br/>
                        <textarea name="body" onChange={this.onChange} value={this.state.body}></textarea>
                    </div>
                    <br/>
                    <input type="submit"/>
                </form>
            </div>
        );
    }
}

Postform.propTypes = {
    createPost: PropTypes.func.isRequired
};

export default connect(null, {createPost})(Postform);