import React from 'react';
import PropTypes from 'prop-types';

import { Badge } from 'components';

function LabelList({ data }) {
    return (
        <>
            {data.map(({ id, name }) => {
                return (
                    <Badge key={id} theme="light" margin=".3rem 0 0 .3rem">
                        {name}
                    </Badge>
                );
            })}
        </>
    );
}

LabelList.propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
        })
    ).isRequired,
};

export default LabelList;
