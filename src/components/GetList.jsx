import React from 'react';
import PropTypes from 'prop-types';

GetList.propTypes = {
    propertyList : PropTypes.array,
};

GetList.defaultProps ={
   propertyList : [],
};

function GetList(props) {
    const {propertyList} = props;
    return (
       <ul className="post-list">
        {
            propertyList.map(post=>(
                <li className='lists' key={post.id}> {post.PropertyName}      {post.Cost} </li>
            )
                )
        }
       </ul>
    );
}

export default GetList;