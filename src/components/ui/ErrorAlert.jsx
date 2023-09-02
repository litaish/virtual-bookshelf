
import Icon from '@mdi/react';
import { mdiAlertCircle } from '@mdi/js';
import PropTypes from 'prop-types';

export const ErrorAlert = ({ errorMessage }) => {
    return (
        <div className='flex gap-4 rounded-md max-w-2xl border-solid border-red-600 border bg-red-200 p-4 text-red-800'>
            <Icon path={mdiAlertCircle} size={1.5} />
            <div>
                <p className='font-semibold text-xl'>Error!</p>
                <p className='text-xl'>{errorMessage}</p>
            </div>
        </div>
    )
};

ErrorAlert.propTypes = {
    errorMessage: PropTypes.string.isRequired,
}
