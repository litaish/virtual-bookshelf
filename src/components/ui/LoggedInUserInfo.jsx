
import PropTypes from 'prop-types';
import Icon from '@mdi/react';
import { mdiAccount } from '@mdi/js';

export const LoggedInUserInfo = ({ username }) => {
  return (
    <div className='flex justify-end'>
      <div className='flex justify-center items-center gap-2 font-medium text-gray-900 text-lg border-solid border-2 border-slate-300 py-3 px-8 rounded-full drop-shadow-sm'>
        <Icon path={mdiAccount} size={1.5} />
        Logged in as <span className='font-bold'>{username}</span>
      </div>
    </div>
  )
};

LoggedInUserInfo.propTypes = {
    username: PropTypes.string.isRequired,
};
