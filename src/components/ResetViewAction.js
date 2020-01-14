import React, { Fragment } from 'react';
import Button from '@material-ui/core/Button';
import { BulkDeleteButton } from 'react-admin';
import ResetViewsButton from './ResetViewsButton';

const PostBulkActionButtons = props => (
    <Fragment>
        <ResetViewsButton label="Reset Views" {...props} />
        {/* default bulk delete action */}
        <BulkDeleteButton {...props} />
    </Fragment>
);

export default PostBulkActionButtons;