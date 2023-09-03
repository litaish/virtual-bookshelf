export const name_validation = {
  name: 'name',
  label: 'name',
  type: 'text',
  id: 'name',
  placeholder: 'write your name ...',
  validation: {
    required: {
      value: true,
      message: 'required',
    },
    maxLength: {
      value: 30,
      message: '30 characters max',
    },
  },
};

export const desc_validation = {
  name: 'description',
  label: 'description',
  multiline: true,
  id: 'description',
  placeholder: 'write description ...',
  validation: {
    required: {
      value: true,
      message: 'required',
    },
    maxLength: {
      value: 200,
      message: '200 characters max',
    },
  },
};

export const password_login_validation = {
  name: 'login_password',
  label: 'Password',
  type: 'password',
  id: 'login_password',
  placeholder: 'Type password ...',
  validation: {
    required: {
      value: true,
      message: 'required',
    },
  },
};

export const password_signup_validation = {
  name: 'signup_password',
  label: 'Password',
  type: 'password',
  id: 'signup_password',
  placeholder: 'Type password ...',
  validation: {
    required: {
      value: true,
      message: 'required',
    },
    minLength: {
      value: 6,
      message: 'min 6 characters',
    },
    pattern: {
      value: /(?=.*?[0-9])/,
      message: 'must contain at least one digit',
    },
  },
};

export const password_confirm_validation = {
  name: 'confirm_password',
  label: 'Confirm password',
  type: 'password',
  id: 'confirm_password',
  placeholder: 'Type password again ...',
  validation: {
    required: {
      value: true,
      message: 'required',
    },
  },
};

export const num_validation = {
  name: 'num',
  label: 'number',
  type: 'number',
  id: 'num',
  placeholder: 'write a random number',
  validation: {
    required: {
      value: true,
      message: 'required',
    },
  },
};

export const email_validation = {
  name: 'email',
  label: 'Email address',
  type: 'email',
  id: 'email',
  placeholder: 'example@domain.com',
  validation: {
    required: {
      value: true,
      message: 'required',
    },
    pattern: {
      value:
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      message: 'not a valid format',
    },
  },
};
