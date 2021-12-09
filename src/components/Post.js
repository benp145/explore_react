import React from 'react'
import { Link } from 'react-router-dom';
import moment from 'moment';
import firebase from '../firebase';

export const Post = (props) => {
    const p = props.p
    const showLink = props.showLink !== undefined ? props.showLink : true;

    return (
        <li className="list-group-item">
            <p>
                {showLink ? <Link to={{ pathname: `/blog/${p.id}` }}>{p.body}</Link> : p.body}
            </p>
            <p>
                <cite>&mdash; user's email address </cite>
                {/* <span className="float-right">
                    <small>{ moment( p.timestamp.toDate() ).fromNow() }</small>
                </span> */}
            </p>
        </li>
    )
}